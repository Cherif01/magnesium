import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/demo-material-module';
import { RouterModule } from '@angular/router';
import { productRouting } from './produit.routing';
import { PerteComponent } from './_components/perte/perte.component';
import { PerimeComponent } from './_components/perime/perime.component';
import { RuptureStockComponent } from './_components/rupture-stock/rupture-stock.component';
import { ClassificationComponent } from './_components/classification/classification.component';

import { AddComponent } from './_components/add/add.component';
import { ListComponent } from './_components/list/list.component';
import { ProduitComponent } from './_modal/produit/produit.component';
import { EtiquetteComponent } from './_components/etiquette/etiquette.component';
import { AddEtiquetteComponent } from './_modal/add-etiquette/add-etiquette.component';
import { AddPerteComponent } from './_modal/add-perte/add-perte.component';
import { AddCategoryComponent } from './_modal/add-category/add-category.component';
import { AddSubCategoryComponent } from './_modal/add-sub-category/add-sub-category.component';
import { AddFactureProFormatComponent } from '../_ventes/_modal/add-facture-pro-format/add-facture-pro-format.component';



@NgModule({
  declarations: [
    PerteComponent,
    PerimeComponent,
    RuptureStockComponent,
    ClassificationComponent,
    AddComponent,
    ListComponent,
    ProduitComponent,
    EtiquetteComponent,
    AddEtiquetteComponent,
    AddPerteComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    AddFactureProFormatComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(productRouting)
  ]
})
export class ProduitModule { }
