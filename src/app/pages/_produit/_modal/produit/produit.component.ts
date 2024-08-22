import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  // MISE A JOUR FIxiNG
  Produit = new FormGroup({
    designation: new FormControl(''),
    reference: new FormControl(''),
    seuil: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    id_sousCategorie: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<ProduitComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataProduit() {
    if (this.Produit.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Produit.value
      })
    }
  }

}
