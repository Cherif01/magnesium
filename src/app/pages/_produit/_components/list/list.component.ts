import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service'

import { Location } from '@angular/common'
import { ProduitComponent } from '../../_modal/produit/produit.component'
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component'
import { LINK_STATIC_FILES } from 'src/app/config'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = 'Liste des  produits'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [
    'reference',
    'image',
    'designation',
    'sousCategorie',
    'stockDispo',
    'Action'
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any
  linkImg: string = LINK_STATIC_FILES

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
    this.getProduit()
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

  getProduit () {
    this.service.getall('produit', 'list').subscribe({
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

  addProduct () {
    this.dialog
      .open(ProduitComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          this.dataSource.data = []

          const formData = new FormData()

          formData.append('reference', result.data.reference)
          formData.append('designation', result.data.designation)
          formData.append('id_sousCategorie', result.data.id_sousCategorie)
          formData.append('description', result.data.description)
          formData.append('seuil', result.data.seuil)
          // Ajout des variables au BACK_
          this.service.create('produit', 'add', formData).subscribe({
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
          this.getProduit()
        }
      })
    //Requete suppression sur la DB
  }
}
