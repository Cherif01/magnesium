import { Routes } from '@angular/router'
import { DashboardComponent } from './_components/dashboard/dashboard.component'
import { MagasinComponent } from './_components/magasin/magasin.component'
import { EntrepotComponent } from './_components/entrepot/entrepot.component'
import { ListUserComponent } from './_components/_user/list-user/list-user.component'
// Les routes du modules
export const homeRouting: Routes = [
  {
    path: '',
    component: DashboardComponent
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
  },
  {
    path: 'list-user',
    component: ListUserComponent
  }
]
