import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AddAjustementStockComponent } from '../../_modal/add-ajustement-stock/add-ajustement-stock.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { convertObjectInFormData } from 'src/app/app.component';

import { AjustementStockService } from '../../_service/ajustement-stock.service';

@Component({
  selector: 'app-list-ajustement',
  templateUrl: './list-ajustement.component.html',
  styleUrls: ['./list-ajustement.component.scss']
})
export class ListAjustementComponent implements OnInit {

  title = 'Liste des ajustement stocks'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'produit', 'fournisseur','quantite','prixachat','prixvente', 'Action']
  // status	[...]
  // idApprovisionnement	[...]
  // idProduit	[...]
  // idEntrepot	[...]
  // idFournisseur	[...]
  // montantTotal	[...]
  // quantite	[...]
  // prixUniteAchat	[...]
  // prixUniteVente	[...]
  // datePeremption
  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    public location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private service: AjustementStockService
  ) {}

  ngOnInit (): void {
    this.getAjustementAchat()
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

  getAjustementAchat () {
    this.service.getall('ajustement', 'list').subscribe({
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
    this.dialog.open(AddAjustementStockComponent, {
    }).afterClosed()
      .subscribe((result) => {
        if (result?.event && result.event === "insert") {
          // console.log(result.data);
          const formData = convertObjectInFormData(result.data);
          this.dataSource.data.splice(0, this.dataSource.data.length);
          //Envoyer dans la Base
          this.service.create('ajustement', 'add', formData).subscribe({
            next: (response) => {
              this.snackBar.open("Achat enregistre avec succès !", "Okay", {
                duration: 3000,
                horizontalPosition: "right",
                verticalPosition: "top",
                panelClass: ['bg-success', 'text-white']

              })
              this.getAjustementAchat()
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

}
