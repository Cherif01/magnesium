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
   
    idProduit: new FormControl('',Validators.required),
    idEntrepot: new FormControl(''),
    idFournisseur: new FormControl('', Validators.required),
    montantTotal: new FormControl(''),
    quantite:new FormControl(''),
    prixUniteAchat	:new FormControl(''),
   prixUniteVente	:new FormControl(''),
   datePeremption:new FormControl(''),
  })
 
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
  Fournisseur = [
    {
      id: 1,
      name: 'Mahmud'
    },
    {
      id: 2,
      name: 'Cheick'
    },
    {
      id: 3,
      name: 'Oumar'
    }
    
  ] 
  Entrepot = [
    {
      id: 1,
      name: 'Coyah'
    },
    {
      id: 4,
      name: 'Boké'
    },
    {
      id: 3,
      name: 'Gbessia'
    }
  ] 
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
