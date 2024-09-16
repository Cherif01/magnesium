import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { imprimerDiv } from 'src/app/app.component'
import { AddBonCommandeComponent } from '../../_modal/add-bon-commande/add-bon-commande.component'
import { MatDialog } from '@angular/material/dialog'
import { AchatsService } from '../../_service/achats.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Location } from '@angular/common'

@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.scss']
})
export class BonDeCommandeComponent implements OnInit {
  title = 'Liste des bon de commande'

  @ViewChild('divToPrint') divToPrint: ElementRef | any
  @ViewChild('head') head: ElementRef | any

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = ['id', 'name', 'Action']

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor (
    private dialog: MatDialog,
    protected location: Location,
    private snackBar: MatSnackBar,
    private service: AchatsService
  ) {}

  ngOnInit (): void {
    this.verifInit()
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openDialog () {
    this.dialog
      .open(AddBonCommandeComponent, {})
      .afterClosed()
      .subscribe(result => {
        if (result?.event && result.event === 'insert') {
          //Envoyer dans la Base
          result.data.idAchatInit = this.InfoEntete.id
          // console.log("R : ", result.data)
          this.service.create('achatPanier', 'add', result.data).subscribe({
            next: response => {
              this.snackBar.open(
                'Produit ajouter au bon avec success !',
                'Okay',
                {
                  duration: 3000,
                  horizontalPosition: 'right',
                  verticalPosition: 'top',
                  panelClass: ['bg-success', 'text-white']
                }
              )
              this.verifInit()
            },
            error: err => {
              this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
                panelClass: ['bg-danger', 'text-white']
              })
            }
          })
        }
      })
  }

  InfoEntete: any
  listPanier: any
  Montant: any
  verifInit () {
    this.service.getUniqueSansId('achatInit', 'getLastInitAchat').subscribe({
      next: (response: any) => {
        // console.log('Info  Init : ', response)
        if (response.status == 1) {
          this.InfoEntete = response
          this.stateBon = false
          this.service
            .getallParams('achatPanier', 'achatEnCours', response.id)
            .subscribe({
              next: (response: any) => {
                // console.log('List_ : ', response)
                this.listPanier = response[0]
                this.Montant = response[1]
              },
              error: (error: any) => {
                console.log('Error Init : ', error)
              }
            })
        } else {
          this.stateBon = true
        }
      },
      error: (error: any) => {
        console.log('Error Init : ', error)
        this.stateBon = true // Cache l'overlay
      }
    })
  }

  stateBon: boolean = true
  // Méthode pour initier une nouvelle vente
  initBonDocs () {
    // console.log(this.formInit.value)
    this.service.create('achatInit', 'add', {}).subscribe({
      next: (response: any) => {
        this.snackBar.open("Ouverture d'un bon-d'achat..", 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-success', 'text-white']
        })
        this.stateBon = true // Cache l'overlay
        this.verifInit()
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
        this.stateBon = false // Cache l'overlay
      }
    })
  }

  _printer (): void {
    imprimerDiv(this.divToPrint.nativeElement.innerHTML)
  }
}
