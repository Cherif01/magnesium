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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



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
    AddPerteComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(productRouting)
  ]
})
export class ProduitModule { }
