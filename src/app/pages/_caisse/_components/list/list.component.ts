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
import { AddCompteComponent } from 'src/app/pages/_comptePaiement/_modal/add-compte/add-compte.component';
import { CaisseService } from '../../_services/caisse.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'La Comptabilite'

  // Magasin Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])
  magasincol: string[] = ['id', 'nom', 'adresse' , 'reference' ,'Action']
   // Magasin Assign the data to the data source for the table to render
   historiquedataSource = new MatTableDataSource([])
   transfertcol: string[] = ['id',  'typeOperation' ,'typePaiement', 'montant' ,'motif','Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: CaisseService
  ) {}


  ngOnInit(): void {
    this.getCaisse()

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

  getCaisse () {
    this.service.getall('caisse', 'list').subscribe({
      next: (reponse: any) => {
        console.log('REPONSE SUCCESS : ', reponse)
        this.dataSource.data   = reponse
        this.service.getall('caisse', 'list').subscribe({
          next: (res: any) => {
            console.log('REPONSE SUCCESS : ', res);

            this.historiquedataSource.data = res
          }
        })
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })

  }



  openDialog() {
    this.dialog.open(AddCompteComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
         // const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('caisse', 'add',result.data ).subscribe({
            next: (response) => {
              this.snackBar.open("Caisse enregistré avec succès !", "Okay", {
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


                horizontalPosition : "right",
                verticalPosition : "bottom",

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
          message: ' Voulez-vous vraiment supprimer ce magasin ? ',
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
