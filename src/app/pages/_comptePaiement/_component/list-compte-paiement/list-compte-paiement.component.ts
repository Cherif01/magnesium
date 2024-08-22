import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AddComptePaiementComponent } from '../../_modal/add-compte-paiement/add-compte-paiement.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { convertObjectInFormData } from 'src/app/app.component';
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service';
@Component({
  selector: 'app-list-compte-paiement',
  templateUrl: './list-compte-paiement.component.html',
  styleUrls: ['./list-compte-paiement.component.scss']
})
export class ListComptePaiementComponent implements OnInit {

  title = 'Liste des Comptes de Paiement'
 
  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'reference',  'description', 'numero', 'Action']
  
  tab=[{id:1,  nom:"oumar", prenom:"Diallo", telephone:"2564", adresse:"mat"}]
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ContactServiceService
  ) {}

  ngOnInit (): void {
    this.getComptePaiement()
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

  getComptePaiement () {
    this.service.getall('compte', 'account-list').subscribe({
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

  openDialog() {
    this.dialog.open(AddComptePaiementComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
          const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('compte', 'account-add', formData).subscribe({
            next: (response) => {
              this.snackBar.open("Compte de Paiment enregistré avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getComptePaiement()
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

  // onDelete(id:number){
  //   if (confirm("voulez vous supprimer")) {
  //     this.service.delete('Compte', 'delete',id).subscribe(data => {
  //       this.dataa = data;
  //       this.getCompte();
       
  //     })
  //   }
  // }

}
