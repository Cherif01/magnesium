import { Component, Inject, OnInit, Optional } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table'
import { AchatsService } from '../../_service/achats.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-bon-commande',
  templateUrl: './add-bon-commande.component.html',
  styleUrls: ['./add-bon-commande.component.scss']
})
export class AddBonCommandeComponent implements OnInit {
  titlle = 'AJout au panier achat'
  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  addPanierAchat = new FormGroup({
    idProduit: new FormControl(''),
    idAchatInit: new FormControl(''),
    quantite: new FormControl(''),
    prixUnitaire: new FormControl('', Validators.required)
  })

  constructor (
    private service: AchatsService,
    public dialogRef: MatDialogRef<AddBonCommandeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit (): void {
    this.getProduit()
  }

  Produit: any = []
  getProduit () {
    this.service.getall('produit', 'list').subscribe({
      next: (response: any) => {
        this.Produit = response
      },
      error: (error: any) => {
        console.log('Error Init : ', error)
      }
    })
  }

  idInit: any
  verifInit () {
    this.service.getUniqueSansId('achatInit', 'getLastInitAchat').subscribe({
      next: (response: any) => {
        this.idInit = response.id
      },
      error: (error: any) => {
        console.log('Error Init : ', error)
      }
    })
  }

  saveData () {
    if (this.addPanierAchat.valid) {
      this.dialogRef.close({
        event: 'insert',
        data: this.addPanierAchat.value
      })
    }
  }
}
