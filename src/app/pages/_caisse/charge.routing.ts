import { Routes } from "@angular/router";

import { ListComponent } from "./_components/list/list.component";
import { AddComponent } from "./_components/add/add.component";
import { CategorieComponent } from "./_components/categorie/categorie.component";



export const chargeRouting: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'add-new',
        component: AddComponent
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
  