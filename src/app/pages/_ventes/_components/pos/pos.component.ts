import { Component, OnInit } from '@angular/core'
import { RecuPosComponent } from '../../_modal/__pos/recu-pos/recu-pos.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LINK_STATIC_FILES } from 'src/app/config';
import { VenteService } from '../../_service/vente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {

  // code auto vente init
  formInit: FormGroup = this.fb.group({
    idClient: [1]
  })

  // AddPanierForm
  AddPanierForm: FormGroup = this.fb.group({
    idProduit: [],
    venteInitId: [],
    quantite: [0],
    prixVente: []
  })

  constructor (
    private dialog: MatDialog,
    public location: Location,
    private service: VenteService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit (): void {
    this.initVerif()
    this.getallProduit()
    this.ListPanierEnCours()
  }

  state_overlay: boolean = true
  ID_vente_init_en_cours: any
  idInit: any
  state: boolean = true
  initVerif () {
    this.service.getUniqueSansId('vente_init', 'getLastInitVente').subscribe({
      next: (response: any) => {
        // console.log('Info  Init : ', response)
        if (response.status == 1) {
          this.state_overlay = false
        } else {
          this.state_overlay = true
        }
        this.ID_vente_init_en_cours = response.id
      },
      error: (error: any) => {
        // console.log('Error Init : ', error)
        this.state_overlay = true // Cache l'overlay
      }
    })
  }

  addPanier (form: FormGroup, produit: any): void {
    form.value.idProduit = produit.idProduit
    if (this.ID_vente_init_en_cours == undefined)
      this.snackBar.open('Veillez actualiser pour commencer...', 'Okay', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['bg-warning', 'text-white']
      })
    else form.value.venteInitId = this.ID_vente_init_en_cours
    form.value.prixVente = produit.prixUnitaire
    // console.log('Panier : ', form.value)
    this.service.create('vente', 'add', form.value).subscribe({
      next: response => {
        this.snackBar.open('Produit ajouter a la facture', 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-success', 'text-white']
        })
        this.Facture = []
        this.ListPanierEnCours()
      },
      error: err => {
        console.log('Error : ', err)
        this.snackBar.open('erreur de debut...', 'Error', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-danger', 'text-white']
        })
      }
    })
  }

  // LISTE FACTURE
  Facture: any = []
  TotalFacture = 0
  NetAPayer = 0
  ListPanierEnCours (): void {
    this.service.getUniqueSansId('vente_init', 'getLastInitVente').subscribe({
      next: (response: any) => {
        // console.log('Info  Init : ', response)
        this.service.getall('vente/venteEnCours', response.id).subscribe({
          next: response => {
            console.log('Panier : ', response)
            this.Facture = response[0]
            this.TotalFacture = response[1]
            this.products = []
            this.getallProduit()
          },
          error: (err: any) => {
            console.log('Error : ', err)
          }
        })
      }
    })
  }

  // GET-ALL-PRODUCT
  linkImg: string = LINK_STATIC_FILES
  products: any[] = []
  getallProduit () {
    this.service.getall('produit', 'list').subscribe({
      next: (response: any) => {
        // console.log('Produit  List : ', response)
        this.products = response
      },
      error: (err: any) => {
        console.log('Error Init : ', err)
      }
    })
  }

  // DELETE VENTE EN COURS
  deleteVenteEnCours () {
    // console.log(this.ID_vente_init_en_cours, ' => ID')
    this.service
      .delete('vente_init', 'delete', this.ID_vente_init_en_cours)
      .subscribe({
        next: (response: any) => {
          // console.log('Response : ', response)
          this.snackBar.open('Vente annuler avec success', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-info', 'text-white']
          })
          this.Facture = []
          this.ListPanierEnCours()
          this.state_overlay = true // Afficher l'overlay
        },
        error: (err: any) => {
          // console.log('Response : ', err)
          this.snackBar.open("Impossible d'annuler la vente", 'Error', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-danger', 'text-white']
          })
          this.state_overlay = false // Cacher l'overlay
        }
      })
  }

  // DELETE VENTE EN COURS
  deleteInPanier (id: any) {
    console.log('VENTE PANIER ID : ', id)
    this.service.delete('vente', 'delete', id).subscribe({
      next: (response: any) => {
        // console.log('Response : ', response)
        this.snackBar.open('Produit retirer du panier', 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: ['bg-warning', 'text-white']
        })
        this.Facture = []
        this.ListPanierEnCours()
      },
      error: (err: any) => {
        // console.log('Response : ', err)
        this.snackBar.open('Impossible de retirer', 'Error', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-danger', 'text-white']
        })
      }
    })
    this.products = []
    this.getallProduit()
    this.initVerif()
  }

  // Méthode pour initier une nouvelle vente
  initiateNewSale () {
    // Ajoutez ici tout autre code nécessaire pour initialiser une nouvelle vente
    this.generateAutoSaleCode()
    // console.log(this.formInit.value)
    this.service.create('vente_init', 'add', this.formInit.value).subscribe({
      next: (response: any) => {
        this.snackBar.open('Nouvelle vente placer...', 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-success', 'text-white']
        })
        this.state_overlay = false // Cache l'overlay
        this.initVerif()
      },
      error: (error: any) => {
        this.snackBar.open(
          'Une erreur est survenue, connexion impossible',
          'Error',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            panelClass: ['bg-danger', 'text-white']
          }
        )
        this.state_overlay = true // Cache l'overlay
      }
    })
  }

  openDialog () {
    this.dialog
      .open(RecuPosComponent, {})
      .afterClosed()
      .subscribe(result => {})
  }

  // Fonction pour générer un code de vente à 8 chiffres
  generateAutoSaleCode (): void {
    const saleCode =
      'VENTE - ' + Math.floor(10000000 + Math.random() * 90000000).toString() // Génère un nombre à 8 chiffres
    // Mettre à jour le champ 'reference' avec le code généré
    this.formInit.patchValue({
      reference: saleCode
    })
  }
}
