import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../../_services/contact-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.scss']
})
export class DetailFournisseurComponent implements OnInit {
  title: string = 'Profile fournisseur'

  EditForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    societe: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl('')
  })

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
      },
      error: (error: any) => {
        console.log("Error : ", error);
        
      },
    })
  }

  confirmEditing(form: FormGroup): void {
    console.log('form : ', form.value)
    this.service.update('fournisseur', 'update', this.idFournisseur, form.value)
    .subscribe({
      next: (response: any) => {
        this.snackBar.open(
          'Modification effectuer avec succès !',
          'Okay',
          {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          }
        )
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
        )
      },
    })
  }
}
