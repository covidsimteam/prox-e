import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import Time from 'moment';


@Component({
  selector: 'cov-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.scss']
})
export class SchedComponent implements OnInit {


  form: FormGroup;

  inlineRange: any;

  @Output()
  selectedDate = Time();

  @ViewChild('calendar')
  calendar: MatCalendar<Time.Moment>;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [{begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25)}]
    });
  }

  inlineRangeChange($event: any) {
    this.inlineRange = $event;
  }

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
