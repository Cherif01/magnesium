import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrls: ['./add-achat.component.scss']
})
export class AddAchatComponent implements OnInit {

  // MISE A JOUR FIxiNG
  Achat = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    telephone: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<AddAchatComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataAchat() {
    if (this.Achat.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Achat.value
      })
    }
  }

}
