import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactServiceService } from '../../_services/contact-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-factures',
  templateUrl: './details-factures.component.html',
  styleUrls: ['./details-factures.component.scss']
})
export class DetailsFacturesComponent implements OnInit {
  title = ''
  
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private service: ContactServiceService ,
    private snackBar :MatSnackBar,
    private fb :FormBuilder,
    private http :HttpClient,

  ) {
    this.form  = this.fb.group({
      idVenteInit:[''],
      montant: ['', Validators.required],

    });

    
   }
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [

    'referenceVenteInit',
    'createdAt',
    'montant',
  

  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any
  detailsFacture: any = {}

  ngOnInit(): void {
      this.getFactureClient()
  }
  idVenteInit:any
  idFacture :any
   paiementFacture(){
    const formData = this.form.value;
    // if (this.Paiement.valid) {
    //   // console.log('Formulaire : ', this.AjustementStock.value)
    //   this.dataSource.data = []
    console.log ('Donnees :', formData )
    this.service.create('operationClient','add',formData).subscribe({
      
      next: response => {
        this.snackBar.open('Produit enregistre avec succès !', 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['bg-success', 'text-white']
        })
      this.getFactureClient()
      },
      error: err => {
        this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
          panelClass: ['bg-danger', 'text-white']
        })
        console.log('Error : ', err)
      }
    })
  
   }
  getFactureClient() {
    this.service.getOneByID('operationClient', 'findAllByFacture', this.data.id)
      .subscribe({
        next: (response: any) => {
          console.log('Info : ', response)
          this.dataSource.data=response[0]
          this.detailsFacture = response [1]
          this.form.patchValue({
            idVenteInit: this.detailsFacture.id
          });

          // this.EditForm.patchValue(this.infoClient);

        },
        error: (error: any) => {
          console.log("Error : ", error);

        },
      })
  }
  

}
