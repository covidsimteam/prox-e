import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy } from '@nebular/auth';
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
import { DashboardComponent } from './services/dashboard/dashboard.component';
import { AuthGuard } from './services/guards/auth.guard';
import { HomePageComponent } from './services/dashboard/home-page-modules/home-page/home-page.component';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};
@NgModule({
  declarations: [AppComponent, DashboardComponent, HomePageComponent],
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
            class: NbAuthSimpleToken,
          },
          baseEndpoint: '/auth/',
          login: {
            endpoint: '/sign-in',
            method: 'post',
            redirect: {
              success: '/hub/',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          register: {
            endpoint: '/sign-up',
            method: 'post',
            redirect: {
              success: '/welcome/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
          },
          logout: {
            endpoint: '/sign-out',
            method: 'post',
            redirect: {
              success: '/auth/sign-in/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
          },
          requestPass: {
            endpoint: '/request-pass',
            method: 'post',
            redirect: {
              success: '/check-email/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
          },
          resetPass: {
            endpoint: '/reset-pass',
            method: 'post',
            redirect: {
              success: '/reset-success/',
              failure: null,
            },
            resetPasswordTokenKey: 'covid-reset',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
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
