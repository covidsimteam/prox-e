import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  current: any;
  constructor() { }

  ngOnInit(): void {
  }

  tabChanged(event: any) {
    this.current = event.tabId;
  }

  checkCurrent(current: string) {
    return this.current === current;
  }
}
