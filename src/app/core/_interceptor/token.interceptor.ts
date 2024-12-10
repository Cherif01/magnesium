import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from '../auth/service/auth-service.service'
import jwt_decode, { jwtDecode } from 'jwt-decode'
import { Router } from '@angular/router'

interface JwtPayload {
  username: string
  fullname: string
  email: string
  Role: string
  telephone: number
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private authService: AuthService, private router: Router) {}

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken()
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
      const decodedToken = jwtDecode<JwtPayload>(token)
      // switch (decodedToken.Role) {
      //   case 'SUPER_ADMIN':
      //     this.router.navigate(['/home/dashboard'])
      //     break
      //   case 'ADMIN': // GESTIONNAIRE DE MAGASIN
      //     this.router.navigate(['/home/dashboard'])
      //     break
      //   case 'ENTREPOT':
      //     this.router.navigate(['/home/dashboard'])
      //     break
      //   case 'CUISINE':
      //     this.router.navigate(['/home/dashboard'])
      //     break
      //   case 'PDV':
      //     this.router.navigate(['/vente/pos/1'])
      //     break
      //   default:
      //     this.router.navigate(['/auth/login'])
      //     break
      // }
      return next.handle(cloned)
    }
    return next.handle(req)
  }       
}
