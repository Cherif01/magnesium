import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { DemoMaterialModule } from "src/demo-material-module";
import { ListComponent } from "./_components/list/list.component";
import { AddCaisseComponent } from "./_modal/add-caisse/add-caisse.component";
import { caisseRouting } from "./caisse.routing";

@NgModule({
    declarations: [
      ListComponent,
      AddCaisseComponent,
    
    ],
    imports: [
      CommonModule,
      DemoMaterialModule,
      MatDialogModule,
      MatFormFieldModule,
      MatTabsModule,
      RouterModule.forChild(caisseRouting)
    ]
  })
  export class CaisseModule { }