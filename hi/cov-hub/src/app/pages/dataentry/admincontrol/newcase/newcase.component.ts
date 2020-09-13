import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.scss']
})
export class NewcaseComponent implements OnInit {
  showPassword:boolean = false;
  constructor(
    public t: TranslationServiceEn,
    private translator: TranslateService) { 
      translator.use('en');
    }

  ngOnInit(): void {
  }

  getInputType() {
    if (this.showPassword) {
      return 'text'
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
