import { Routes } from '@angular/router'
import { DashboardComponent } from './_components/dashboard/dashboard.component'
import { MagasinComponent } from './_components/magasin/magasin.component'
import { EntrepotComponent } from './_components/entrepot/entrepot.component'
import { LoginComponent } from '../core/components/login/login.component'
// Les routes du modules
export const homeRouting: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'magasin',
    component: MagasinComponent
  },
  {
    path: 'entrepot',
    component: EntrepotComponent
  }
]
