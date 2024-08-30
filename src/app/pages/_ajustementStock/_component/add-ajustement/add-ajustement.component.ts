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
    idProduit: new FormControl('', Validators.required),
    idFournisseur: new FormControl('', Validators.required),
    idEntrepot: new FormControl(''),
    quantite: new FormControl('', Validators.required),
    prixUniteAchat: new FormControl(''),
    prixUniteVente: new FormControl(''),
    datePeremption: new FormControl('')
  })

<<<<<<< HEAD
  titlle = 'Liste des ajustement stocks'
=======






titlle = 'Liste des ajustement stocks'
>>>>>>> 23b6f2d0742d0a0882073dd9956c669bf8cd20f8

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
  }
<<<<<<< HEAD
  constructor (
    private service: AjustementStockService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public location: Location,
    private dialog: MatDialog
  ) {}

  // imagePreview: string | ArrayBuffer | null = null
  // onFileChange (event: any) {
  //   const file = event.target.files[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onload = (e: any) => {
=======
constructor (
  private service: AjustementStockService,
  private snackBar: MatSnackBar,
  private fb: FormBuilder,
  public location:Location ,
  private dialog: MatDialog,
 
) {
  // this.calculateTotal();  // Appel initial pour calculer le montant total
  // this.AjustementStock.valueChanges.subscribe(() => {
  //   this.calculateTotal();  // Recalculer le montant total à chaque modification
  // });
  
}
// calculateTotal(): void {
//   const quantite = this.AjustementStock.get('quantite')?.value || 0;
//   const prixUniteAchat = this.AjustementStock.get('prixUniteAchat')?.value || 0;
//   const total = quantite * prixUniteAchat;
//   this.AjustementStock.get('montantTotal')?.setValue(total, { emitEvent: false });
//   }
>>>>>>> 23b6f2d0742d0a0882073dd9956c669bf8cd20f8

  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }
  Produit = [
    {
      id: 1,
      name: 'Fanta'
    },
    {
      id: 2,
      name: 'Ordinateur'
    },
    {
      id: 3,
      name: 'Chemise'
    },
    {
      id: 4,
      name: 'Tv'
    }
  ]
  Fournisseur = [
    {
      id: 1,
      name: 'Mahmud'
    },
    {
      id: 2,
      name: 'Cheick'
    },
    {
      id: 3,
      name: 'Oumar'
    }
  ]
  Entrepot = [
    {
      id: 1,
      name: 'Coyah'
    },
    {
      id: 2,
      name: 'Boké'
    },
    {
      id: 3,
      name: 'Gbessia'
    }
  ]
  // onSubmit (): void {
  //   if (this.AjustementStock.valid) {
  //     // console.log('Formulaire : ', this.ajustementForm.value)
  //     this.service.create('approvisionnement', 'add', this.AjustementStock.value).subscribe({
  //       next: (response) => {
  //         this.snackBar.open("Approvisionnement effectuer avec succès !", "Okay", {
  //           duration: 3000,
  //           horizontalPosition: "right",
  //           verticalPosition: "top",
  //           panelClass: ['bg-success', 'text-white']

  //         })
  //       },
  //       error: (err) => {
  //         this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
  //           duration: 3000,
  //           horizontalPosition: "left",
  //           verticalPosition: "top",
  //           panelClass: ['bg-danger', 'text-white']
  //         })
  //       }
  //     })
  //   }
  // }
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

  getAjustementAchat () {
    this.service.getall('approvisionnement', 'list').subscribe({
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
      console.log('Formulaire : ', this.AjustementStock.value)
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
          this.getAjustementAchat()
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
