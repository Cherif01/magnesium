import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-user',
  templateUrl: './add-list-user.component.html',
  styleUrls: ['./add-list-user.component.scss']
})
export class AddListUSerComponent implements OnInit {

  // MISE A JOUR FIxiNG
  User = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl('', Validators.required),
    password: new FormControl(''),
    idMagasin: new FormControl(''),
    role :new FormControl('')

  })

  constructor(
    public dialogRef: MatDialogRef<AddListUSerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }
  Magasin = [
    {
      id: 8
      ,
      name: 'Coyah'
    },
    {
      id: 2,
      name: 'Boké'
    },
    {
      id: 3,
      name: 'Gbessia'
    }
  ] 
  Role = [
    {
    
      name: 'ADMIN'
    },
    {
      
      name: 'ENTREPOT'
    },
    {
    
      name: 'CUISINE'
    }
  ] 

  saveDataUser() {
    if (this.User.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.User.value
      })
    }
  }

}
