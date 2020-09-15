import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceEn } from '../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit {

  constructor(
    public t: TranslationServiceEn,
    private translator: TranslateService) {
      translator.use('en');
    }

  ngOnInit(): void {
  }

}
