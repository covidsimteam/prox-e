import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-taskstats',
  templateUrl: './taskstats.component.html',
  styleUrls: ['./taskstats.component.scss']
})
export class TaskstatsComponent implements OnInit {
  taskStatsHeader: string = 'Your'
  pending: number = 14;
  complete: number = 6;
  
  constructor() { }

  ngOnInit(): void {
  }

}
