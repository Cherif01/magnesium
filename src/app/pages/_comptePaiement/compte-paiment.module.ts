import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/demo-material-module';
import { comptePaimentRouting } from './comptePaiement.routing';
import { AccountListComponent } from './_components/account-list/account-list.component';
import { AddAccountComponent } from './_components/add-account/add-account.component';
import { AccountBilanComponent } from './_components/account-bilan/account-bilan.component';
import { AddCompteComponent } from './_modal/add-compte/add-compte.component';



@NgModule({
  declarations: [
  
  
    AccountListComponent,
    AddAccountComponent,
    AccountBilanComponent,
    AddCompteComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(comptePaimentRouting)
  ]
})
export class ComptePaimentModule { }
