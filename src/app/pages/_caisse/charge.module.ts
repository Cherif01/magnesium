import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chargeRouting } from './charge.routing';
import { RouterModule } from '@angular/router';
import { AddCaisseComponent } from './_modal/add-caisse/add-caisse.component';
import { DemoMaterialModule } from 'src/demo-material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { ListComponent } from './_components/list/list.component';




@NgModule({
  declarations: [
    ListComponent,
    AddCaisseComponent,
  
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(chargeRouting)
  ]
})
export class ChargeModule { }
