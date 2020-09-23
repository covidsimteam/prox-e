import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActiveTasksService } from '../active-tasks.service';

@Component({
  selector: 'cov-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveTasksComponent implements OnInit {

  displayedColumns = ['case', 'assignedTo', 'time'];

  constructor(public activeTasksService: ActiveTasksService) {}

  ngOnInit(): void { }

}
