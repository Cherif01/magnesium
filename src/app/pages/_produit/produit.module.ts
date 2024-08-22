import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/demo-material-module';
import { RouterModule } from '@angular/router';
import { productRouting } from './produit.routing';
import { EtiquettesComponent } from './_components/etiquettes/etiquettes.component';
import { PerteComponent } from './_components/perte/perte.component';
import { PerimeComponent } from './_components/perime/perime.component';
import { RuptureStockComponent } from './_components/rupture-stock/rupture-stock.component';
import { ClassificationComponent } from './_components/classification/classification.component';



@NgModule({
  declarations: [
    EtiquettesComponent,
    PerteComponent,
    PerimeComponent,
    RuptureStockComponent,
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(productRouting)
  ]
})
export class ProduitModule { }
