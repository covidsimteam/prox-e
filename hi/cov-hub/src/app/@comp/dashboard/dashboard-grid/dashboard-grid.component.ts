import { Component, OnInit } from '@angular/core';
import { MapSeroService } from '../map-sero.service';

@Component({
  selector: 'cov-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  constructor(public mapSero: MapSeroService) { }

  ngOnInit(): void {
  }

}
