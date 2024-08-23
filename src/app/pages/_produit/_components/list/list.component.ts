import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { convertObjectInFormData } from 'src/app/app.component'
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service'

import { Location } from '@angular/common'
import { ProduitComponent } from '../../_modal/produit/produit.component'
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
    'id',
    'designation',
    'reference',
    'image',
    'id_sousCategorie',
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
        // console.log('REPONSE SUCCESS : ', reponse)
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
          this.service.create('produit', 'add', result.data).subscribe({
            next: response => {
              this.snackBar.open('Produit enregistre avec succès !', 'Okay', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['bg-success', 'text-white']
              })
              this.getProduit()
            },
            error: err => {
              console.log("Error : ", err)
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
}
