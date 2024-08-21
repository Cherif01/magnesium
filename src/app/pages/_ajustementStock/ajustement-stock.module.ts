import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAjustementComponent } from './_component/add-ajustement/add-ajustement.component';
import { ListAjustementComponent } from './_component/list-ajustement/list-ajustement.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/demo-material-module';
import { ajustementRouting } from './ajustementStock.routing';



@NgModule({
  declarations: [
    AddAjustementComponent,
    ListAjustementComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(ajustementRouting)
  ]
})
export class AjustementStockModule { }
