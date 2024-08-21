import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  // MISE A JOUR FIxiNG
  Client = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    telephone: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<AddClientComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataClient() {
    if (this.Client.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Client.value
      })
    }
  }

}
