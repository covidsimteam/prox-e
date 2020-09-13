import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import {
  NbDatepickerModule,
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
import { AuthInterceptor } from './@auth/interceptor/auth.interceptor';
import { ErrorInterceptor } from './@auth/interceptor/error.interceptor';
import { DashboardModule } from './@comp/dashboard/dashboard.module';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authSetup, formSetup } from './app.conf';
import { SelectionPipe } from './services/state/selection.pipe';
import { SelectionsDirective } from './services/state/selections.directive';


export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: 'en' | 'np') {
    return from(
      import(
        `../assets/i18n/${lang}.json`
      ));
  }
}
@NgModule({
  declarations: [AppComponent, SelectionPipe, SelectionsDirective],
  imports: [
    MatRadioModule,
    BrowserAnimationsModule,
    BrowserModule,
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
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader,
      }
    }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    DashboardModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup(authSetup)],
      forms: formSetup,
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
