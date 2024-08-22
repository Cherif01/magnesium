import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComptePaiementComponent } from './_component/list-compte-paiement/list-compte-paiement.component';
import { AddComptePaiementComponent } from './_modal/add-compte-paiement/add-compte-paiement.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/demo-material-module';
import { comptePaimentRouting } from './comptePaiement.routing';



@NgModule({
  declarations: [
    ListComptePaiementComponent,
    AddComptePaiementComponent
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
