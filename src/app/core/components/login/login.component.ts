import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../auth/service/auth-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import jwt_decode, { jwtDecode } from 'jwt-decode'

interface JwtPayload {
  username: string
  fullname: string
  email: string
  Role: string
  telephone: number
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormLogin = this.fb.group({
    telephone: [, Validators.required],
    password: [, Validators.required]
  })

  constructor (
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit (): void {}

  login (form: FormGroup): void {
    const formData = new FormData()
    // formData.append('telephone', form.value.telephone);
    // formData.append('password', form.value.password);
    this.authService.login('auth', 'login', form.value).subscribe(
      res => {
        // console.log('Token : ', res);
        try {
          const decodedToken = jwtDecode<JwtPayload>(res.token) // Décodage du token
          // console.log('Decoded Token : ', decodedToken)

          this.snackBar.open('Connecté avec succès!', 'Valider', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['bg-success', 'text-white']
          })
          switch (decodedToken.Role) {
            case 'SUPER_ADMIN':
              this.router.navigate(['/home/dashboard'])
              console.log("SUPER CONNECT")
              break
            case 'ADMIN': // GESTIONNAIRE DE MAGASIN
              this.router.navigate(['/home/dashboard'])
              console.log("ADMIN CONNECT")
              break
            case 'ENTREPOT':
              this.router.navigate(['/home/dashboard'])
              console.log("ENTREPOT CONNECT")
              break
            case 'CUISINE':
              this.router.navigate(['/home/dashboard'])
              console.log("CUISINE CONNECT")
              break
            case 'PDV':
              this.router.navigate(['/vente/pos/1'])
              console.log("PDV CONNECT")
              break
            default:
              this.router.navigate(['/auth/login'])
              break
          }
        } catch (error) {
          console.error('Erreur de décodage du token : ', error)
          this.snackBar.open('Erreur de décodage du token!', 'Error', {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['bg-danger', 'text-white']
          })
        }
      },
      err => {
        console.error('Error : ', err)

        this.snackBar.open(
          err.error.detail || 'Identifiant Incorrect!',
          'Error',
          {
            duration: 4000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['bg-danger', 'text-white']
          }
        )
      }
    )
  }
}
