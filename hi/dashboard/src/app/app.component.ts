/**
 * @license
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './@auth/core/auth.service';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private authService: AuthService,
    private translator: TranslateService
    ) {
      translator.setDefaultLang('en');
      translator.addLangs(['np']);
    }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.authService.publicLogin(); // login as a public user, read only & only for public buckets
  }

  useLanguage(lang: string) {
    this.translator.use(lang);
  }
}
