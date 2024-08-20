import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/demo-material-module';
import { RouterModule } from '@angular/router';
import { productRouting } from './produit.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(productRouting)
  ]
})
export class ProduitModule { }
