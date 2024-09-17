import { Routes } from "@angular/router";
import { GuardGuard } from "src/app/core/auth/guard/guard.guard";
import { ListComponent } from "./_components/list/list.component";
import { BilanComponent } from "./_components/bilan/bilan.component";


export const compteRouting: Routes = [
    
  
    {
      path: 'list',
      component: ListComponent,
      canActivate: [GuardGuard]
    },

    {
      path: 'bilan',
      component: BilanComponent,
      canActivate: [GuardGuard]
    },

  ]
