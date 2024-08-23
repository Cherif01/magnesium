import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAjustementStockComponent } from '../../_modal/add-ajustement-stock/add-ajustement-stock.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AjustementStockService } from '../../_service/ajustement-stock.service';

@Component({
  selector: 'app-add-ajustement',
  templateUrl: './add-ajustement.component.html',
  styleUrls: ['./add-ajustement.component.scss']
})
export class AddAjustementComponent implements OnInit {
title = 'Formulaire Approvisionnement '
 // MISE A JOUR FIxiNG
 AjustementStock = new FormGroup({
  status: new FormControl(''),
  id_produit: new FormControl('',Validators.required),
  id_entrepot: new FormControl(''),
  id_fournissseur: new FormControl('', Validators.required),
  montant_total: new FormControl(''),
  quantite:new FormControl(''),
  prix_unite_achat	:new FormControl(''),
 prix_unite_vente	:new FormControl(''),
 date_peremption:new FormControl(''),
})


constructor (
  private service: AjustementStockService,
  private snackBar: MatSnackBar,
  private fb: FormBuilder
) {}

ngOnInit (): void {}

 
// imagePreview: string | ArrayBuffer | null = null
// onFileChange (event: any) {
//   const file = event.target.files[0]
//   if (file) {
//     const reader = new FileReader()
//     reader.onload = (e: any) => {
    
//     }
//     reader.readAsDataURL(file)
//   }
// }
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
Fournisseur = [
  {
    id: 1,
    name: 'Mahmud'
  },
  {
    id: 2,
    name: 'Cheick'
  },
  {
    id: 3,
    name: 'Oumar'
  }
  
] 
Entrepot = [
  {
    id: 1,
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
onSubmit (): void {
  if (this.AjustementStock.valid) {
    // console.log('Formulaire : ', this.ajustementForm.value)
    this.service.create('approvisionnement', 'add', this.AjustementStock.value).subscribe({
      next: (response) => {
        this.snackBar.open("Approvisionnement enregistre avec succès !", "Okay", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
          panelClass: ['bg-success', 'text-white']

        })
      },
      error: (err) => {
        this.snackBar.open("Erreur, Veuillez reessayer!", "Okay", {
          duration: 3000,
          horizontalPosition: "left",
          verticalPosition: "top",
          panelClass: ['bg-danger', 'text-white']
        })
      }
    })
  }
}

onReset (): void {
  this.AjustementStock.reset()

}


saveDataAjustementStock() {
  if (this.AjustementStock.valid) {
 
    
  }
}
}

