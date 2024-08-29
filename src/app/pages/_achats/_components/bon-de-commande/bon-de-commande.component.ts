import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { imprimerDiv } from 'src/app/app.component';
import { AddBonCommandeComponent } from '../../_modal/add-bon-commande/add-bon-commande.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.scss']
})
export class BonDeCommandeComponent implements OnInit {
  title = 'Liste des bon de commande'

  @ViewChild('divToPrint') divToPrint: ElementRef | any
  @ViewChild('head') head: ElementRef | any


  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [
    'id',
    'name',
    'Action'
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }


  _printer (): void {
    imprimerDiv(this.divToPrint.nativeElement.innerHTML)
  }
  openDialog() {
    this.dialog.open(AddBonCommandeComponent, {
    // }).afterClosed()
    //   .subscribe((result) => {
    //     if (result?.event && result.event === "insert") {
    //       // console.log(result.data);
    //      // const formData = convertObjectInFormData(result.data);
    //       this.dataSource.data.splice(0, this.dataSource.data.length);
    //       //Envoyer dans la Base
    //       this.service.create('magasin', 'add',result.data ).subscribe({
    //         next: (response) => {
    //           this.snackBar.open("Magasin enregistré avec succès !", "Okay", {
    //             duration: 3000,
    //             horizontalPosition: "right",
    //             verticalPosition: "top",
    //             panelClass: ['bg-success', 'text-white']

    //           })
    //           this.getMagasin()
    //         },
    //         error: (err) => {
    //           this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
    //             duration: 3000,

            
    //             horizontalPosition : "right",
    //             verticalPosition : "bottom",
 
    //             panelClass: ['bg-danger', 'text-white']
    //           })
    //         }
    //       })
    //     }
     })
  }
  
}
