import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transfert-stock',
  templateUrl: './add-transfert-stock.component.html',
  styleUrls: ['./add-transfert-stock.component.scss']
})
export class AddTransfertStockComponent implements OnInit {
  // MISE A JOUR FIxiNG
  TransfertStock = new FormGroup({
    produit: new FormControl(''),
    magasin: new FormControl(''),
    status: new FormControl(''),
    
  })

  constructor(
    public dialogRef: MatDialogRef<AddTransfertStockComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit(): void {
  }


  saveDataTransfertStock() {
    if (this.TransfertStock.valid) {
      this.dialogRef.close({
        event: "insert",
        data: this.TransfertStock.value
      })
    }
  }
}
