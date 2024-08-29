import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {

  title: string = 'Detail du client x'

  constructor() { }

  ngOnInit(): void {
  }

}
