import { Routes } from '@angular/router'
import { ListComponent } from './_components/list/list.component'
import { AddComponent } from './_components/add/add.component'
import { EtiquettesComponent } from './_components/etiquettes/etiquettes.component'
import { PerteComponent } from './_components/perte/perte.component'
import { PerimeComponent } from './_components/perime/perime.component'
import { RuptureStockComponent } from './_components/rupture-stock/rupture-stock.component'
import { ClassificationComponent } from './_components/classification/classification.component'
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard'

export const productRouting: Routes = [
  {
    path: '',
    component: ListComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'etiquette',
    component: EtiquettesComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'perte',
    component: PerteComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'perumption',
    component: PerimeComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'rupture',
    component: RuptureStockComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'classification',
    component: ClassificationComponent,
    canActivate: [GuardGuard]
  }
]
