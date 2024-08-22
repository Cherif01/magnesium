import { Component, Inject, OnInit, Optional } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddClientComponent } from '../../client/add-client/add-client.component';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

>>>>>>> origin/diallo

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.scss']
})
export class AddFournisseurComponent implements OnInit {
  // MISE A JOUR FIxiNG
  Fournisseur = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    telephone: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<AddFournisseurComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

<<<<<<< HEAD
  // MISE A JOUR FIxiNG
  Fournisseur = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    telephone: new FormControl('', Validators.required),
    email: new FormControl(''),
    societe: new FormControl('')
  })

  constructor(
    public dialogRef: MatDialogRef<AddFournisseurComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

=======
>>>>>>> origin/diallo

  ngOnInit(): void {
  }


  saveDataFournisseur() {
    if (this.Fournisseur.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Fournisseur.value
      })
    }
  }

}
