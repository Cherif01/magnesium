import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { AddMagasinComponent } from '../../_modal/add-magasin/add-magasin.component'
import { convertObjectInFormData } from 'src/app/app.component'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service'
import { Location } from '@angular/common'
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
  title = 'Liste des magasins'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'nom', 'adresse', 'reference', 'Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
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
      .open(AddMagasinComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          // console.log(result.data);
          const formData = convertObjectInFormData(result.data)
          this.dataSource.data.splice(0, this.dataSource.data.length)
          //Envoyer dans la Base
          this.service.create('magasin', 'add', formData).subscribe({
            next: response => {
              this.snackBar.open('Magasin enregistre avec succès !', 'Okay', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['bg-success', 'text-white']
              })
              this.getMagasin()
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
}
