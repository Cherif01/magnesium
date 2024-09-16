import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../_service/produit.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HomeService } from 'src/app/home/_services/home.service';

@Component({
  selector: 'app-perte-details',
  templateUrl: './perte-details.component.html',
  styleUrls: ['./perte-details.component.scss']
})
export class PerteDetailsComponent implements OnInit {

  // MISE A JOUR FIxiNG
  Perte = new FormGroup({
    idApprovisionnement :new FormControl(''||null),
    quantitePerdu: new FormControl(''||null, Validators.required),
    description: new FormControl(''||null),
   
  })
  title :string = ' Details Perte '
  constructor(
    private service : HomeService ,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location : Location
    
  ) { }
  idPerte :any
  
  ngOnInit(): void {
    this.idPerte = this.activeroute.snapshot.params['id']
    this.getOnePerte()
    
  }
 
  infoPerte: any = {}
  getOnePerte(): void {
    // console.log("ID en GET : ", this.idPerte)
    this.service.getOne('perte', 'getOne', this.idPerte)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoPerte = response
      },
      error: (error: any) => {
        console.log("Error : ", error);
        
      },
    })
  }
  transformNullValues(data: any):any{
    for(const key in data){
      if (data.hasOwnProperty(key)&& data [key]==='null'){
        data [key]= null ;
      }
    }
    return data;
  }
  confirmEditing(form: FormGroup): void {
    //console.log('form : ', form.value)
    let formData = this.transformNullValues(this.Perte.value)
    console.log('formData',formData)
    this.service.update('perte', 'update', this.idPerte, formData)
    .subscribe({
      next: (response: any) => {
        this.infoPerte = response;
        console.log('Reponse:',response)
        this.snackBar.open(
          'Modification effectuer avec succès !',
          'Okay',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          }
        )
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
        )
      },
    })
  }

}
