import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerteComponent } from '../../_components/perte/perte.component';

@Component({
  selector: 'app-add-perte',
  templateUrl: './add-perte.component.html',
  styleUrls: ['./add-perte.component.scss']
})
export class AddPerteComponent implements OnInit {

  
 // MISE A JOUR FIxiNG
 Perte = new FormGroup({
  qtePerdu: new FormControl('', Validators.required),
  description: new FormControl(''),
 
})

constructor(
  public dialogRef: MatDialogRef<PerteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataPerte() {
  if (this.Perte.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Perte.value
    })
  }
}

}
