import { Routes } from "@angular/router";
import { AddAccountComponent } from "./_components/add-account/add-account.component";
import { AccountListComponent } from "./_components/account-list/account-list.component";
import { BilanAccountComponent } from "./_components/bilan-account/bilan-account.component";

export const comptePaiementRouting:Routes = [
    {
      path: '',
      component: AccountListComponent
    },
    {
      path: 'add-account',
      component: AddAccountComponent
    },
    {
      path: 'account-list',
      component: AccountListComponent
    },
    {
        path: 'bilan-account',
        component: BilanAccountComponent
      }
  ]