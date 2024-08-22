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
        path: 'charge',
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
export default AppRouting
