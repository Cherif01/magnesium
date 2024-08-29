import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { RecuPosComponent } from '../../_modal/__pos/recu-pos/recu-pos.component'
<<<<<<< HEAD
import { VenteService } from 'src/app/pages/_ventes/_service/vente.service'
=======
import { VenteService } from 'src/app/pages/_ventes/_services/vente.service'
>>>>>>> 103ff233464b8b494a9806b450eb455b7661e047
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LINK_STATIC_FILES } from 'src/app/config'
import { convertObjectInFormData } from 'src/app/app.component'

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss']
})
export class AddSaleComponent implements OnInit {
  // code auto vente init
  formInit: FormGroup = this.fb.group({
    idClient: [1]
  })

  constructor (
    private dialog: MatDialog,
    private service: VenteService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit (): void {
    this.initVerif()
    this.getallProduit()
  }

  state_overlay: boolean = true
  ID_vente_init_en_cours: any
  initVerif () {
    this.service.getUniqueSansId('vente_init', 'getLastInitVente').subscribe({
      next: (response: any) => {
        // console.log('Info  Init : ', response)
        this.ID_vente_init_en_cours = response.id
        if (response.status == 1) {
          this.state_overlay = false
        } else {
          this.state_overlay = true
        }
      },
      error: (error: any) => {
        console.log('Error Init : ', error)
        this.state_overlay = true // Cache l'overlay
      }
    })
  }

  // GET-ALL-PRODUCT
  linkImg: string = LINK_STATIC_FILES
  products: any[] = []
  getallProduit () {
    this.service.getall('produit', 'list').subscribe({
      next: (response: any) => {
        this.products = response
        // console.log('Produit  List : ', response)
      },
      error: HttpErrorResponse => {
        console.log('Error Init : ', HttpErrorResponse.message)
        this.state_overlay = true // Cache l'overlay
      }
    })
  }

  // DELETE VENTE EN COURS
  deleteVenteEnCours () {
    // console.log(this.ID_vente_init_en_cours.toString(), ' => ID')
    this.service
      .delete('vente_init', 'delete', this.ID_vente_init_en_cours)
      .subscribe({
        next: (response: any) => {
          console.log('Response : ', response)
          this.snackBar.open('Vente annuler avec success', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-info', 'text-white']
          })
          this.state_overlay = true // Afficher l'overlay
        },
        error: (err: any) => {
          console.log('Response : ', err)
          this.snackBar.open("Impossible d'annuler la vente", 'Error', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-danger', 'text-white']
          })
          this.state_overlay = false // Cacher l'overlay
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
