import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAjustementStockComponent } from '../../_modal/add-ajustement-stock/add-ajustement-stock.component';

@Component({
  selector: 'app-add-ajustement',
  templateUrl: './add-ajustement.component.html',
  styleUrls: ['./add-ajustement.component.scss']
})
export class AddAjustementComponent implements OnInit {

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
 
) { }


ngOnInit(): void {
}


saveDataAjustementStock() {
  if (this.AjustementStock.valid) {
 
    
  }
}
}
