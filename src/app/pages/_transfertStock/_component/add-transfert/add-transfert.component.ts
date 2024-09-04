import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransfertStockService } from '../../_service/transfert-stock.service';

@Component({
  selector: 'app-add-transfert',
  templateUrl: './add-transfert.component.html',
  styleUrls: ['./add-transfert.component.scss']
})
export class AddTransfertComponent implements OnInit {

    // MISE A JOUR FIxiNG
    Transfert = new FormGroup({
      produit: new FormControl(''),
      magasin: new FormControl(''),
      quantite: new FormControl('')
    })
  
  
    constructor (
      public dialogRef: MatDialogRef<AddTransfertComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
      private service :TransfertStockService
    ) {}
  
    Produit:any = [] 
    Magasin:any = [] 
    getProduit () {
      this.service.getall('produit', 'list').subscribe({
        next: (reponse: any) => {
          // console.log('LISTE PRODUIT : ', reponse)
          this.Produit = reponse
        },
        error: (err: any) => {
          console.log('REPONSE ERROR : ', err)
        }
      })
    }
    getMagasin () {
      this.service.getall('magasin', 'list').subscribe({
        next: (reponse: any) => {
          // console.log('REPONSE SUCCESS : ', reponse)
          this.Magasin = reponse
        },
        error: (err: any) => {
          console.log('REPONSE ERROR : ', err)
        }
      })
    }
    ngOnInit (): void {
      this.getProduit();
      this.getMagasin();
    }
  
    saveDataTransfert () {
      if (this.Transfert.valid) {
        this.dialogRef.close({
          event: 'insert',
          data: this.Transfert.value
        })
      }
    }
  }

