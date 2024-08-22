import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { venteRouting } from './vente.routing';
import { DemoMaterialModule } from 'src/demo-material-module';
import { PosComponent } from './_components/pos/pos.component';



@NgModule({
  declarations: [
    PosComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(venteRouting)
  ]
})
export class VenteModule { }
