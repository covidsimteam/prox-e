import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';

@Component({
  selector: 'ngx-form-pcr',
  styleUrls: ['./form-b2.component.scss'],
  templateUrl: './form-b2.component.html',
})
export class FormB2Component implements OnInit {

  constructor(
    private fb: FormBuilder,
    private translator: TranslateService,
    public t: TranslationServiceEn
    ) {
    translator.use('en');
    // translator.get(t.fab.thahaChhaina)
    //   .pipe(take(1))
    //   .subscribe((chhaina: string) => {
    //     this.caseStatus = chhaina;
    //   });
  }

  ngOnInit() {}

}
