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

  // 
  dataSource = new MatTableDataSource([])
  dashboard: any =['entree', 'sortie', 'vente' , 'depense' ,'credit','montant'] 
   // 
   historiquedataSource = new MatTableDataSource([])
   caisse: string[] = ['id',  'typeOperation' ,'typePaiement', 'montant' ,'motif','Action']

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
    this.getDashboard()

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
        this.historiquedataSource.data   = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })

  }
  depense: any
  credit: any
  vente: any
  entree: any
  sortie :any
  montantTotal :any
  dashbord : any 

  getDashboard(){
    this.service.getall('caisse', 'dashboard').subscribe({
      next: (reponse: any) => {
       
        this.dashboard = reponse [0] 
        this.sortie = reponse [0] ['sortie']
        this.depense = reponse [0] ['depense']
        this.credit = reponse [0] ['credit']
        this.vente = reponse [0] ['vente']
        this.entree = reponse [0] ['entree']
        this.montantTotal =reponse [0]['montantTotal']
        console.log('Info dashbord: ', this.dashboard )
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
