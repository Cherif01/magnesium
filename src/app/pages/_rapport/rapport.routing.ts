import { Routes } from '@angular/router'
import { StockComponent } from './_component/stock/stock.component'
import { PerteProduitComponent } from './_component/perte-produit/perte-produit.component'
import { AchatComponent } from './_component/achat/achat.component'
import { VenteComponent } from './_component/vente/vente.component'
import { ClientComponent } from './_component/client/client.component'
import { FournisseurComponent } from './_component/fournisseur/fournisseur.component'
import { CaisseComponent } from './_component/caisse/caisse.component'
import { DepenseComponent } from './_component/depense/depense.component'
import { PaiementAchatComponent } from './_component/paiement-achat/paiement-achat.component'
import { ArticleComponent } from './_component/article/article.component'
import { ParametreComponent } from './_component/parametre/parametre.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

// les routes du modules rapport
export const rapportRouting: Routes = [
  {
    path: 'journal-stock',
    component: StockComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'rapport',
    component: PerteProduitComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-achat',
    component: AchatComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-vente',
    component: VenteComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-client',
    component: ClientComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-fournisseur',
    component: FournisseurComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal',
    component: CaisseComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-depenses',
    component: DepenseComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-paiement-achat',
    component: PaiementAchatComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'journal-articles',
    component: ArticleComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'settings',
    component: ParametreComponent,
    canActivate: [GuardGuard]
  }
]
