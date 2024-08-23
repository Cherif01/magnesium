import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

   // MISE A JOUR FIxiNG
   Cateegory = new FormGroup({
    libelle: new FormControl('', Validators.required),
    description: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveData() {
    if (this.Cateegory.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.Cateegory.value
      })
    }
  }

}
