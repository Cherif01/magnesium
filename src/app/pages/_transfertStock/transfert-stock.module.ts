import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransfertComponent } from './_component/add-transfert/add-transfert.component';
import { ListTransfertComponent } from './_component/list-transfert/list-transfert.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/demo-material-module';
import { transfertRouting } from './transfertStock.routing';
import { AddTransfertStockComponent } from './_modal/add-transfert-stock/add-transfert-stock.component';



@NgModule({
  declarations: [
    AddTransfertComponent,
    ListTransfertComponent,
    AddTransfertStockComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(transfertRouting)
  ]
})
export class TransfertStockModule { }
