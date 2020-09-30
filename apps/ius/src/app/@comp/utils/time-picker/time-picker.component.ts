import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-time-picker',
  template: `
    <input type="time" atp-time-picker class="form-control"/>
  `,
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent {}
