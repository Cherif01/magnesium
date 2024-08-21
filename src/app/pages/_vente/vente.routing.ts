import { Routes } from "@angular/router";
import { ListComponent } from "./_components/list/list.component";
import { AddSaleComponent } from "./_components/add-sale/add-sale.component";
import { ListPdvComponent } from "./_components/list-pdv/list-pdv.component";
import { AddBrouillonComponent } from "./_components/add-brouillon/add-brouillon.component";
import { RetourVenteComponent } from "./_components/retour-vente/retour-vente.component";
import { ListBrouillonComponent } from "./_components/list-brouillon/list-brouillon.component";


export const venteRouting: Routes = [
    {
      path: '',
      component: ListComponent
    },
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'add-sale',
      component: AddSaleComponent
    },
    {
        path: 'list-pdv',
        component: ListPdvComponent
    },
    {
        path: 'add-brouillon',
        component: AddBrouillonComponent
    },
    {
        path: 'list-brouillon',
        component: ListBrouillonComponent
    },
    {
        path: 'retour-vente',
        component: RetourVenteComponent
    }
    
  ]
  