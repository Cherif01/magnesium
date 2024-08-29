import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.scss']
})
export class AddCompteComponent implements OnInit {

 // MISE A JOUR FIxiNG
    Compte = new FormGroup({
    reference: new FormControl(''),
    apiKey: new FormControl(''),
    description: new FormControl(''),
    numero: new FormControl(''),
   
  })

  constructor(
    public dialogRef: MatDialogRef<AddCompteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }

  saveDataCompte() {
    if (this.Compte.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Compte.value
      })
    }
  }

}
