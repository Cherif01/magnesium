import { Routes } from "@angular/router";

import { ListComponent } from "./_components/list/list.component";





export const chargeRouting: Routes = [
    {
        path: '',
        component: ListComponent
    },
    
    {
        path: 'list',
        component: ListComponent
    }
   
    
  ]
  