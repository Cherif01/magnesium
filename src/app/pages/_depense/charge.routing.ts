import { Routes } from "@angular/router";
import { AddNewComponent } from "./_components/add-new/add-new.component";
import { ListComponent } from "./_components/list/list.component";
import { CategorieComponent } from "./_components/categorie/categorie.component";

export const chargeRouting: Routes = [
    {
      path: '',
      component: ListComponent
    },
    {
        path: 'add-new',
        component: AddNewComponent
    },
    {
        path: 'categorie',
        component: CategorieComponent
    },
    {
        path: 'list',
        component: ListComponent
    }
   
    
  ]
  