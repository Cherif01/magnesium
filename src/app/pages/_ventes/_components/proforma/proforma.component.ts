import { Component, OnInit } from '@angular/core';
import { AddFactureProFormatComponent } from '../../_modal/add-facture-pro-format/add-facture-pro-format.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proforma',
  templateUrl: './proforma.component.html',
  styleUrls: ['./proforma.component.scss']
})
export class ProformaComponent implements OnInit {
title = 'Proforma - client'
  constructor(
    private  dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AddFactureProFormatComponent, {
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
