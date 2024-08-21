import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/demo-material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { venteRouting } from './vente.routing';
import { AddBrouillonComponent } from './_components/add-brouillon/add-brouillon.component';
import { AddSaleComponent } from './_components/add-sale/add-sale.component';
import { ListComponent } from './_components/list/list.component';
import { ListPdvComponent } from './_components/list-pdv/list-pdv.component';
import { RetourVenteComponent } from './_components/retour-vente/retour-vente.component';
import { ListBrouillonComponent } from './_components/list-brouillon/list-brouillon.component';




@NgModule({
  declarations: [
    AddBrouillonComponent,
    AddSaleComponent,
    ListComponent,
    ListPdvComponent,
    RetourVenteComponent,
    ListBrouillonComponent

  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(venteRouting)
  ]
})
export class VenteModule { }
