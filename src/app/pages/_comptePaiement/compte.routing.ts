import { Routes } from "@angular/router";
import { GuardGuard } from "src/app/core/auth/guard/guard.guard";
import { ListComponent } from "./_components/list/list.component";
import { BilanComponent } from "./_components/bilan/bilan.component";
import { DetailCompteComponent } from "./_components/detail-compte/detail-compte.component";


export const compteRouting: Routes = [
    
    {
      path: '',
      component: ListComponent,
      canActivate: [GuardGuard]
    },
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
    {
      path: 'detail-compte/:id',
      component: DetailCompteComponent,
      canActivate: [GuardGuard]
    },

  ]
