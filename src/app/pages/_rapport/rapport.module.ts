import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './_component/stock/stock.component';
import { PerteProduitComponent } from './_component/perte-produit/perte-produit.component';
import { AchatComponent } from './_component/achat/achat.component';
import { VenteComponent } from './_component/vente/vente.component';
import { ClientComponent } from './_component/client/client.component';
import { FournisseurComponent } from './_component/fournisseur/fournisseur.component';
import { CaisseComponent } from './_component/caisse/caisse.component';
import { PaiementAchatComponent } from './_component/paiement-achat/paiement-achat.component';
import { ArticleComponent } from './_component/article/article.component';
import { ParametreComponent } from './_component/parametre/parametre.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/demo-material-module';
import { rapportRouting } from './rapport.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    StockComponent,
    PerteProduitComponent,
    AchatComponent,
    VenteComponent,
    ClientComponent,
    FournisseurComponent,
    CaisseComponent,
    PaiementAchatComponent,
    ArticleComponent,
    ParametreComponent
  ],
  imports: [
    CommonModule,
      DemoMaterialModule,
      MatDialogModule,
      MatFormFieldModule,
      MatTabsModule,
      RouterModule.forChild(rapportRouting)
  ]
})
export class RapportModule { }
