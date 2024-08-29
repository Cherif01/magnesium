import { Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ProduitService } from '../../_service/produit.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http'
import { Router } from '@angular/router'

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
    description: ['', [Validators.maxLength(255)]],
    seuil: [0],
    image: ['']
  })

  ListSousCategory: any = []
  imagePreview: string | ArrayBuffer | null = null

  constructor (
    private service: ProduitService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit (): void {
    this.getListCategorie()
  }

  // Categorie
  getListCategorie () {
    this.service.getall('sousCategorie', 'list').subscribe({
      next: (reponse: any) => {
        console.log('REPONSE SUCCESS : ', reponse)
        this.ListSousCategory = reponse
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }

  selectedFile: any
  uploadResponse: string | null = null
  onFileChange (event: any) {
    const file: File = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
      this.selectedFile = file
    }
  }

  onSubmit (): void {
    if (this.productForm.valid) {
      console.log('Formulaire : ', this.productForm.value)

      const formData = new FormData()

      formData.append(
        'reference',
        this.productForm.get('reference')?.value || ''
      )
      formData.append(
        'designation',
        this.productForm.get('designation')?.value || ''
      )
      formData.append(
        'id_sousCategorie',
        this.productForm.get('id_sousCategorie')?.value || ''
      )
      formData.append(
        'description',
        this.productForm.get('description')?.value || ''
      )
      formData.append('seuil', this.productForm.get('seuil')?.value || '')

      if (this.selectedFile) {
        formData.append('file', this.selectedFile)
      }
      // Ajout des variables au BACK_
      this.service.create('produit', 'add', formData).subscribe({
        next: response => {
          this.snackBar.open('Produit enregistre avec succès !', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          })
          this.router.navigate(['product/list']);
        },
        error: err => {
          this.snackBar.open(err, 'Okay', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-danger', 'text-white']
          })
          console.log('Error : ', err)
        }
      })
    }
  }

  onReset (): void {
    this.productForm.reset()
    this.imagePreview = null
  }
}
