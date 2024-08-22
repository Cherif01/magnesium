import { Routes } from '@angular/router'
import { ListAchatsComponent } from './_components/list-achats/list-achats.component'

import { BonDeCommandeComponent } from './_components/bon-de-commande/bon-de-commande.component'
import { RetourAchatComponent } from './_components/retour-achat/retour-achat.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

// les routes du module achats
export const achatRouting: Routes = [
  {
    path: '',
    component: ListAchatsComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'bon',
    component: BonDeCommandeComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list',
    component: ListAchatsComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'retour',
    component: RetourAchatComponent,
    canActivate: [GuardGuard]
  }
]
