import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComptePaiementService } from '../../_service/compte-paiement.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  title = 'Liste des nouveaux comptes'

   // compteForm: FormGroup;
  compteForm: FormGroup = this.fb.group({
    reference: ['', Validators.required],
    apiKey: ['', Validators.required],
    numero: ['', Validators.required],
    description: ['', [Validators.maxLength(255)]],
  
  })

  
  constructor (
    private service: ComptePaiementService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit (): void {
    // this.getCompte()
  }

  
  onSubmit (): void {
    if (this.compteForm.valid) {
      console.log('Formulaire : ', this.compteForm.value)
      this.service.create('compte', 'add', this.compteForm.value).subscribe({
        next: response => {
          this.snackBar.open('Compte enregistre avec succès !', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          })
        },
        error: err => {
          this.snackBar.open('Erreur, Veuillez reessayer!', 'Okay', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            panelClass: ['bg-danger', 'text-white']
          })
          console.log("Error : ", err)
        }
      })
    }
  }

  onReset (): void {
    this.compteForm.reset()
   
  }

}
