import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-entrepot-details',
  templateUrl: './entrepot-details.component.html',
  styleUrls: ['./entrepot-details.component.scss']
})
export class EntrepotDetailsComponent implements OnInit {
   // MISE A JOUR FIxiNG
 Entrepot = new FormGroup({
  nom: new FormControl(''),
  status: new FormControl(''),
  adresse: new FormControl(''),
 
})

  constructor() { }

  ngOnInit(): void {
  }

}
