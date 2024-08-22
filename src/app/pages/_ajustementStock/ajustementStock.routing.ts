import { Routes } from '@angular/router'
import { AddAjustementComponent } from './_component/add-ajustement/add-ajustement.component'
import { ListAjustementComponent } from './_component/list-ajustement/list-ajustement.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

// les routes du module Ajustement
export const ajustementRouting: Routes = [
  {
    path: '',
    component: ListAjustementComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'add',
    component: AddAjustementComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list',
    component: ListAjustementComponent,
    canActivate: [GuardGuard]
  }
]
