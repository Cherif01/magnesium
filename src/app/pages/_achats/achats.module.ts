import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAchatsComponent } from './_components/list-achats/list-achats.component';
import { DemoMaterialModule } from 'src/demo-material-module';

import { achatRouting } from './achats.routing';
import { RouterModule } from '@angular/router';
import { BonDeCommandeComponent } from './_components/bon-de-commande/bon-de-commande.component';
import { RetourAchatComponent } from './_components/retour-achat/retour-achat.component';



@NgModule({
  declarations: [
    ListAchatsComponent,
    BonDeCommandeComponent,
    RetourAchatComponent,
  
    
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
   RouterModule.forChild(achatRouting)
  ]
})
export class AchatsModule { }
