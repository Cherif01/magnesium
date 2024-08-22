import { Routes } from '@angular/router'
import { ListTransfertComponent } from './_component/list-transfert/list-transfert.component'
import { AddTransfertComponent } from './_component/add-transfert/add-transfert.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

// les routes du module transfert
export const transfertRouting: Routes = [
  {
    path: '',
    component: ListTransfertComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'new-transfert',
    component: AddTransfertComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list',
    component: ListTransfertComponent,
    canActivate: [GuardGuard]
  }
]
