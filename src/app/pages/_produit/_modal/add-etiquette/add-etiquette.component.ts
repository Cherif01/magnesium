import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EtiquetteComponent } from '../../_components/etiquette/etiquette.component';
import { ProduitService } from '../../_service/produit.service';

@Component({
  selector: 'app-add-etiquette',
  templateUrl: './add-etiquette.component.html',
  styleUrls: ['./add-etiquette.component.scss']
})
export class AddEtiquetteComponent implements OnInit {

 // MISE A JOUR FIxiNG
 Etiquette = new FormGroup({
  idProduit: new FormControl('', Validators.required),
  code: new FormControl(''),
 
})

constructor(
  public dialogRef: MatDialogRef<EtiquetteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  private service :ProduitService
) { }


ngOnInit(): void {
  this.getProduit()
}
Produit: any = []
 // Liste des produits
 getProduit () {
  this.service.getall('produit', 'list').subscribe({
    next: (reponse: any) => {
      // console.log('LISTE PRODUIT : ', reponse)
      this.Produit = reponse
    },
    error: (err: any) => {
      console.log('REPONSE ERROR : ', err)
    }
  })
}

saveDataEtiquette() {
  if (this.Etiquette.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Etiquette.value
    })
  }
}
}
