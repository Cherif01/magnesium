import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactServiceService } from '../../_services/contact-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.scss']
})
export class DetailFournisseurComponent implements OnInit {
  title: string = 'Profile fournisseur'

  EditForm = new FormGroup({
    nom: new FormControl('' || null),
    prenom: new FormControl(''|| null),
    adresse: new FormControl('' || null),
    societe: new FormControl('' || null),
    email: new FormControl('' || null),
    tel: new FormControl('' || null)
  })
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [

    'reference',
    'createdAt',
    'montant',
    'regler',
    'reste'

  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor(
    private service: ContactServiceService,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location: Location
  ) { }

  idFournisseur: any
  ngOnInit(): void {
    this.idFournisseur = this.activeroute.snapshot.params['id']
    this.getOneFournisseur()
  
  }

  infoFournisseur: any = {}
  getOneFournisseur(): void {
    // console.log("ID en GET : ", this.idFournisseur)
    this.service.getOne('fournisseur', 'getOne', this.idFournisseur)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoFournisseur = response
        this.EditForm.patchValue(this.infoFournisseur);
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
  
    this.service.update('fournisseur', 'update', this.idFournisseur, formData)
      .subscribe({
        next: (response: any) => {
          this.infoFournisseur = response;
          console.log('Modification:', this.infoFournisseur);
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
        },
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
