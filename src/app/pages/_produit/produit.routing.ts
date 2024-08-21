import { Routes } from "@angular/router";
import { ListComponent } from "./_components/list/list.component";
import { AddComponent } from "./_components/add/add.component";
import { EtiquettesComponent } from "./_components/etiquettes/etiquettes.component";
import { PerteComponent } from "./_components/perte/perte.component";
import { PerimeComponent } from "./_components/perime/perime.component";
import { RuptureStockComponent } from "./_components/rupture-stock/rupture-stock.component";
import { ClassificationComponent } from "./_components/classification/classification.component";

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
    path: 'list',
    component: ListComponent
  },
  {
    path: 'etiquette',
    component: EtiquettesComponent
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
