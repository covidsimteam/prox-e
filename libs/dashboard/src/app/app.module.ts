import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppConf, appConf, environment } from '../environments/environment';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/guards/auth.guard';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    ReactiveFormsModule,
    NgxEchartsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            key: 'token',
            class: NbAuthJWTToken,
          },
          baseEndpoint: '',
          login: {
            endpoint: '/auth/sign-in',
            method: 'post',
            redirect: {
              success: '/hub/',
              failure: null,
            },
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
            redirect: {
              success: '/welcome/',
              failure: null,
            },
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
            redirect: {
              success: '/auth/sign-in/',
              failure: null,
            },
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
            redirect: {
              success: '/check-email/',
              failure: null,
            },
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
            redirect: {
              success: '/reset-success/',
              failure: null,
            },
          },
        })],
        forms: {
          login: formSetting,
          register: formSetting,
          requestPassword: formSetting,
          resetPassword: formSetting,
          logout: {
            redirectDelay: 0,
          },
        },
      }),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    bootstrap: [AppComponent],
    providers: [
      { provide: AppConf, useValue: appConf },
      AuthGuard
    ],
  })
  export class AppModule {
  }
