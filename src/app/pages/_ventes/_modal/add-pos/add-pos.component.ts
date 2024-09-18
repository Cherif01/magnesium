import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEntrepotComponent } from 'src/app/home/_modal/add-entrepot/add-entrepot.component';

@Component({
  selector: 'app-add-pos',
  templateUrl: './add-pos.component.html',
  styleUrls: ['./add-pos.component.scss']
})
export class AddPosComponent implements OnInit {

  // MISE A JOUR FIxiNG
 Pos = new FormGroup({
  nom: new FormControl(''),
  adresse: new FormControl(''),
  reference: new FormControl(''),
  typeMagasin: new FormControl(''),
 

})

constructor(
  public dialogRef: MatDialogRef<AddPosComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataPos() {
  if (this.Pos.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Pos.value
    })
  }
}


}
