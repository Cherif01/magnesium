import { Routes } from "@angular/router";
import { ListComponent } from "./_components/list/list.component";

export const caisseRouting: Routes = [
    {
        path: '',
        component: ListComponent
    },
    
    {
        path: 'list',
        component: ListComponent
    }
    
   
    
  ]