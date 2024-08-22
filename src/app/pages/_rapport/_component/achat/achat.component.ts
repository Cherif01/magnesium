import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss']
})
export class AchatComponent implements OnInit {

  title = 'Journal des achats'

  // Assign the data to the data source for the table to render
  dataSource = new MatTableDataSource([])

  displayedColumns: string[] = [
    'id',
    'name',
    'Action'
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator = Object.create(null)
  @ViewChild(MatSort) sort?: MatSort | any

  constructor() { }

  ngOnInit(): void {
  }
  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

}
