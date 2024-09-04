import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-entrepot',
  templateUrl: './add-entrepot.component.html',
  styleUrls: ['./add-entrepot.component.scss']
})
export class AddEntrepotComponent implements OnInit {

 // MISE A JOUR FIxiNG
 Entrepot = new FormGroup({
  nom: new FormControl(''),
  status: new FormControl(''),
  adresse: new FormControl(''),

})

constructor(
  public dialogRef: MatDialogRef<AddEntrepotComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataEntrepot() {
  if (this.Entrepot.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Entrepot.value
    })
  }
}


}
