import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  NbInputModule, NbIconModule, NbActionsModule
} from '@nebular/theme';

import { CaseTracingComponent } from './case-tracing.component';
import { ActiveTasksComponent } from './active-tasks/active-tasks.component';
import { ContactTracingComponent } from './contact-tracing/contact-tracing.component';
import { TaskStatsPieComponent } from './task-stats-pie/task-stats-pie.component';
import { CaseBannerComponent } from './case-banner/case-banner.component';

import { CaseTracingRoutingModule } from './case-tracing-routing.module';
import { NewCaseComponent } from './new-case/new-case.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ActiveTasksComponent,
    ContactTracingComponent,
    CaseTracingComponent,
    CaseBannerComponent,
    NewCaseComponent, TaskStatsPieComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
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
    MatToolbarModule,

    CaseTracingRoutingModule,

    NgxChartsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule
  ]
})
export class CaseTracingModule { }
