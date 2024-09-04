import { Routes } from "@angular/router";
import { GuardGuard } from "src/app/core/auth/guard/guard.guard";
import { AccountBilanComponent } from "./_components/account-bilan/account-bilan.component";
import { AccountListComponent } from "./_components/account-list/account-list.component";


export const compteRouting: Routes = [
    {
     path: '',
     component: AccountListComponent,
     canActivate: [GuardGuard]
      },

    {
      path: 'list',
      component: AccountListComponent,
      canActivate: [GuardGuard]
    },

    {
      path: 'bilan',
      component: AccountBilanComponent,
      canActivate: [GuardGuard]
    },

  ]
