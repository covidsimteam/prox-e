import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.scss']
})
export class TaskStatsComponent implements OnInit {
  taskStatsHeader = 'Your' // Dynamically change once user logs in.
  
  constructor() { }

  ngOnInit(): void {
  }

}
