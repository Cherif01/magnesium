import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-compte-paiement',
  templateUrl: './add-compte-paiement.component.html',
  styleUrls: ['./add-compte-paiement.component.scss']
})
export class AddComptePaiementComponent implements OnInit {
// MISE A JOUR FIxiNG
ComptePaiement = new FormGroup({
  reference: new FormControl(''),
  Description: new FormControl(''),
  numero: new FormControl(''),
  
})

constructor(
  public dialogRef: MatDialogRef<AddComptePaiementComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataComptePaiement() {
  if (this.ComptePaiement.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.ComptePaiement.value
    })
  }
}
}
