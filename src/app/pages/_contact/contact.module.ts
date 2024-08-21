import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contactRouting } from './contact.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/demo-material-module';
import { AddFournisseurComponent } from './_modal/fournisseur/add-fournisseur/add-fournisseur.component';



@NgModule({
  declarations: [
    AddFournisseurComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    RouterModule.forChild(contactRouting)
  ]
})
export class ContactModule { }
