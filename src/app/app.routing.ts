import { Routes } from '@angular/router'
import { NotfoundComponent } from './core/components/notfound/notfound.component'

const AppRouting: Routes = [
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
        path: 'achat',
        loadChildren: () =>
          import('../app/pages/_achats/achats.module').then(
            m => m.AchatsModule
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
        path: '',
        loadChildren: () =>
          import('../app/pages/_rapport/rapport.module').then(
            m => m.RapportModule
          )
      },
     { path: 'compte',
      loadChildren: () =>
        import('../app/pages/_comptePaiement/compte-paiment.module').then(
          m => m.ComptePaimentModule
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
export default AppRouting
