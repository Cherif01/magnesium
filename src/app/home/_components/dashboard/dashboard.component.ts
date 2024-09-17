import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CaisseService } from 'src/app/pages/_caisse/_services/caisse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataSource = new MatTableDataSource([])
  todayDashboard: any =['entree', 'sortie', 'vente' , 'depense' ,'credit','montantTotal'] 
  constructor(
    private service: CaisseService
  ) { }

  ngOnInit(): void {
    this.gettodayDashboard()
  }

  depense: any
  credit: any
  vente: any
  entree: any
  sortie :any
  montantTotal :any
  dashbord : any 

  gettodayDashboard(){
    this.service.getall('caisse', 'todayDashboard').subscribe({
      next: (reponse: any) => {
       
        this.todayDashboard = reponse [0] 
        this.sortie = reponse [0] ['sortie']
        this.depense = reponse [0] ['depense']
        this.credit = reponse [0] ['credit']
        this.vente = reponse [0] ['vente']
        this.entree = reponse [0] ['entree']
        this.montantTotal =reponse [0]['montantTotal']
        console.log('Info dashbord: ', this.todayDashboard )
      },
      error: (err: any) => {
        console.log('REPONSE ERROR : ', err)
      }
    })
  }

}
