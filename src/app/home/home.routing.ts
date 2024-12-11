import { Routes } from '@angular/router'
import { DashboardComponent } from './_components/dashboard/dashboard.component'
 import { MagasinComponent } from './_components/magasin/magasin.component'
import { EntrepotComponent } from './_components/entrepot/entrepot.component'
import { LoginComponent } from '../core/components/login/login.component'
import { GuardGuard } from '../core/auth/guard/guard.guard'
import { ListUserComponent } from './_components/_user/list-user/list-user.component'
import { EntrepotDetailsComponent } from './_details/entrepot-details/entrepot-details.component'
import { MagasinDetailsComponent } from './_details/magasin-details/magasin-details.component'
import { UserDetailsComponent } from './_details/user-details/user-details.component'
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
  },
  {
    path: 'list-user',
    component: ListUserComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'entrepot-details/:id',
    component: EntrepotDetailsComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'magasin-details/:id',
    component: MagasinDetailsComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    canActivate: [GuardGuard]
  },
]
