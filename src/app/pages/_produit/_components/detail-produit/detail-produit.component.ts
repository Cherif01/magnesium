import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../_service/produit.service';
import { LINK_STATIC_FILES } from 'src/app/config';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  title: string = 'Profile Produit'
  linkImg: string = LINK_STATIC_FILES
  EditForm = new FormGroup({
    reference: new FormControl('' || null),
    designation: new FormControl(''|| null),
    seuil: new FormControl('' || null),
    sousCategorie: new FormControl ('' || null),
    description: new FormControl ('' || null),
    image: new FormControl ('' || null),
   
  })
  

  constructor(
    private service: ProduitService,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location: Location,
    private router :Router
  ) { }

  idProduit: any
  ngOnInit(): void {
    this.idProduit = this.activeroute.snapshot.params['id']
    this.getOneProduit()
  
  }

  infoProduit: any = {}
  getOneProduit(): void {
    // console.log("ID en GET : ", this.idProduit)
    this.service.getOne('produit', 'getOne', this.idProduit)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoProduit = response
        this.EditForm.patchValue(this.infoProduit);
      },
      error: (error: any) => {
        console.log("Error : ", error);
        
      },
    })
  }
  imagePreview: string | ArrayBuffer | null = null
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


  
  confirmEditing (form: FormGroup): void {
    if (this.EditForm.valid) {
      console.log('Formulaire : ', this.EditForm.value)

      const formData = new FormData()
      console.log("sous categorie :");
      
      console.log(this.EditForm.get('sousCategorie')?.value);
      
      formData.append(
        'reference',
        this.EditForm.get('reference')?.value || ''
      )
      formData.append(
        'designation',
        this.EditForm.get('designation')?.value || ''
      )
      formData.append(
        'id_sousCategorie',
        this.EditForm.get('sousCategorie')?.value || ''
      )
      formData.append(
        'description',
        this.EditForm.get('description')?.value || ''
      )
      formData.append('seuil', this.EditForm.get('seuil')?.value || '')

      if (this.selectedFile) {
        formData.append('file', this.selectedFile)
      }
  
      // Ajout des variables au BACK_
      this.service.update('produit', 'update',this.idProduit, formData).subscribe({
        next: response => {
          this.snackBar.open('Produit Modifier avec succès !', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          })
          this.router.navigate(['product/list']);
        },
        error: err => {
          this.snackBar.open(err, 'Modification impossible', {
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
  

}
