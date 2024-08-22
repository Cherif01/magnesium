import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ajustement-stock',
  templateUrl: './add-ajustement-stock.component.html',
  styleUrls: ['./add-ajustement-stock.component.scss']
})
export class AddAjustementStockComponent implements OnInit {

  // MISE A JOUR FIxiNG
  AjustementStock = new FormGroup({
    status: new FormControl(''),
    produit: new FormControl('',Validators.required),
    entrepot: new FormControl(''),
    fournisseur: new FormControl('', Validators.required),
    montantTotal: new FormControl(''),
    quantite:new FormControl(''),
     prixUniteAchat	:new FormControl(''),
   prixUniteVente	:new FormControl(''),
   datePeremption:new FormControl(''),
  })
 

  constructor(
    public dialogRef: MatDialogRef<AddAjustementStockComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataAjustementStock() {
    if (this.AjustementStock.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.AjustementStock.value
      })
    }
  }

}
