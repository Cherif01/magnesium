import { Location } from '@angular/common'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatTableDataSource } from '@angular/material/table'
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service'
import { AddCategoryComponent } from '../../_modal/add-category/add-category.component'
import { AddSubCategoryComponent } from '../../_modal/add-sub-category/add-sub-category.component'
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component'

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {
  title = 'Classification'

  // Assign the data to the data source for the table to render
  category = new MatTableDataSource([])
  catColonne: string[] = ['position', 'libelle', 'description', 'Action']

  // SUB
  subCategory = new MatTableDataSource([])
  subColonne: string[] = ['position', 'libelle', 'description', 'Action']

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
    this.getListCategorie()
  }

  getListCategorie () {
    this.service.getall('categorie', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('REPONSE SUCCESS : ', reponse)
        this.category.data = reponse
        this.service.getall('sousCategorie', 'list').subscribe({
          next: (res: any) => {
            this.subCategory.data = res
          }
        })
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }

  // Category
  addCategory () {
    this.dialog
      .open(AddCategoryComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          // console.log(result.data)
          this.category.data = []
          // const formData = convertObjectInFormData(result.data);
          //Envoyer dans la Base
          this.service.create('categorie', 'add', result.data).subscribe({
            next: response => {
              this.snackBar.open(
                'Une nouvelle category enregistre avec succès !',
                'Okay',
                {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                  panelClass: ['bg-success', 'text-white']
                }
              )
              this.getListCategorie()
            },
            error: err => {
              this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
                panelClass: ['bg-danger', 'text-white']
              })
            }
          })
        }
      })
  }

  // Sous category
  addSubCategory () {
    this.dialog
      .open(AddSubCategoryComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          // console.log(result.data)
          this.category.data = []
          // const formData = convertObjectInFormData(result.data);
          //Envoyer dans la Base
          this.service.create('sousCategorie', 'add', result.data).subscribe({
            next: response => {
              this.snackBar.open(
                'Une nouvelle sous-category enregistre avec succès !',
                'Okay',
                {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                  panelClass: ['bg-success', 'text-white']
                }
              )
              this.getListCategorie()
            },
            error: err => {
              this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
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
          message: ' Voulez-vous vraiment supprimer ce locateur ? ',
          messageNo: 'Non ?',
          messageYes: 'Oui, Confirmer !'
        }
      })
      .afterClosed()
      .subscribe(data => {
        if (data) {
          // console.log(data);
          this.category.data = []
          this.subCategory.data = []
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
          this.getListCategorie()
        }
      })
    //Requete suppression sur la DB
  }
}
