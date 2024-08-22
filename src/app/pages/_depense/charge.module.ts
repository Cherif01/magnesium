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
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    CategorieComponent,
    AddNewComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forChild(chargeRouting)
  ]
})
export class ChargeModule { }
