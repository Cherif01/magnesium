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
import { VenteService } from '../../../_service/vente.service'

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
    private service: VenteService,
  ) {}

  ngOnInit (): void {
    this.ListPanierEnCours()
  }

  Facture: any = []
  TotalFacture = 0
  NetAPayer = 0
  ListPanierEnCours (): void {
    this.service.getUniqueSansId('vente_init', 'getLastInitVente').subscribe({
      next: (response: any) => {
        // console.log('Info  Init : ', response)
        this.service.getall('vente/venteEnCours', response.id).subscribe({
          next: response => {
            // console.log('RECU : ', response)
            this.Facture = response[0]
            this.TotalFacture = response[1]
          },
          error: (err: any) => {
            console.log('Error : ', err)
          }
        })
      }
    })
  }

  confirmSale () {
    console.log("Vente confirmer");
  }

  _printer (): void {
    imprimerDiv(this.divToPrint.nativeElement.innerHTML)
  }
}
