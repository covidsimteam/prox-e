import { Component, OnInit, HostListener } from '@angular/core';
import { SMALL_BP } from '../../../app.conf';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cov-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  current: any;
  innerWidthObs = new BehaviorSubject<number>(SMALL_BP);

  readonly CUTOFF = SMALL_BP;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidthObs.next(event?.target?.innerWidth);
  }


  tabChanged(event: any) {
    this.current = event.tabId;
  }

  checkCurrent(current: string) {
    return this.current === current;
  }
}
