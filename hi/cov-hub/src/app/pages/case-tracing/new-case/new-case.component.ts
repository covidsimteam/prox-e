import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';

import { ActiveTasksInfo } from '../../../@core/data/active-tasks';
import { ActiveTasksService } from '../../../@core/mock/active-tasks.service';
import { ActiveTasksCacheService } from '../../../@core/data/active-tasks-cache';

@Component({
  selector: 'cov-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit, OnDestroy {

  saveToCache = true;
  newTask: ActiveTasksInfo = {
    date: null,
    lab: '',
    case: '',
    phone: null,
    province: '',
    district: '',
    municipal: '',
    ward: null,
    assignedTo: '',
    time: ''
  };

  activeTaskCacheService: ActiveTasksCacheService;

  constructor(
    public t: TranslationServiceEn,
    private translator: TranslateService,
    private activeTaskService: ActiveTasksService) {
      translator.use('en');
    }

  ngOnInit(): void {
    if (this.activeTaskCacheService.isCacheActive()) {
      this.newTask = this.activeTaskCacheService.getFromCache();
    }
  }

  ngOnDestroy(): void {
    if (this.saveToCache) {
      this.activeTaskCacheService.writeToCache(this.newTask);
    }
  }

  addNewTask(event) {
    this.saveToCache = false;
    this.activeTaskCacheService.resetCache();
    // this.activeTaskService.createActiveTasksData(this.newTask);
  }

}
