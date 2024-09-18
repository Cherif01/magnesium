import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { convertObjectInFormData } from 'src/app/app.component';
import { AddEntrepotComponent } from 'src/app/home/_modal/add-entrepot/add-entrepot.component';
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service';
import { AddPosComponent } from '../../_modal/add-pos/add-pos.component';
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component';

@Component({
  selector: 'app-list-point-of-sale',
  templateUrl: './list-point-of-sale.component.html',
  styleUrls: ['./list-point-of-sale.component.scss']
})
export class ListPointOfSaleComponent implements OnInit {


  title = 'Liste POS(PDV)'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'nom', 'reference','adresse' ,'typeMagasin','Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}


  ngOnInit(): void {
    this.getPdv()
  }
  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  getPdv () {
    this.service.getall('pdv', 'list').subscribe({
      next: (reponse: any) => {
        console.log('REPONSE SUCCESS : ', reponse)
        this.dataSource.data = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
    // this.dataSource.data = objet
  }

  openDialog() {
    this.dialog.open(AddPosComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
        //  const formData = convertObjectInFormData(result.data);
        //  this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('pdv', 'add', result.data).subscribe({
            next: (response) => {
              this.snackBar.open("Point de vente enregistre avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getPdv()
            },
            error: (err) => {
              this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-danger', 'text-white']
              })
            }
          })
        }
      })
  }

  deleteFunction (_api: string, id: any) {
    // console.log('id:', this.Id_achat);
    this.dialog
      .open(DeletePopupComponent, {
        disableClose: true,
        data: {
          title: ' Suppression demander! ',
          message: ' Voulez-vous vraiment supprimer ce entrepot ? ',
          messageNo: 'Non ?',
          messageYes: 'Oui, Confirmer !'
        }
      })
      .afterClosed()
      .subscribe(data => {
        if (data) {
          // console.log(data);
          this.dataSource.data = []
          this.service.delete(_api, 'delete', id).subscribe({
            next: (reponse: any) => {
              console.log('res : ', reponse)
              this.snackBar.open(
                'Suppression effectuer avec succès !',
                'Okay',
                {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                  panelClass: ['bg-success', 'text-white']
                }
              )
            },
            error: err => {
              console.error('Error : ', err)
            }
          })
          this.getPdv()
        }
      })
    //Requete suppression sur la DB
  }

}
