import { Routes } from '@angular/router'
import { DashboardComponent } from './_components/dashboard/dashboard.component'
import { MagasinComponent } from './_components/magasin/magasin.component'
import { EntrepotComponent } from './_components/entrepot/entrepot.component'
<<<<<<< HEAD
import { LoginComponent } from '../core/components/login/login.component'
import { GuardGuard } from '../core/auth/guard/guard.guard'
=======
import { ListUserComponent } from './_components/_user/list-user/list-user.component'
>>>>>>> origin/diallo
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
<<<<<<< HEAD
    component: EntrepotComponent,
    canActivate: [GuardGuard]
=======
    component: EntrepotComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
>>>>>>> origin/diallo
  }
]
