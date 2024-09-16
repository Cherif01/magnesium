import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerteComponent } from '../../_components/perte/perte.component';
import { ProduitService } from '../../_service/produit.service';

@Component({
  selector: 'app-add-perte',
  templateUrl: './add-perte.component.html',
  styleUrls: ['./add-perte.component.scss']
})
export class AddPerteComponent implements OnInit {

  
 // MISE A JOUR FIxiNG
 Perte = new FormGroup({
  idApprovisionnement :new FormControl(''),
  quantitePerdu: new FormControl('', Validators.required),
  description: new FormControl(''),
 
})

constructor(
  public dialogRef: MatDialogRef<PerteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  private service :ProduitService,
) { }


ngOnInit(): void {
  this.getApprovisionnement()
}
Approvisionnement: any = []
 // Liste des Approvisionnements
 getApprovisionnement () {
  this.service.getall('approvisionnement', 'list').subscribe({
    next: (reponse: any) => {
       console.log('LISTE Approvisionnement : ', reponse)
      this.Approvisionnement = reponse
    },
    error: (err: any) => {
      console.log('REPONSE ERROR : ', err)
    }
  })
}

saveDataPerte() {
  if (this.Perte.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Perte.value
    })
  }
}

}
