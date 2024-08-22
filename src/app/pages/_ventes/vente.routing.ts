import { Routes } from '@angular/router'
import { ListSaleComponent } from './_components/list-sale/list-sale.component'
import { ListPointOfSaleComponent } from './_components/list-point-of-sale/list-point-of-sale.component'
import { AddSaleComponent } from './_components/add-sale/add-sale.component'
import { RetourVenteComponent } from './_components/retour-vente/retour-vente.component'
import { PosComponent } from './_components/pos/pos.component'

export const venteRouting: Routes = [
  {
    path: '',
    component: ListSaleComponent
  },
  {
    path: 'list-sale',
    component: ListSaleComponent
  },
  {
    path: 'add-sale',
    component: AddSaleComponent
  },
  {
    path: 'pos/:id',
    component: PosComponent
  },
  {
    path: 'list-pos',
    component: ListPointOfSaleComponent
  },
  {
    path: 'retour-sale',
    component: RetourVenteComponent
  }
]
