import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import {
  NbCardModule, NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { from } from 'rxjs';
import { AppConf, appConf, environment } from '../environments/environment';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authSetup, formSetup } from './app.conf';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin


export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: 'en' | 'np') {
    return from(
      import(
        `../assets/i18n/${lang}.json`
      ));
  }
}

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ReactiveFormsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NbCardModule,
    FullCalendarModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader,
      }
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup(authSetup)],
      forms: formSetup,
    }),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({
      autoFocus: true,
      closeOnBackdropClick: true,
      closeOnEsc: true,
      hasBackdrop: true,
      hasScroll: false
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: AppConf, useValue: appConf },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule {
}
