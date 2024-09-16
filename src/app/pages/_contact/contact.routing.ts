import { Routes } from '@angular/router'
import { FournisseurComponent } from './_components/fournisseur/fournisseur.component'
import { ClientComponent } from './_components/client/client.component'
import { GroupeComponent } from './_components/groupe/groupe.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'
import { DetailClientComponent } from './_components/detail-client/detail-client.component'
import { DetailFournisseurComponent } from './_components/detail-fournisseur/detail-fournisseur.component'


// Les routes du modules
export const contactRouting: Routes = [
  {
    path: 'fournisseur',
    component: FournisseurComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [GuardGuard]
  },
 
  {
    path: 'detail-client/:id',
    component: DetailClientComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'detail-fournisseur/:id',
    component: DetailFournisseurComponent,
    canActivate: [GuardGuard]
  },
 
  {
    path: 'groupe',
    component: GroupeComponent,
    canActivate: [GuardGuard]
  }
]
