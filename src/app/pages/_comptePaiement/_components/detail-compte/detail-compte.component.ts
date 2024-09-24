import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ComptePaiementService } from '../../_service/compte-paiement.service';


@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.scss']
})
export class DetailCompteComponent implements OnInit {

  title: string = 'Profile Compte'

  EditForm = new FormGroup({
    reference: new FormControl('' || null),
    apiKey: new FormControl(''|| null),
    description: new FormControl('' || null),
    numero: new FormControl('' || null),
   
  })
  dataSource = new MatTableDataSource([])

  // displayedColumns: string[] = [

  //   'reference',
  //   'createdAt',
  //   'montant',
  //   'regler',
  //   'reste'

  // ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor(
    private service: ComptePaiementService,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location: Location
  ) { }

  idCompte: any
  ngOnInit(): void {
    this.idCompte = this.activeroute.snapshot.params['id']
    this.getOneCompte()
  
  }

  infoCompte: any = {}
  getOneCompte(): void {
    // console.log("ID en GET : ", this.idCompte)
    this.service.getOne('compte', 'getOne', this.idCompte)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoCompte = response
        this.EditForm.patchValue(this.infoCompte);
      },
      error: (error: any) => {
        console.log("Error : ", error);
        
      },
    })
  }


  
  confirmEditing(form: FormGroup): void {
    // Appliquez la transformation
    let formData = this.EditForm.value;
  
    console.log('Form Data Before Sending:', formData); // Vérifiez les données après la transformation
  
    this.service.update('compte', 'update', this.idCompte, formData)
      .subscribe({
        next: (response: any) => {
          this.infoCompte = response;
          console.log('Modification:', this.infoCompte);
          this.snackBar.open(
            'Modification effectuée avec succès !',
            'Okay',
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-success', 'text-white']
            }
          );
        }
        ,
        error: (error: any) => {
          console.log("Error : ", error);
          this.snackBar.open(
            'Modification impossible !',
            'Okay',
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['bg-danger', 'text-white']
            }
          );
        },
      });
  }
}
