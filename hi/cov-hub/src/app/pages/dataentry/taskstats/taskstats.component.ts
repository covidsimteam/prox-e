import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-taskstats',
  templateUrl: './taskstats.component.html',
  styleUrls: ['./taskstats.component.scss']
})
export class TaskstatsComponent implements OnInit {
  taskStatsHeader: string = 'Your'
  constructor() { }

  ngOnInit(): void {
  }

}
