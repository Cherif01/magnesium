import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService } from '../../_services/contact-service.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  title: string = 'Profile Client'

  EditForm = new FormGroup({
    nom: new FormControl('' || null),
    prenom: new FormControl(''|| null),
    adresse: new FormControl('' || null),
    telephone: new FormControl('' || null)
  })
  

  constructor(
    private service: ContactServiceService,
    private activeroute: ActivatedRoute,
    private snackBar: MatSnackBar,
    protected location: Location
  ) { }

  idClient: any
  ngOnInit(): void {
    this.idClient = this.activeroute.snapshot.params['id']
    this.getOneClient()
  
  }

  infoClient: any = {}
  getOneClient(): void {
    // console.log("ID en GET : ", this.idClient)
    this.service.getOne('client', 'getOne', this.idClient)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
        this.infoClient = response
        this.EditForm.patchValue(this.infoClient);
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
  
    this.service.update('client', 'update', this.idClient, formData)
      .subscribe({
        next: (response: any) => {
          this.infoClient = response;
          console.log('Modification:', this.infoClient);
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
