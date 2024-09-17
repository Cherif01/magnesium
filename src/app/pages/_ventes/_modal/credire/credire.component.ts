import { Component, Inject, OnInit, Optional } from '@angular/core';
import { VenteService } from '../../_service/vente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-credire',
  templateUrl: './credire.component.html',
  styleUrls: ['./credire.component.scss']
})
export class CredireComponent implements OnInit {
  listClient: any;
  Client = new FormGroup({
    telephone: new FormControl('' || null, Validators.required),
   
  })


  constructor(  public dialogRef: MatDialogRef<CredireComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service :VenteService
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
