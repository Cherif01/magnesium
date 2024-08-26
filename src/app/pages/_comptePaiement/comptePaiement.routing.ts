import { Routes } from "@angular/router";
import { AccountListComponent } from "./_components/account-list/account-list.component";
import { AddAccountComponent } from "./_components/add-account/add-account.component";
import { AccountBilanComponent } from "./_components/account-bilan/account-bilan.component";

export const comptePaimentRouting: Routes = [
    {
      path: 'account-list',
      component: AccountListComponent
    },
    {
      path: 'add-account',
      component: AddAccountComponent
    },
    {
      path: 'account-bilan',
      component: AccountBilanComponent
    },
   
  ]