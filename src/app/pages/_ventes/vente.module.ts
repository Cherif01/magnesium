import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { venteRouting } from './vente.routing';
import { DemoMaterialModule } from 'src/demo-material-module';
import { PosComponent } from './_components/pos/pos.component';
import { RecuPosComponent } from './_modal/__pos/recu-pos/recu-pos.component';
import { MatIconModule } from '@angular/material/icon';
import { AddSaleComponent } from './_components/add-sale/add-sale.component';
import { ListPointOfSaleComponent } from './_components/list-point-of-sale/list-point-of-sale.component';
import { ListSaleComponent } from './_components/list-sale/list-sale.component';
import { RetourVenteComponent } from './_components/retour-vente/retour-vente.component';
import { ProformaComponent } from './_components/proforma/proforma.component';



@NgModule({
  declarations: [
    PosComponent,
    RecuPosComponent,
    AddSaleComponent,
    ListPointOfSaleComponent,
    ListSaleComponent,
    RetourVenteComponent,
    ProformaComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatIconModule,
    RouterModule.forChild(venteRouting)
  ]
})
export class VenteModule { }
