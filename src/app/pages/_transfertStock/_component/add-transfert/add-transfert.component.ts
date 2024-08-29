import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transfert',
  templateUrl: './add-transfert.component.html',
  styleUrls: ['./add-transfert.component.scss']
})
export class AddTransfertComponent implements OnInit {

    // MISE A JOUR FIxiNG
    Transfert = new FormGroup({
      idProduit: new FormControl(''),
      idMagasin: new FormControl(''),
      quantite: new FormControl('')
    })
  
  
    constructor (
      public dialogRef: MatDialogRef<AddTransfertComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    Produit = [
      {
        id: 1,
        name: 'Fanta'
      },
      {
        id: 2,
        name: 'Ordinateur'
      },
      {
        id: 3,
        name: 'Chemise'
      },
      {
        id: 4,
        name: 'Tv'
      }
    ] 
    Magasin = [
      {
        id: 6,
        name: 'Coyah'
      },
      {
        id: 2,
        name: 'Conakry'
      },
      {
        id: 5,
        name: 'Boffa'
      }
      
    ] 
    ngOnInit (): void {}
  
    saveDataTransfert () {
      if (this.Transfert.valid) {
        this.dialogRef.close({
          event: 'insert',
          data: this.Transfert.value
        })
      }
    }
  }

