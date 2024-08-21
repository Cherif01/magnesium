import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountComponent } from './_components/add-account/add-account.component';

import { BilanAccountComponent } from './_components/bilan-account/bilan-account.component';
import { AccountListComponent } from './_components/account-list/account-list.component';
import { RouterModule } from '@angular/router';
import { comptePaiementRouting } from './compte-paiement.routing';




@NgModule({
  declarations: [
    AddAccountComponent,
    BilanAccountComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(comptePaiementRouting)
  ]
})
export class ComptePaiementModule { }
