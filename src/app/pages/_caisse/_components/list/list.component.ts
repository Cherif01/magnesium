import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service';
import { Location } from '@angular/common';
import { AddCaisseComponent } from '../../_modal/add-caisse/add-caisse.component';
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Caisse = new FormGroup({
    typeOperation: new FormControl(''),
    typePaiement: new FormControl(''),
    montant: new FormControl(''),
    motif: new FormControl(''),
    date: new FormControl(''),
   
  })
  title = 'Liste des Caisses'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])
  

  displayedColumns: string[] = [
    'id', 
    'typeOperation', 
    'typePaiement', 
    'montant', 
    'motif',
    "date", 
    'Action']

  dataSource2 = new MatTableDataSource([])
  displayedColumns2: string[] = [
    'id', 
    'typeOperation', 
    'typePaiement', 
    'montant', 
    'motif',
    "date", 
    'Action'
  ]
  
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
    this.getCaisse()
  }

  ngAfterViewInit () {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
    // 2e mat-tab
    this.dataSource2.paginator = this.paginator
    this.dataSource2.sort = this.sort
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    this.dataSource2.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage()
    }
  }

  getCaisse () {
    this.service.getall('caisse', 'list').subscribe({
      next: (reponse: any) => {
         console.log('REPONSE SUCCESS : ', reponse)
        this.dataSource.data = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }

  openDialog() {
    this.dialog.open(AddCaisseComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          console.log(result.data);
          // const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('caisse', 'add', result.data).subscribe({
            next: (response) => {
              this.snackBar.open("Caisse enregistre avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getCaisse()
            },
            error: (err) => {
              this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
                duration: 3000,
                horizontalPosition: "left",
                verticalPosition: "top",
                panelClass: ['bg-danger', 'text-white']
              })
            }
          })
        }
      })
  }

   // DELETE
   deleteFunction (_api: string, id: any) {
    // console.log('id:', this.Id_achat);
    this.dialog
      .open(DeletePopupComponent, {
        disableClose: true,
        data: {
          title: ' Suppression demander! ',
          message: ' Voulez-vous vraiment supprimer ce Caisse ? ',
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
          this.getCaisse()
        }
      })
    //Requete suppression sur la DB
  }

  

}
