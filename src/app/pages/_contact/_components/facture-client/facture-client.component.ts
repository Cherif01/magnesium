import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactServiceService } from '../../_services/contact-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facture-client',
  templateUrl: './facture-client.component.html',
  styleUrls: ['./facture-client.component.scss']
})
export class FactureClientComponent implements OnInit {

  title = 'Facture Client'

 
  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [
    'id',
    'reference',
    'createdAt',
    'montant',
    'regler',
    'reste',
    'Action'
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any
  id: any;

  constructor (
    private service : ContactServiceService,
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idClient = this.activeroute.snapshot.params['id']
    this.getFactureClient()
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
  idClient :any
  infoClient:any = {}
 
  getFactureClient(): void {
    // console.log("ID en GET : ", this.idClient)
    this.service.getOne('client', 'factureClient', this.idClient)
    .subscribe({
      next: (response: any) => {
        console.log('Info : ', response)
       // this.infoClient = response
       // this.FactureClient.patchValue(this.infoClient);
      },
      error: (error: any) => {
        console.log("Error : ", error);
        
      },
    })
  }
}
