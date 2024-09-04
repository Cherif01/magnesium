import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../_service/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  title: string = 'Profile Produit'

  EditForm = new FormGroup({
    reference: new FormControl('' || null),
    designation: new FormControl(''|| null),
    seuil: new FormControl('' || null),
    description: new FormControl('' || null)
   
  })
  

  constructor(
    private service: ProduitService,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location: Location
  ) { }

  idProduit: any
  ngOnInit(): void {
    this.idProduit = this.activeroute.snapshot.params['id']
    this.getOneProduit()
  
  }

  infoProduit: any = {}
  getOneProduit(): void {
    // console.log("ID en GET : ", this.idProduit)
    this.service.getOne('product', 'getOne', this.idProduit)
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


  
  confirmEditing(form: FormGroup): void {
    // Appliquez la transformation
    let formData = this.EditForm.value;
  
    console.log('Form Data Before Sending:', formData); // Vérifiez les données après la transformation
  
    this.service.update('product', 'update', this.idProduit, formData)
      .subscribe({
        next: (response: any) => {
          this.infoProduit = response;
          console.log('Modification:', this.infoProduit);
          this.snackBar.open(
            'Modification effectuée avec succès !',
            'Okay',
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-success', 'text-white']
            }
          );
        },
        error: (error: any) => {
          console.log("Error : ", error);
          this.snackBar.open(
            'Modification impossible !',
            'Okay',
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-danger', 'text-white']
            }
          );
        },
      });
  }
  
  

}
