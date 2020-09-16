import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { 
  NbCardModule, 
  NbWindowModule, 
  NbDatepickerModule,
  NbInputModule
} from '@nebular/theme';

import { CaseTracingComponent } from './case-tracing.component';
import { ActiveTasksComponent } from './active-tasks/active-tasks.component';
import { ContactTracingComponent } from './contact-tracing/contact-tracing.component';
import { TaskStatsComponent } from './task-stats/task-stats.component';
import { CaseBannerComponent } from './case-banner/case-banner.component';

import { CaseTracingRoutingModule } from './case-tracing-routing.module';
import { NewCaseComponent } from './new-case/new-case.component';

@NgModule({
  declarations: [
    ActiveTasksComponent, 
    ContactTracingComponent, 
    TaskStatsComponent, 
    CaseTracingComponent, 
    CaseBannerComponent, 
    NewCaseComponent
  ],
  
  imports: [
    CommonModule,
    TranslateModule.forChild({ extend: true }),

    NbCardModule,
    NbInputModule,
    NbDatepickerModule,
    NbWindowModule.forChild({
      closeOnBackdropClick: false,
      closeOnEsc: true
    }),

    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,

    CaseTracingRoutingModule
  ]
})
export class CaseTracingModule { }