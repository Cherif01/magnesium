import { Location } from '@angular/common'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { ContactServiceService } from '../../_services/contact-service.service'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
<<<<<<< HEAD
import { convertObjectInFormData } from 'src/app/app.component'
import { AddFournisseurComponent } from '../../_modal/fournisseur/add-fournisseur/add-fournisseur.component'
=======
import { AddFournisseurComponent } from '../../_modal/fournisseur/add-fournisseur/add-fournisseur.component'
import { convertObjectInFormData } from 'src/app/app.component'
>>>>>>> origin/diallo

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {
  title = 'Liste des nouveaux Fournisseurs'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'telephone', 'adresse','societe','email', 'Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
<<<<<<< HEAD
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
    this.getFournisseur()
=======
    private service: ContactServiceService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit (): void {
   
>>>>>>> origin/diallo
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

<<<<<<< HEAD
  getFournisseur () {
=======
  getList () {
>>>>>>> origin/diallo
    this.service.getall('fournisseur', 'list').subscribe({
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
<<<<<<< HEAD

=======
>>>>>>> origin/diallo
  openDialog() {
    this.dialog.open(AddFournisseurComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
          const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('fournisseur', 'add', formData).subscribe({
            next: (response) => {
              this.snackBar.open("Fournisseur enregistre avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
<<<<<<< HEAD
              this.getFournisseur()
=======
              this.getList()
>>>>>>> origin/diallo
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
<<<<<<< HEAD
=======

>>>>>>> origin/diallo
}
