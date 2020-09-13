import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.scss']
})
export class DataentryComponent implements OnInit {
  userRole: string = 'admin';
  constructor() { }

  ngOnInit(): void {
  }

}
