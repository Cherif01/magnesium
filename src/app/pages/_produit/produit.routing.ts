
import { Routes } from '@angular/router'
import { EtiquetteComponent } from "./_components/etiquette/etiquette.component";
import { GuardGuard } from 'src/app/core/auth/guard/guard.guard';
import { AddComponent } from './_components/add/add.component';
import { ClassificationComponent } from './_components/classification/classification.component';
import { ListComponent } from './_components/list/list.component';
import { PerimeComponent } from './_components/perime/perime.component';
import { PerteComponent } from './_components/perte/perte.component';
import { RuptureStockComponent } from './_components/rupture-stock/rupture-stock.component';
import { DetailProduitComponent } from './_components/detail-produit/detail-produit.component';
import { PerteDetailsComponent } from './_components/_details/perte-details/perte-details.component';

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
    path: 'etiquette',
    component: EtiquetteComponent
  },
  {
    path: 'list',
    component: ListComponent,
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
  },
  {
    path: 'detail-produit/:id',
    component: DetailProduitComponent,
    canActivate: [GuardGuard]
  },
  {
    path: 'detail-perte/:id',
    component: PerteDetailsComponent,
    canActivate: [GuardGuard]
  },
]
