import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../_services/home.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
title :string='Details Utilisateur'
  // MISE A JOUR FIxiNG
  User = new FormGroup({
    fullName: new FormControl(''|| null),
    email: new FormControl(''|| null),
    telephone: new FormControl('', Validators.required),
    password: new FormControl(''|| null),
    idMagasin: new FormControl(''|| null),
    role: new FormControl(''|| null)
     

  })
  constructor(
    private  service :HomeService,
    private activeroute:  ActivatedRoute,
    protected location :Location,
    private snackBar: MatSnackBar,
  ) { }
idUser :any
  ngOnInit(): void {
    this.idUser=this.activeroute.snapshot.params['id']
    this.getOneMagasin()
  }
  Magasin: any = []
  Role = [
    {
      type: '1',
      name: 'ADMIN'
    },
    {
      type: '2',
      name: 'ENTREPOT'
    },
    {
      type: '3',
      name: 'CUISINE'
    },
    {
      type: '4',
      name: 'PDV'
    }
  ]
  getList (type: any) {
    console.log('SELECTION : ', type)
    switch (type) {
      case 'ADMIN':
        this.service.getall('magasin', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      // this.serv
      case 'CUISINE':
        this.service.getall('cuisine', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      case 'ENTREPOT':
        this.service.getall('entrepot', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      case 'PDV':
        this.service.getall('pdv', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      default:
        break
    }
  }
  infoUser :any ={}
  getOneMagasin(): void {
    // console.log("ID en GET : ", this.idMagasin)
    this.service.getOne('user', 'getOne', this.idUser)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoUser = response
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
    let formData = this.transformNullValues(this.User.value)
    console.log('formData',formData)
    this.service.update('user', 'update', this.idUser, formData)
    .subscribe({
      next: (response: any) => {
        this.infoUser = response;
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
