import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { convertObjectInFormData } from 'src/app/app.component';
import { ContactServiceService } from 'src/app/pages/_contact/_services/contact-service.service';
import { Location } from '@angular/common'
import { ProduitComponent } from '../../_modal/produit/produit.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  title = 'Liste des nouveaux produits'

  productForm: FormGroup;
  categories = ['Électronique', 'Vêtements', 'Alimentation']; // Remplacez par vos propres catégories
  subCategories = ['Smartphones', 'Laptops', 'Vêtements pour hommes', 'Vêtements pour femmes']; // Remplacez par vos propres sous-catégories
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      reference: ['', Validators.required],
      designation: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      expiryDate: ['', Validators.required],
      threshold: [0, Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {}

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

  onSubmit(): void {
    if (this.productForm.valid) {
      // Logique pour soumettre le formulaire
      const formData = new FormData();
      const file = this.productForm.get('image')?.value;
      formData.append('image', file);

      // this.apiService.uploadImage(formData).subscribe(response => {
      //   // Traitez la réponse du serveur
      //   console.log('Image uploaded successfully', response);
      // });
    }
  }

  onReset(): void {
    this.productForm.reset();
    this.imagePreview = null;
  }

}
