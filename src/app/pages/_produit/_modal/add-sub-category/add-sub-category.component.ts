import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProduitService } from '../../_service/produit.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {

  // MISE A JOUR FIxiNG
  subCategory = new FormGroup({
    libelle: new FormControl('', Validators.required),
    idCategorie: new FormControl('', Validators.required),
    description: new FormControl(''),
  })

  constructor(
    public dialogRef: MatDialogRef<AddSubCategoryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ProduitService
  ) { }


  ngOnInit(): void {
    this.getListCategorie()
  }

  category: any = []
  // Categorie
  getListCategorie () {
    this.service.getall('categorie', 'list').subscribe({
      next: (reponse: any) => {
        // console.log('REPONSE SUCCESS : ', reponse)
        this.category = reponse

      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }


  saveData() {
    if (this.subCategory.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.subCategory.value
      })
    }
  }

}
