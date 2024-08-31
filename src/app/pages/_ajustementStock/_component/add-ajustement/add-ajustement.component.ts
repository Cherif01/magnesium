import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog
} from '@angular/material/dialog'
import { AddAjustementStockComponent } from '../../_modal/add-ajustement-stock/add-ajustement-stock.component'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Location } from '@angular/common'
import { AjustementStockService } from '../../_service/ajustement-stock.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component'

@Component({
  selector: 'app-add-ajustement',
  templateUrl: './add-ajustement.component.html',
  styleUrls: ['./add-ajustement.component.scss']
})
export class AddAjustementComponent implements OnInit {
  title = 'Formulaire Approvisionnement '
  // MISE A JOUR FIxiNG
  AjustementStock = new FormGroup({
    produit: new FormControl('', Validators.required),
    fournisseur: new FormControl('', Validators.required),
    entrepot: new FormControl(''),
    quantite: new FormControl('', Validators.required),
    prixUniteAchat: new FormControl(''),
    prixUniteVente: new FormControl(''),
    datePeremption: new FormControl('')
  })


titlle = 'Liste des ajustement stocks'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [
    'id',
    'produit',
    'quantite',
    'prixUniteAchat',
    'prixUniteVente',
    'Action'
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  ngOnInit (): void {
    this.getAjustementAchat()
    this.getProduit()
    this.getEntrepot()
    this.getFournisseur()
  }
  constructor (
    private service: AjustementStockService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public location: Location,
    private dialog: MatDialog
  ) {}

  Produit: any = []
  Entrepot: any = []
  Fournisseur: any = []

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

  // Liste des produits
  getProduit () {
    this.service.getall('produit', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('LISTE PRODUIT : ', reponse)
        this.Produit = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }
  // Liste des entrepot
  getEntrepot () {
    this.service.getall('entrepot', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('REPONSE SUCCESS : ', reponse)
        this.Entrepot = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }
  // Liste des fournisseurs
  getFournisseur () {
    this.service.getall('fournisseur', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('REPONSE SUCCESS : ', reponse)
        this.Fournisseur = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }

  getAjustementAchat () {
    this.service.getall('approvisionnement', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('AJUSTEMENT : ', reponse)
        this.dataSource.data = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
    // this.dataSource.data = objet
  }

  openDialog () {
    this.dialog
      .open(AddAjustementStockComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          console.log(result.data)
          //const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length)
          //Envoyer dans la Base
          this.service
            .create('approvisionnement', 'add', result.data)
            .subscribe({
              next: response => {
                this.snackBar.open('Achat enregistre avec succès !', 'Okay', {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                  panelClass: ['bg-success', 'text-white']
                })
                this.getAjustementAchat()
              },
              error: err => {
                this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
                  duration: 3000,
                  horizontalPosition: 'left',
                  verticalPosition: 'top',
                  panelClass: ['bg-danger', 'text-white']
                })
              }
            })
        }
      })
  }

  onSubmit (): void {
    if (this.AjustementStock.valid) {
      // console.log('Formulaire : ', this.AjustementStock.value)
      this.dataSource.data = []
      this.service
        .create('approvisionnement', 'add', this.AjustementStock.value)
        .subscribe({
          next: response => {
            this.snackBar.open('Produit enregistre avec succès !', 'Okay', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-success', 'text-white']
            })
            this.getAjustementAchat()
          },
          error: err => {
            this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom',
              panelClass: ['bg-danger', 'text-white']
            })
            console.log('Error : ', err)
          }
        })
    }
  }


  deleteFunction (_api: string, id: any) {
    console.log('id:', id);
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
          this.service.delete(_api, 'delete', id).subscribe({
            next: (reponse: any) => {
              // console.log('res : ', reponse)
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
              window.location.reload()
            },
            error: err => {
              console.error('Error : ', err)
            }
          })

        }
      })
    //Requete suppression sur la DB
  }
  onReset (): void {
    this.AjustementStock.reset()
  }

  saveDataAjustementStock () {
    if (this.AjustementStock.valid) {
    }
  }
}
