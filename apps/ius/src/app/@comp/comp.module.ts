import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NbButtonModule, NbCardModule, NbMenuModule } from '@nebular/theme';
import { CompRoutingModule } from './comp-routing.module';
import { CompComponent } from './comp.component';
import { CovFormMatModule } from './cov-form/mat/cov-form-mat.module';
import { CovFormNebModule } from './cov-form/neb/cov-form-neb.module';
import { CovTableMatModule } from './cov-table/mat/cov-table-mat.module';
import { CovTableNebModule } from './cov-table/neb/cov-table-neb.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SchedDirective } from './sched/sched.directive';
import { SchedModule } from './sched/sched.module';
import { SchedPipe } from './sched/sched.pipe';
import { UtilsModule } from './utils/utils.module';
import { VisualizationModule } from './viz/visualization.module';
import { WizardModule } from './wizard/wizard.module';
import { ThemeModule } from '../@theme/theme.module';

const COMPS = [
  CompComponent,
  SchedPipe,
  SchedDirective,
];

const MODS = [
  CovFormMatModule.forRoot(),
  CovFormNebModule,
  CovTableMatModule.forRoot(),
  CovTableNebModule,
  DashboardModule,
  SchedModule
];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    WizardModule,
    VisualizationModule,
    UtilsModule,
    CompRoutingModule,
    ThemeModule,
    NbMenuModule,
    ...MODS
  ],
  exports: [
    ...COMPS,
    CovFormMatModule,
    CovFormNebModule,
    CovTableMatModule,
    CovTableNebModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NbCardModule,
    NbButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FullCalendarModule,
    MatDatepickerModule,
    NbCardModule,
    NbButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DashboardModule,
    SchedModule
  ]
})
export class CompModule { }
