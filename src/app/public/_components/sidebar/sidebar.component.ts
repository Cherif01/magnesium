import { Component, OnInit, ViewChild } from '@angular/core'
import { MatAccordion } from '@angular/material/expansion'
import { MatSnackBar } from '@angular/material/snack-bar'
import { AuthService } from 'src/app/core/auth/service/auth-service.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined

  panelOpenState = false

  constructor (private service: AuthService) {}

  ngOnInit (): void {}

  isSubmenuOpen: boolean = false

  toggleSubmenu () {
    this.isSubmenuOpen = !this.isSubmenuOpen
  }

  listeOnglet: any = [
    {
      name: 'Accueil',
      icon: 'bi bi-grid-fill',
      submenu: [
        {
          title: 'Tableau de bord',
          icon: 'bi bi-grid-fill',
          url: 'home/dashboard'
        },
        {
          title: 'Magasin',
          icon: 'bi bi-grid-fill',
          url: 'home/magasin'
        },
        {
          title: 'Entrepot',
          icon: 'bi bi-grid-fill',
          url: 'home/entrepot'
        }
      ]
    },
    {
      name: 'Mes contacts',
      icon: 'bi bi-person',
      submenu: [
        {
          title: 'Fournisseur',
          icon: 'bi bi-grid-fill',
          url: 'contact/fournisseur'
        },
        {
          title: 'Client',
          icon: 'bi bi-grid-fill',
          url: 'contact/client'
        },
        {
          title: 'Groupes',
          icon: 'bi bi-grid-fill',
          url: 'contact/groupe'
        }
      ]
    },
    {
      name: 'Gestion Produits',
      icon: 'bi bi-list',
      submenu: [
        {
          title: 'Nouveau',
          icon: 'bi bi-plus',
          url: 'product/add'
        },
        {
          title: 'Liste',
          icon: 'bi bi-list',
          url: 'product/list'
        },
        {
          title: 'Etiquettes',
          icon: 'bi bi-files',
          url: 'product/etiquette'
        },
        {
          title: 'Perte',
          icon: 'bi bi-folder',
          url: 'product/perte'
        },
        {
          title: 'Echeanche',
          icon: 'bi bi-calendar',
          url: 'product/perumption'
        },
        {
          title: 'Rupture stock',
          icon: 'bi bi-folder',
          url: 'product/rupture'
        },
        {
          title: 'Classification',
          icon: 'bi bi-folder',
          url: 'product/classification'
        }
      ] // Ajout d'un sous-menu vide si nécessaire
    },
    {
      name: 'Gestion Achats',
      icon: 'bi bi-truck',
      submenu: [
        {
          title: 'Bon de commande',
          icon: 'bi bi-grid-fill',
          url: 'achat/bon'
        },
        {
          title: 'Liste achats',
          icon: 'bi bi-grid-fill',
          url: 'achat/list'
        },
        {
          title: 'Retour achats',
          icon: 'bi bi-grid-fill',
          url: 'achat/retour'
        }
      ]
    },
    {
      name: 'Gestion Ventes',
      icon: 'bi bi-cart2',
      submenu: [
        {
          title: 'Nouvelle vente',
          icon: 'bi bi-grid-fill',
          url: 'vente/add-sale'
        },
        {
          title: 'Liste vente',
          icon: 'bi bi-grid-fill',
          url: 'vente/list-sale'
        },
        {
          title: 'P.O.S',
          icon: 'bi bi-grid-fill',
          url: 'vente/list-pos'
        },
        {
          title: 'Retour vente',
          icon: 'bi bi-grid-fill',
          url: 'vente/retour-sale'
        },
        {
          title: 'Facture Proforma',
          icon: 'bi bi-grid-fill',
          url: 'vente/proforma'
        }
      ]
    },
    {
      name: 'Ajuster le stock',
      icon: 'bi bi-reply',
      submenu: [
        {
          title: 'Nouvelle ajustement',
          icon: 'bi bi-pie-chart',
          url: 'ajustement/add'
        },
        {
          title: 'Liste ajustement',
          icon: 'bi bi-pie-chart',
          url: 'ajustement/list'
        }
      ]
    },
    {
      name: 'Depenses',
      icon: 'bi bi-dash-circle',
      submenu: [
        {
          title: 'Liste des depenses',
          icon: 'bi bi-list',
          url: 'charge/list'
        },
        {
          title: 'Type de depense',
          icon: 'bi bi-truck',
          url: 'charge/type'
        }
      ]
    },
    {
      name: 'Gestion compte',
      icon: 'bi bi-cash',
      submenu: [
        {
          title: 'Liste des comptes',
          icon: 'bi bi-list',
          url: 'compte/account-list'
        },
        {
          title: 'Bilan',
          icon: 'bi bi-cash',
          url: 'compte/bilan-account'
        },
        {
          title: 'Liste des comptes',
          icon: 'bi bi-pie-chart',
          url: 'comptePaiement/list'
        },
        {
          title: 'Bilan',
          icon: 'bi bi-pie-chart',
          url: 'comptePaiement/bilan'
        }
      ]
    },
    {
      name: 'Utilisateurs',
      icon: 'bi bi-person',
      submenu: [
        {
          title: 'Listes',
          icon: 'bi bi-pie-chart',
          url: 'home/list-user'
        },
        {
          title: 'Les Roles',
          icon: 'bi bi-pie-chart',
          url: 'home/role-user'
        }
      ]
    },
    {
      name: 'Rapport',
      icon: 'bi bi-pie-chart',
      submenu: [
        {
          title: 'Stock',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-stock'
        },
        {
          title: 'Pertes de products',
          icon: 'bi bi-pie-chart',
          url: 'rapport/rapport'
        },
        {
          title: 'Achats',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-achat'
        },
        {
          title: 'Ventes',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-vente'
        },
        {
          title: 'Clients',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-client'
        },
        {
          title: 'Fournisseurs',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-fournisseur'
        },
        {
          title: 'Caisse',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal'
        },
        {
          title: 'D&#233;pense',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-depenses'
        },
        {
          title: 'Paiement des achats',
          icon: 'bi bi-pie-chart',
          url: 'rapport/paiement-achat'
        },
        {
          title: 'Les Articles',
          icon: 'bi bi-pie-chart',
          url: 'rapport/journal-articles'
        }
      ]
    },
    {
      name: 'Configuration',
      icon: 'bi bi-trash',
      submenu: [
        {
          title: 'Config',
          icon: 'bi bi-pie-chart',
          url: 'config/settings'
        }
      ]
    }
  ]

  menuList: any = []

  logout () {
    this.service.logout()
  }
}
