import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProduitService } from '../../_service/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  // MISE A JOUR FIxiNG
  productForm: FormGroup = this.fb.group({
    reference: ['', Validators.required],
    designation: ['', Validators.required],
    id_sousCategorie: ['', Validators.required],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    seuil: [0, Validators.required],
    image: ['']
  })
  subCategories = [
    {
      id: 1,
      name: 'Smartphones'
    },
    {
      id: 2,
      name: 'Laptops'
    },
    {
      id: 3,
      name: 'Vêtements pour hommes'
    },
    {
      id: 4,
      name: 'Vêtements pour femmes'
    }
  ] // Remplacez par vos propres sous-catégories

  imagePreview: string | ArrayBuffer | null = null;


  constructor(
    public dialogRef: MatDialogRef<ProduitComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: ProduitService
  ) { }


  ngOnInit(): void {
    this.getSubCategory()
  }

  getSubCategory () {
    this.service.getall('sousCategorie', 'list').subscribe({
      next: (reponse: any) => {
        console.log('REPONSE SUCCESS : ', reponse)
        this.subCategories = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
    // this.dataSource.data = objet
  }


  saveDataProduit() {
    if (this.productForm.valid) {
      console.log('Form save', this.productForm.value)
      this.dialogRef.close({
        event: "insert",
        data: this.productForm.value
      })
    }
  }

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
    this.productForm.reset();
    this.imagePreview = null;
  }

}
