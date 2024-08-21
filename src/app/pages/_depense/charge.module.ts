import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './_components/add-new/add-new.component';
import { CategorieComponent } from './_components/categorie/categorie.component';
import { ListComponent } from './_components/list/list.component';
import { RouterModule } from '@angular/router';
import { chargeRouting } from './charge.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/demo-material-module';



@NgModule({
  declarations: [
    
    
    ListComponent
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
