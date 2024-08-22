import { Routes } from '@angular/router'
import { DashboardComponent } from './_components/dashboard/dashboard.component'
import { MagasinComponent } from './_components/magasin/magasin.component'
import { EntrepotComponent } from './_components/entrepot/entrepot.component'
import { LoginComponent } from '../core/components/login/login.component'
import { GuardGuard } from '../core/auth/guard/guard.guard'
// Les routes du modules
export const homeRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'magasin',
    component: MagasinComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'entrepot',
    component: EntrepotComponent,
    canActivate: [GuardGuard]
  }
]
