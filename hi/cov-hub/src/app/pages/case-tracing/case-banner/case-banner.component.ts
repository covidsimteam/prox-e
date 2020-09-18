import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { NewCaseComponent } from '../new-case/new-case.component';
import { ActiveTasksCacheService } from '../../../@core/data/active-tasks-cache';

@Component({
  selector: 'cov-case-banner',
  templateUrl: './case-banner.component.html',
  styleUrls: ['./case-banner.component.scss']
})
export class CaseBannerComponent implements OnInit {

  activeTasksCacheService = new ActiveTasksCacheService();
  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void { }

  showNewCaseWindow(): boolean {
    this.windowService.open(NewCaseComponent, {
      title: 'New Case',
      windowClass: 'new-case-window',
      context: {
        activeTaskCacheService: this.activeTasksCacheService
      }
    });

    return false;   // stop event propagation for <a> tag
  }

  showSettingsWindow(): boolean {
    return false;   // stop event propagation for <a> tag
  }

}
