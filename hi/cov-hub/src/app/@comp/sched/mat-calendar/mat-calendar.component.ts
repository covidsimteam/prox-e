import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

import Time from 'moment';

@Component({
  selector: 'cov-mat-calendar',
  templateUrl: './mat-calendar.component.html',
  styleUrls: ['./mat-calendar.component.scss']
})
export class MatCalendarComponent implements OnInit {

  @ViewChild('calendar') calendar: MatCalendar<Time.Moment>;
  selectedDate: Time.Moment;
  constructor() { }

  ngOnInit(): void {
  }

  monthSelected(date) {
    alert(`Selected: ${date}`);
  }

}
