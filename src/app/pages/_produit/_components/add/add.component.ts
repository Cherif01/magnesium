import { Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProduitService } from '../../_service/produit.service'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title = 'Liste des nouveaux produits'

  // productForm: FormGroup;
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
  imagePreview: string | ArrayBuffer | null = null

  constructor (
    private service: ProduitService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit (): void {}

  onFileChange (event: any) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  onSubmit (): void {
    if (this.productForm.valid) {
      // console.log('Formulaire : ', this.productForm.value)
      this.service.create('produit', 'add', this.productForm.value).subscribe({
        next: (response) => {
          this.snackBar.open("Produit enregistre avec succès !", "Okay", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: ['bg-success', 'text-white']

          })
        },
        error: (err) => {
          this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
            duration: 3000,
            horizontalPosition: "left",
            verticalPosition: "top",
            panelClass: ['bg-danger', 'text-white']
          })
        }
      })
    }
  }

  onReset (): void {
    this.productForm.reset()
    this.imagePreview = null
  }
}
