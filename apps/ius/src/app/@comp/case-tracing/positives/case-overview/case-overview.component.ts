import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'cov-case-overview',
  templateUrl: './case-overview.component.html',
  styleUrls: ['./case-overview.component.scss']
})
export class CaseOverviewComponent {

  tiles: Tile[] = [
    { text: 'Top', cols: 3, rows: 1, color: 'lightgreen' },
    { text: 'Bottom', cols: 1, rows: 1, color: 'lightblue' }
  ];
}
