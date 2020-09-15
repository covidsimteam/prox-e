import { Component, OnInit } from '@angular/core';
import { ActiveTasksInfo, ActiveTasksData } from '../../@core/data/active-tasks';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'cov-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss']
})
export class ActiveTasksComponent implements OnInit {
  
  private alive = true;
  activeTasksData: ActiveTasksInfo[];

  displayedColumns = ['case', 'assignedTo', 'time'];
  
  constructor(private activeTasksService: ActiveTasksData) {
    this.activeTasksService.getActiveTasksData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.activeTasksData = data;
      });
  }

  ngOnInit(): void {
  }

}