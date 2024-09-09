import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contactRouting } from './contact.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/demo-material-module';
import { AddFournisseurComponent } from './_modal/fournisseur/add-fournisseur/add-fournisseur.component';
import { AddClientComponent } from './_modal/client/add-client/add-client.component';
import { FournisseurComponent } from './_components/fournisseur/fournisseur.component';
import { ClientComponent } from './_components/client/client.component';
import { GroupeComponent } from './_components/groupe/groupe.component';
import { DetailClientComponent } from './_components/detail-client/detail-client.component';
import { DetailFournisseurComponent } from './_components/detail-fournisseur/detail-fournisseur.component';
import { FactureClientComponent } from './_components/facture-client/facture-client.component';



@NgModule({
  declarations: [
    AddFournisseurComponent,
    FournisseurComponent,
    AddClientComponent,
    GroupeComponent,
    ClientComponent,
    DetailClientComponent,
    DetailFournisseurComponent,
    FactureClientComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(contactRouting)
  ]
})
export class ContactModule { }
