import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-magasin-details',
  templateUrl: './magasin-details.component.html',
  styleUrls: ['./magasin-details.component.scss']
})
export class MagasinDetailsComponent implements OnInit {
  // MISE A JOUR FIxiNG
  Magasin = new FormGroup({
    nom: new FormControl(''),
    adresse: new FormControl(''),
    reference: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
