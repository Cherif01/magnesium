import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../_services/home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entrepot-details',
  templateUrl: './entrepot-details.component.html',
  styleUrls: ['./entrepot-details.component.scss']
})
export class EntrepotDetailsComponent implements OnInit {
  title :string =' Details Entrepot'
   // MISE A JOUR FIxiNG
 Entrepot = new FormGroup({
  nom: new FormControl(''|| null ),
  status: new FormControl(''||null),
  adresse: new FormControl(''|| null),
 
})

  constructor(
    private service : HomeService ,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location : Location
  ) { }
  idEntrepot :any 
  ngOnInit(): void {
    this.idEntrepot=this.activeroute.snapshot.params['id']
    this.getOneEntrepot()

  }
infoEntrepot: any = {}
  getOneEntrepot(): void {
   
    this.service.getOne('entrepot', 'getOne', this.idEntrepot)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoEntrepot = response
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
    let formData = this.transformNullValues(this.Entrepot.value)
    console.log('formData',formData)
    this.service.update('entrepot', 'update', this.idEntrepot, formData)
    .subscribe({
      next: (response: any) => {
        this.infoEntrepot = response;
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
