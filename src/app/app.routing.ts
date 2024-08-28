import { Routes } from '@angular/router'
import { NotfoundComponent } from './core/components/notfound/notfound.component'

export const AppRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../app/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../app/pages/_contact/contact.module').then(
            m => m.ContactModule
          )
      },
      {
        path: 'product',
        loadChildren: () =>
          import('../app/pages/_produit/produit.module').then(
            m => m.ProduitModule
          )
      },
      {
        path: 'transfert',
        loadChildren: () =>
          import('../app/pages/_transfertStock/transfert-stock.module').then(
            m => m.TransfertStockModule
          )
      },
      {
        path: 'ajustement',
        loadChildren: () =>
          import('../app/pages/_ajustementStock/ajustement-stock.module').then(
            m => m.AjustementStockModule
          )
      },
      {
        path: 'achat',
        loadChildren: () =>
          import('../app/pages/_achats/achats.module').then(
            m => m.AchatsModule
          )
      },
      {
        path: 'vente',
        loadChildren: () =>
          import('../app/pages/_ventes/vente.module').then(
            m => m.VenteModule
          )
      },
     { path: 'comptePaiement',
      loadChildren: () =>
        import('../app/pages/_comptePaiement/comptePaiement.module').then(
          m => m.ComptePaiementModule
        )
     },
     { path: 'charge',
      loadChildren: () =>
        import('../app/pages/_caisse/charge.module').then(
          m => m.ChargeModule
        )
     },
     {
        path: '**',
        // redirectTo: '/home',
        component: NotfoundComponent,
        pathMatch: 'full'
      }
    ]
  }
]
