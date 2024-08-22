import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerteComponent } from 'src/app/pages/_produit/_components/perte/perte.component';

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.scss']
})
export class AddCaisseComponent implements OnInit {

  // MISE A JOUR FIxiNG
 Caisse = new FormGroup({
  typeOperation: new FormControl('', Validators.required),
  typePaiement: new FormControl(''),
  montant: new FormControl(''),
  motif: new FormControl(''),
 
})

constructor(
  public dialogRef: MatDialogRef<PerteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataCaisse() {
  if (this.Caisse.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Caisse.value
    })
  }
}

}
