import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeletePopupComponent } from 'src/app/public/_modal/delete/delete-popup/delete-popup.component';
import { AddCompteComponent } from '../../_modal/add-compte/add-compte.component';
import { ComptePaiementService } from '../../_service/compte-paiement.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'Liste des Comptes de Paiement';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'reference', 'apiKey', 'description', 'numero', 'Action'];

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort) sort?: MatSort;

  constructor(
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: ComptePaiementService
  ) {}

  ngOnInit(): void {
    this.getComptePaiement();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getComptePaiement(): void {
    this.service.getall('compte', 'list').subscribe({
      next: (response: any) => {
        console.log('Réponse succès : ', response);
        this.dataSource.data = response;
      },
      error: (err: any) => {
        console.error('Erreur : ', err);
        this.snackBar.open("Erreur lors de la récupération des données. Veuillez réessayer.", "Okay", {
          duration: 3000,
          horizontalPosition: "left",
          verticalPosition: "top",
          panelClass: ['bg-danger', 'text-white']
        });
      }
    });
  }

  openDialog(): void {
    this.dialog.open(AddCompteComponent).afterClosed().subscribe((result) => {
      if (result?.event === "insert") {
        console.log(result.data);
        this.dataSource.data = []; // Clear current data
        this.service.create('compte', 'add', result.data).subscribe({
          next: (response) => {
            this.snackBar.open("Compte Paiement enregistré avec succès !", "Okay", {
              duration: 3000,
              horizontalPosition: "right",
              verticalPosition: "top",
              panelClass: ['bg-success', 'text-white']
            });
            this.getComptePaiement();
          },
          error: (err) => {
            console.error('Erreur : ', err);
            this.snackBar.open("Erreur lors de l'enregistrement. Veuillez réessayer.", "Okay", {
              duration: 3000,
              horizontalPosition: "left",
              verticalPosition: "top",
              panelClass: ['bg-danger', 'text-white']
            });
          }
        });
      }
    });
  }

  deleteFunction(_api: string, id: any): void {
    this.dialog.open(DeletePopupComponent, {
      disableClose: true,
      data: {
        title: 'Suppression demandée !',
        message: 'Voulez-vous vraiment supprimer ce compte ?',
        messageNo: 'Non',
        messageYes: 'Oui, confirmer !'
      }
    }).afterClosed().subscribe(data => {
      if (data) {
        this.dataSource.data = [];
        this.service.delete(_api, 'delete', id).subscribe({
          next: (response: any) => {
            console.log('Réponse : ', response);
            this.snackBar.open('Suppression effectuée avec succès !', 'Okay', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-success', 'text-white']
            });
            this.getComptePaiement();
          },
          error: (err) => {
            console.error('Erreur : ', err);
            this.snackBar.open('Erreur lors de la suppression. Veuillez réessayer.', 'Okay', {
              duration: 3000,
              horizontalPosition: 'left',
              verticalPosition: 'top',
              panelClass: ['bg-danger', 'text-white']
            });
          }
        });
      }
    });
  }
}
