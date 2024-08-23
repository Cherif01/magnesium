import { Routes } from '@angular/router'
import { ListSaleComponent } from './_components/list-sale/list-sale.component'
import { ListPointOfSaleComponent } from './_components/list-point-of-sale/list-point-of-sale.component'
import { AddSaleComponent } from './_components/add-sale/add-sale.component'
import { RetourVenteComponent } from './_components/retour-vente/retour-vente.component'
import { PosComponent } from './_components/pos/pos.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'
import { ProformaComponent } from './_components/proforma/proforma.component'

export const venteRouting: Routes = [
  {
    path: '',
    component: ListSaleComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list-sale',
    component: ListSaleComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'add-sale',
    component: AddSaleComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'pos/:id',
    component: PosComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list-pos',
    component: ListPointOfSaleComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'retour-sale',
    component: RetourVenteComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'proforma',
    component: ProformaComponent,
    canActivate: [GuardGuard]
  }
]
