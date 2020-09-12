import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-activetasks',
  templateUrl: './activetasks.component.html',
  styleUrls: ['./activetasks.component.scss']
})
export class ActivetasksComponent implements OnInit {
  displayedColumns: string[] = ['case', 'assignedTo', 'time'];
  dataSource = CASE_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ActiveCase {
  case: string;
  assignedTo: string;
  time: string;
}

/* Static data */
const CASE_DATA: ActiveCase[] = [
  {case: "Ram Thapa", assignedTo: "Mr. X", time: "2 Hr."},
  {case: "Ram Thapa", assignedTo: "Mr. X", time: "2 Hr."},
  {case: "Ram Thapa", assignedTo: "Mr. X", time: "2 Hr."},
  {case: "Ram Thapa", assignedTo: "Mr. X", time: "2 Hr."},
  {case: "Ram Thapa", assignedTo: "Mr. X", time: "2 Hr."}
]
