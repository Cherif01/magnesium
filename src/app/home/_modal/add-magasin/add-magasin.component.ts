import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-magasin',
  templateUrl: './add-magasin.component.html',
  styleUrls: ['./add-magasin.component.scss']
})
export class AddMagasinComponent implements OnInit {
// MISE A JOUR FIxiNG
Magasin = new FormGroup({
  nom: new FormControl(''),
  gestionnaire: new FormControl(''),
  adresse: new FormControl(''),
  
})

constructor(
  public dialogRef: MatDialogRef<AddMagasinComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataMagasin() {
  if (this.Magasin.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Magasin.value
    })
  }
}

}
