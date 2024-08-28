import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAchatsComponent } from './_components/list-achats/list-achats.component';
import { DemoMaterialModule } from 'src/demo-material-module';

import { achatRouting } from './achats.routing';
import { RouterModule } from '@angular/router';
import { BonDeCommandeComponent } from './_components/bon-de-commande/bon-de-commande.component';
import { RetourAchatComponent } from './_components/retour-achat/retour-achat.component';
import { AddAchatComponent } from './_modal/add-achat/add-achat.component';
import { AddBonCommandeComponent } from './_modal/add-bon-commande/add-bon-commande.component';



@NgModule({
  declarations: [
    ListAchatsComponent,
    BonDeCommandeComponent,
    RetourAchatComponent,
    AddAchatComponent,
    AddBonCommandeComponent,
   
  
    
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
   RouterModule.forChild(achatRouting)
  ]
})
export class AchatsModule { }
