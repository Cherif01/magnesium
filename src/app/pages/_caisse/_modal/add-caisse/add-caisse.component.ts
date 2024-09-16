import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PerteComponent } from 'src/app/pages/_produit/_components/perte/perte.component';
import { CaisseService } from '../../_services/caisse.service';

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.scss']
})
export class AddCaisseComponent implements OnInit {

  // MISE A JOUR FIxiNG
 Caisse = new FormGroup({
  typeOperation: new FormControl('',),
  typePaiement: new FormControl(''),
  montant: new FormControl(''),
  motif: new FormControl(''),
 
})

constructor(
  private service: CaisseService,
  public dialogRef: MatDialogRef<PerteComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
) { }


ngOnInit(): void {
}
TypeOperation = [
  {
    type: '1',
    name: 'ENTRANT'
  },
  {
    type: '2',
    name: 'SORTANT'
  },
  {
    type: '3',
    name: 'DEPENSE'
  }
  
]
TypePaiement = [
  {
    type: '1',
    name: 'CASH'
  },
  {
    type: '2',
    name: 'MOBILE_PAYMENT'
  },
  {
    type: '3',
    name: 'CHEQUE'
  },
  {
    type: '4',
    name: 'ORANGE_MONEY'
  }
  
]



saveDataCaisse() {
  if (this.Caisse.valid) {
    this.dialogRef.close({
      event: "insert",
      data: this.Caisse.value
    })
  }
}

}
