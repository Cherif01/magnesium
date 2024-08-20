import { Routes } from '@angular/router'
import { FournisseurComponent } from './_components/fournisseur/fournisseur.component'
import { ClientComponent } from './_components/client/client.component'
import { GroupeComponent } from './_components/groupe/groupe.component'

// Les routes du modules
export const contactRouting: Routes = [
  {
    path: 'fournisseur',
    component: FournisseurComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'groupe',
    component: GroupeComponent
  }
]
