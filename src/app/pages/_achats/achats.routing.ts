import { Routes } from "@angular/router";
import { ListAchatsComponent } from "./_components/list-achats/list-achats.component";

import { BonDeCommandeComponent } from "./_components/bon-de-commande/bon-de-commande.component";
import { RetourAchatComponent } from "./_components/retour-achat/retour-achat.component";

// les routes du module achats
export const achatRouting:Routes = [
    {
      path: '',
      component: ListAchatsComponent
    },
    {
        path: 'bon',
        component:BonDeCommandeComponent 
      },
      {
        path: 'list',
        component: ListAchatsComponent
      }, 
      {
        path: 'retour',
        component: RetourAchatComponent
      },
]