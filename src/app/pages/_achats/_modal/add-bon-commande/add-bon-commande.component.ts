import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-bon-commande',
  templateUrl: './add-bon-commande.component.html',
  styleUrls: ['./add-bon-commande.component.scss']
})
export class AddBonCommandeComponent implements OnInit {
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
