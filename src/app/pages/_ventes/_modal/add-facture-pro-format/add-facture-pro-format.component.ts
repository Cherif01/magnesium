import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-facture-pro-format',
  templateUrl: './add-facture-pro-format.component.html',
  styleUrls: ['./add-facture-pro-format.component.scss']
})
export class AddFactureProFormatComponent implements OnInit {

  AjustementStock = new FormGroup({
   
    idProduit: new FormControl('',Validators.required),
    
    quantite:new FormControl(''),
     prixUniteAchat	:new FormControl(''),
  
  })
  
  titlle = 'Liste des ajustement stocks'
  
    // Assign the data to the data source for the table to render
    dataSource = new MatTableDataSource([])
  
    

  constructor() { }

  ngOnInit(): void {
  }
  Produit = [
    {
      id: 1,
      name: 'Fanta'
    },
    {
      id: 2,
      name: 'Ordinateur'
    },
    {
      id: 3,
      name: 'Chemise'
    },
    {
      id: 4,
      name: 'Tv'
    }
  ] 
 
}
