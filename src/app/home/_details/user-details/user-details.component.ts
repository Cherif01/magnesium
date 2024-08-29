import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  // MISE A JOUR FIxiNG
  User = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('', Validators.required),
    password: new FormControl(''),
    idMagasin: new FormControl('')
     

  })
  constructor() { }

  ngOnInit(): void {
  }
  Magasin = [
    {
      id: 12
      ,
      name: 'Coyah'
    },
    {
      id: 2,
      name: 'Boké'
    },
    {
      id: 3,
      name: 'Gbessia'
    }
  ] 
}
