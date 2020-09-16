import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActiveTasksInfo, ActiveTasksData } from '../../../@core/data/active-tasks';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cov-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveTasksComponent implements OnInit {

  activeTasksData$: BehaviorSubject<ActiveTasksInfo[]>;

  displayedColumns = ['case', 'assignedTo', 'time'];

  constructor(private activeTasksService: ActiveTasksData) {
    this.activeTasksData$ = this.activeTasksService.getActiveTasksData();
  }

  ngOnInit(): void { }

}
