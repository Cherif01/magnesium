import { Routes } from "@angular/router";
import { ListTransfertComponent } from "./_component/list-transfert/list-transfert.component";
import { AddTransfertComponent } from "./_component/add-transfert/add-transfert.component";

// les routes du module transfert
export const transfertRouting:Routes = [
    {
      path: '',
      component: ListTransfertComponent
    },
    {
        path: 'new-transfert',
        component:AddTransfertComponent 
      },
      {
        path: 'list',
        component: ListTransfertComponent
      }, 
     
]