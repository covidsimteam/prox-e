import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { NewCaseComponent } from '../new-case/new-case.component';

@Component({
  selector: 'cov-case-banner',
  templateUrl: './case-banner.component.html',
  styleUrls: ['./case-banner.component.scss']
})
export class CaseBannerComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  showNewCaseWindow() {
    this.windowService.open(NewCaseComponent, {
      title: 'New Case',
      windowClass: 'new-case-window'
    });
  }

}
