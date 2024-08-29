import { Routes } from "@angular/router";
import { AccountListComponent } from "./_components/account-list/account-list.component";
import { AccountBilanComponent } from "./_components/account-bilan/account-bilan.component";
import { GuardGuard } from "src/app/core/auth/guard/guard.guard";

export const comptePaiementRouting: Routes = [
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