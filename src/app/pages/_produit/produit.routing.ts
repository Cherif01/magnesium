import { Routes } from "@angular/router";
import { ListComponent } from "./_components/list/list.component";
import { AddComponent } from "./_components/add/add.component";
import { PerteComponent } from "./_components/perte/perte.component";
import { PerimeComponent } from "./_components/perime/perime.component";
import { RuptureStockComponent } from "./_components/rupture-stock/rupture-stock.component";
import { ClassificationComponent } from "./_components/classification/classification.component";
import { EtiquetteComponent } from "./_components/etiquette/etiquette.component";

export const productRouting:Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'etiquette',
    component: EtiquetteComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  
  {
    path: 'perte',
    component: PerteComponent
  },
  {
    path: 'perumption',
    component: PerimeComponent
  },
  {
    path: 'rupture',
    component: RuptureStockComponent
  },
  {
    path: 'classification',
    component: ClassificationComponent
  }


]
