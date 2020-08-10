import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule } from '@nebular/theme';
  import { AppConf, appConf, environment } from '../environments/environment';
  import { CoreModule } from './@core/core.module';
  import { ThemeModule } from './@theme/theme.module';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { LoginModule } from './auth/login.module';
  import { ServiceWorkerModule } from '@angular/service-worker';

  import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';


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
      LoginModule,
      NgxEchartsModule,
      NbAuthModule.forRoot({
        strategies: [
          NbPasswordAuthStrategy.setup({
            name: 'username',
            baseEndpoint: '',
            login: {
              endpoint: '/auth/sign-in',
              method: 'post',
            },
            register: {
              endpoint: '/auth/sign-up',
              method: 'post',
            },
            logout: {
              endpoint: '/auth/sign-out',
              method: 'post',
            },
            requestPass: {
              endpoint: '/auth/request-pass',
              method: 'post',
            },
            resetPass: {
              endpoint: '/auth/reset-pass',
              method: 'post',
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
      providers: [{ provide: AppConf, useValue: appConf }],
    })
    export class AppModule {
    }
