import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { RecuPosComponent } from '../../_modal/__pos/recu-pos/recu-pos.component'
import { VenteService } from 'src/app/pages/_vente/_services/vente.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
  }

  state_overlay: boolean = true

  initVerif () {
    this.service.getUniqueSansId('vente_init', 'getLastInitVente').subscribe({
      next: (response: any) => {
        console.log('Info  Init : ', response)
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

  // Méthode pour initier une nouvelle vente
  initiateNewSale () {
    // Ajoutez ici tout autre code nécessaire pour initialiser une nouvelle vente
    this.generateAutoSaleCode()
    console.log(this.formInit.value)
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

  // Tableau des produits
  products = [
    {
      name: 'Riz au gras',
      price: 55000,
      image:
        'https://lamarmitedafrique.org/wp-content/uploads/2021/05/tiep.png',
      category: 'Plat principal',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Jus PEPSI',
      price: 15000,
      image:
        'https://www.pepsico.com/images/default-source/products-brands/pepsi_12oz.png?sfvrsn=46c9ae09_3',
      category: 'Boisson',
      isPromo: true
    },
    {
      name: 'Pizza Calzone',
      price: 60000,
      image:
        'https://chez-mimi-pontcharra.fr/wp-content/uploads/2022/07/248_161.png',
      category: 'Plat principal',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Vimto',
      price: 10000,
      image: 'https://www.kroger.com/product/images/large/front/0007426500599',
      category: 'Boisson',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Poisson Braisé',
      price: 80000,
      image:
        'https://i.pinimg.com/originals/f6/33/9e/f6339e7538fb29db50b6d1cae5fd3773.png',
      category: 'Poisson',
      isPromo: true
    },
    {
      name: 'Attiéké',
      price: 35000,
      image: 'https://i.ytimg.com/vi/5KjWpS2xnDc/maxresdefault.jpg',
      category: 'Accompagnement',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Hamburger',
      price: 65000,
      image:
        'https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_classic_single_167e7ca495.png',
      category: 'Plat principal',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Foutou Banane',
      price: 50000,
      image:
        'https://www.residenceohinene.net/ca/wp-content/uploads/2017/08/FOUTOU-BANANE.png',
      category: 'Accompagnement',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Virgin Winter White',
      price: 45000,
      image:
        'https://www.lillet.com/wp-content/uploads/Cocktail-drink-Virgin-White-Peach-Lillet.png',
      category: 'Boisson',
      isPromo: true
    },
    {
      name: 'Fanta Boite',
      price: 12000,
      image: 'https://m.media-amazon.com/images/I/61EMsb5lGLL.jpg',
      category: 'Accompagnement',
      isPromo: false,
      stockDispo: 10
    },
    {
      name: 'Crevettes roses ',
      price: 90000,
      image:
        'https://www.academiedugout.fr/images/5435/1200-auto/fotolia_50087349_subscription_xl-copy.jpg?poix=50&poiy=50',
      category: 'Soupe',
      isPromo: true
    }
  ]

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
