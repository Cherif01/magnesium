import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AddMagasinComponent } from '../../_modal/add-magasin/add-magasin.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service';
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component';
import { HomeService } from '../../_services/home.service';
import { AddTransfertComponent } from 'src/app/pages/_transfertStock/_component/add-transfert/add-transfert.component';
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {

  title = 'Liste des Magasins'

  // Magasin Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])
  magasincol: string[] = ['id', 'nom', 'adresse' , 'reference' ,'Action']
   // Magasin Assign the data to the data source for the table to render
   transfertdataSource = new MatTableDataSource([])
   transfertcol: string[] = ['id',  'magasin' ,'produit', 'quantite' ,'status','Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: HomeService
  ) {}


  ngOnInit(): void {
    this.getMagasin()

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

  getMagasin () {
    this.service.getall('magasin', 'list').subscribe({
      next: (reponse: any) => {
        console.log('REPONSE SUCCESS : ', reponse)
        this.dataSource.data   = reponse
        this.service.getall('transfert', 'list').subscribe({
          next: (res: any) => {
            console.log('REPONSE SUCCESS : ', res);
            
            this.transfertdataSource.data = res
          }
        })
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  
  }
 
  

  openDialog() {
    this.dialog.open(AddMagasinComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
         // const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('magasin', 'add',result.data ).subscribe({
            next: (response) => {
              this.snackBar.open("Magasin enregistré avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getMagasin()
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
          this.getMagasin()
        }
      })
    //Requete suppression sur la DB
  }
  openDialog2() {
    this.dialog.open(AddTransfertComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
         // const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('transfert', 'add',result.data ).subscribe({
            next: (response) => {
              this.snackBar.open("Transfert effectuer avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getMagasin()
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

}
