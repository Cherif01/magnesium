import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild
} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { imprimerDiv } from 'src/app/app.component'
import { AddClientComponent } from 'src/app/pages/_contact/_modal/client/add-client/add-client.component'

@Component({
  selector: 'app-recu-pos',
  templateUrl: './recu-pos.component.html',
  styleUrls: ['./recu-pos.component.scss']
})
export class RecuPosComponent implements OnInit {
  @ViewChild('divToPrint') divToPrint: ElementRef | any
  @ViewChild('head') head: ElementRef | any

  // MISE A JOUR FIxiNG
  ventePOS = new FormGroup({
    id_vente: new FormControl('')
  })

  constructor (
  ) {}

  ngOnInit (): void {}

  confirmSale () {
    console.log("Vente confirmer");
  }

  _printer (): void {
    imprimerDiv(this.divToPrint.nativeElement.innerHTML)
  }
}
