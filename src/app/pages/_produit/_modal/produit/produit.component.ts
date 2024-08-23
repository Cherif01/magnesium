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
    reference: new FormControl(''),
    designation: new FormControl(''),
    date_perumption: new FormControl(''),
    id_sousCategorie: new FormControl('', Validators.required),
    seuil: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<ProduitComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataProduit() {
    if (this.Produit.valid) {
      console.log('Envoyer', this.Produit.value)
      this.dialogRef.close({
        event: "insert",
        data: this.Produit.value
      })
    }
  }

  subCategories = ['Smartphones', 'Laptops', 'Vêtements pour hommes', 'Vêtements pour femmes']; // Remplacez par vos propres sous-catégories
  imagePreview: string | ArrayBuffer | null = null;


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onReset(): void {
    this.Produit.reset();
    this.imagePreview = null;
  }

}
