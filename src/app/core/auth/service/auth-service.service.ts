import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { BASE_URL } from 'src/app/config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any = localStorage.getItem('access_token') || undefined
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    })
  }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false)

  constructor (private http: HttpClient, private router: Router) {}

  login (api: string, suffixURL: string, data: any): Observable<any> {
    return this.http.post<any>(`${BASE_URL}${api}/${suffixURL}`, data).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.token)
        this.isAuthenticatedSubject.next(true)
      })
    )
  }

  logout (): void {
    localStorage.removeItem('access_token')
    this.isAuthenticatedSubject.next(false)
    this.router.navigate(['/home/login'])
  }

  isLoggedIn (): boolean {
    return !!localStorage.getItem('access_token')
  }

  getToken (): string | null {
    return localStorage.getItem('access_token')
  }
}
