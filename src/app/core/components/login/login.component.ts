import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { convertObjectInFormData } from 'src/app/app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  FormLogin = this.fb.group({
    telephone: [, Validators.required],
    password: [, Validators.required],
  })

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  login(form: FormGroup): void {
    // console.log("Formulaire : ", form.value);
    this.authService.login('auth','login', form.value).subscribe(
      (res) => {
        // console.log("Token : ", res)
        this.router.navigate(['home/dashboard']);
      },
      (err) => {
        console.error("Error : ", err);
      }
    );
  }

  authFunction(form: FormGroup) {
    console.log("Form : ", form.value);
    const formData = new FormData()
    formData.append('telephone', form.value.telephone)
    formData.append('password', form.value.password)
    this.authService.login('auth', 'login', formData)
      .subscribe({
        next: (data: any) => {
          console.log("reponse : ", data);
        },
        error: (err: any) => {
          console.log("Error : ", err)
          this.snackBar.open("Identifiant Incorrect!", "Error", {
            duration: 4000,
            horizontalPosition: "center",
            verticalPosition: "bottom",
            panelClass: ['bg-danger', 'text-white']
          })
        }
      })
  }

}
