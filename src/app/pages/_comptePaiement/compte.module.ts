import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/demo-material-module";
import { AddCompteComponent } from "./_modal/add-compte/add-compte.component";
import { compteRouting } from "./compte.routing";
import { ListComponent } from './_components/list/list.component';
import { BilanComponent } from './_components/bilan/bilan.component';
import { DetailCompteComponent } from './_components/detail-compte/detail-compte.component';


@NgModule({
    declarations: [

     
      AddCompteComponent,
      ListComponent,
      BilanComponent,
      DetailCompteComponent
    ],
    imports: [
      CommonModule,
      DemoMaterialModule,
      MatDialogModule,
      MatFormFieldModule,
      MatTabsModule,
      RouterModule.forChild(compteRouting)
    ]
  })
  export class CompteModule { }
