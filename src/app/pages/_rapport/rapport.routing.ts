import { Routes } from "@angular/router";
import { StockComponent } from "./_component/stock/stock.component";
import { PerteProduitComponent } from "./_component/perte-produit/perte-produit.component";
import { AchatComponent } from "./_component/achat/achat.component";
import { VenteComponent } from "./_component/vente/vente.component";
import { ClientComponent } from "./_component/client/client.component";
import { FournisseurComponent } from "./_component/fournisseur/fournisseur.component";
import { CaisseComponent } from "./_component/caisse/caisse.component";
import { DepenseComponent } from "./_component/depense/depense.component";
import { PaiementAchatComponent } from "./_component/paiement-achat/paiement-achat.component";
import { ArticleComponent } from "./_component/article/article.component";
import { ParametreComponent } from "./_component/parametre/parametre.component";

// les routes du modules rapport
export const rapportRouting:Routes = [
    {
      path: 'journal-stock',
      component: StockComponent
    },
    {
        path: 'rapport',
        component: PerteProduitComponent
      },
      {
        path: 'journal-achat',
        component: AchatComponent
      }, 
      {
        path: 'journal-vente',
        component: VenteComponent
      },
      {
          path: 'journal-client',
          component: ClientComponent
        },
        {
          path: 'journal-fournisseur',
          component: FournisseurComponent
        },
        {
            path: 'journal',
            component: CaisseComponent
          },
          {
              path: 'journal-depenses',
              component: DepenseComponent
            },
            {
              path: 'journal-paiement-achat',
              component: PaiementAchatComponent
            },
            {
                path: 'journal-articles',
                component: ArticleComponent
              },
              {
                  path: 'settings',
                  component: ParametreComponent
                },
               
]