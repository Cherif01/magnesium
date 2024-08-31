import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { HomeService } from 'src/app/home/_services/home.service';
import { AddListUSerComponent } from 'src/app/home/_modal/add-list-user/add-list-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { convertObjectInFormData } from 'src/app/app.component';
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  title = 'Liste des Utilisateur'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'fullName', 'email', 'telephone', 'Action']
  //tab=[{id:1,  nom:"oumar", prenom:"Diallo", telephone:"2564", adresse:"mat"}]
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: HomeService
  ) {}

  ngOnInit (): void {
    this.getListUSer()
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

  getListUSer () {
    this.service.getall('user', 'list').subscribe({
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
    this.dialog.open(AddListUSerComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('user', 'add', result.data).subscribe({
            next: (response) => {
              this.snackBar.open("Utilisateur enregistré avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getListUSer()
            },
            error: (err: any) => {
              this.snackBar.open("Echec de l'ajout !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-danger', 'text-white']
              })
            }
          })
        }
      })
  }


  deleteFunction (_api: string, id: any) {
    // console.log('id:', this.Id_achat);
    this.dialog.open(DeletePopupComponent, {
        disableClose: true,
        data: {
          title: ' Suppression demander! ',
          message: ' Voulez-vous vraiment supprimer ce utilisateur ? ',
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
             parseInt(reponse)
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
          this.getListUSer()
        }
      })
    //Requete suppression sur la DB
  }


}
