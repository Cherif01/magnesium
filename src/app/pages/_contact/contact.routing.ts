import { Routes } from '@angular/router'
import { FournisseurComponent } from './_components/fournisseur/fournisseur.component'
import { ClientComponent } from './_components/client/client.component'
import { GroupeComponent } from './_components/groupe/groupe.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

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
    path: 'groupe',
    component: GroupeComponent,
    canActivate: [GuardGuard]
  }
]
