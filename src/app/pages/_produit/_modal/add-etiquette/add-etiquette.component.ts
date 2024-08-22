import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EtiquetteComponent } from '../../_components/etiquette/etiquette.component';

@Component({
  selector: 'app-add-etiquette',
  templateUrl: './add-etiquette.component.html',
  styleUrls: ['./add-etiquette.component.scss']
})
export class AddEtiquetteComponent implements OnInit {

 // MISE A JOUR FIxiNG
 Etiquette = new FormGroup({
  idProduit: new FormControl('', Validators.required),
  code: new FormControl(''),
 
})

constructor(
  public dialogRef: MatDialogRef<EtiquetteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}


saveDataEtiquette() {
  if (this.Etiquette.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Etiquette.value
    })
  }
}
}
