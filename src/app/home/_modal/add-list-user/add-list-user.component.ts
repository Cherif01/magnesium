import { Component, Inject, OnInit, Optional } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HomeService } from '../../_services/home.service'

@Component({
  selector: 'app-add-list-user',
  templateUrl: './add-list-user.component.html',
  styleUrls: ['./add-list-user.component.scss']
})
export class AddListUSerComponent implements OnInit {
  // MISE A JOUR FIxiNG
  User = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    telephone: new FormControl('', Validators.required),
    password: new FormControl(''),
    idMagasin: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  })

  constructor (
    public dialogRef: MatDialogRef<AddListUSerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service: HomeService
  ) {}

  ngOnInit (): void {}
  Magasin: any = []
  Role = [
    {
      type: '1',
      name: 'ADMIN'
    },
    {
      type: '2',
      name: 'ENTREPOT'
    },
    {
      type: '3',
      name: 'CUISINE'
    },
    {
      type: '4',
      name: 'PDV'
    }
  ]

  getList (type: any) {
    console.log('SELECTION : ', type)
    switch (type) {
      case 'ADMIN':
        this.service.getall('magasin', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      // this.serv
      case 'CUISINE':
        this.service.getall('cuisine', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      case 'ENTREPOT':
        this.service.getall('entrepot', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      case 'PDV':
        this.service.getall('pdv', 'list').subscribe({
          next: (response: any)=> {
            this.Magasin = response,
            console.log("Message : ", response)
          },
          error: err => {
            console.log('Message : ', err)
          }
        })
        break
      default:
        break
    }
  }

  saveDataUser () {
    if (this.User.valid) {
      this.dialogRef.close({
        event: 'insert',
        data: this.User.value
      })
    }
  }
}
