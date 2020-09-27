import { Component, OnInit, ViewChild, AfterViewInit, Renderer2, EventEmitter, Output } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';

import Time from 'moment';

@Component({
  selector: 'cov-mat-calendar',
  templateUrl: './mat-calendar.component.html',
  styleUrls: ['./mat-calendar.component.scss']
})
export class MatCalendarComponent implements OnInit, AfterViewInit {

  minDate = new Date(0);
  maxDate = new Date();

  @Output()
  dateSelected: EventEmitter<Time.Moment> = new EventEmitter();

  @ViewChild('calendar') calendar: MatCalendar<Time.Moment>;
  selectedDate: Time.Moment;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');

    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          alert('Arrow buttons clicked');
        });
      });
    }
  }

  dateChanged() {
    this.calendar.activeDate = this.selectedDate;
    this.dateSelected.emit(this.selectedDate);
  }

  monthSelected(date: Time.Moment) {
    console.log('month changed');
  }


}
