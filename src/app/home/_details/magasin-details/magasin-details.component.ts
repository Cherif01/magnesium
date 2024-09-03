import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from '../../_services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-magasin-details',
  templateUrl: './magasin-details.component.html',
  styleUrls: ['./magasin-details.component.scss']
})
export class MagasinDetailsComponent implements OnInit {
  // MISE A JOUR FIxiNG
  Magasin = new FormGroup({
    nom: new FormControl('' || null),
    adresse: new FormControl('' || null ),
    reference: new FormControl(''|| null )
  })
  title :string = ' Details Magasin '
  constructor(
    private service : HomeService ,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location : Location
    
  ) { }
  idMagasin :any
  
  ngOnInit(): void {
    this.idMagasin = this.activeroute.snapshot.params['id']
    this.getOneMagasin()
  }
  infoMagasin: any = {}
  getOneMagasin(): void {
    // console.log("ID en GET : ", this.idMagasin)
    this.service.getOne('magasin', 'getOne', this.idMagasin)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoMagasin = response
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
    let formData = this.transformNullValues(this.Magasin.value)
    console.log('formData',formData)
    this.service.update('magasin', 'update', this.idMagasin, formData)
    .subscribe({
      next: (response: any) => {
        this.infoMagasin = response;
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
