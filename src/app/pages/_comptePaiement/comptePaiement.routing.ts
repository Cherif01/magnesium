import { Routes } from "@angular/router";
import { ListComptePaiementComponent } from "./_component/list-compte-paiement/list-compte-paiement.component";

export const comptePaimentRouting: Routes = [
    {
      path: 'account-list',
      component: ListComptePaiementComponent
    },
   
  ]