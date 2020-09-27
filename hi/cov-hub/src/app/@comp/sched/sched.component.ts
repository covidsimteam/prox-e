import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import Time from 'moment';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'ngx-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.scss']
})
export class SchedComponent implements OnInit {

  @Output()
  selectedDate = Time();

  @ViewChild('calendar')
  calendar: MatCalendar<Time.Moment>;

  constructor() { }

  ngOnInit(): void {
  }

  monthSelected(date: Time.Moment) {
    console.log('month changed');
  }

  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
  }

  prevDay() {
    const prevMoment = Time(this.selectedDate).add(-1, 'days');
    this.selectedDate = prevMoment;
    this.dateChanged();
  }

  today() {
    this.selectedDate = Time();
    this.dateChanged();
  }

  nextDay() {
    const nextMoment = Time(this.selectedDate).add(1, 'days');
    this.selectedDate = nextMoment;
    this.dateChanged();
  }
}
