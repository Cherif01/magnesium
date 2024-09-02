import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/demo-material-module";
import { AccountBilanComponent } from "./_components/account-bilan/account-bilan.component";
import { AccountListComponent } from "./_components/account-list/account-list.component";
import { AddCompteComponent } from "./_modal/add-compte/add-compte.component";
import { compteRouting } from "./compte.routing";


@NgModule({
    declarations: [

      AccountListComponent,
      AccountBilanComponent,
      AddCompteComponent
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