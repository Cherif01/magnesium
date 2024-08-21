import { Routes } from "@angular/router";
import { AddAjustementComponent } from "./_component/add-ajustement/add-ajustement.component";
import { ListAjustementComponent } from "./_component/list-ajustement/list-ajustement.component";

// les routes du module Ajustement
export const ajustementRouting:Routes = [
    {
      path: '',
      component: ListAjustementComponent
    },
    {
        path: 'add',
        component:AddAjustementComponent 
      },
      {
        path: 'list',
        component: ListAjustementComponent
      }, 
     
]