import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { Formeta } from '../../../@comp/cov-form/formeta.class';

@Component({
  selector: 'cov-form-b1',
  templateUrl: './form-b1.component.html',
  styleUrls: ['./form-b1.component.scss']
})
export class FormB1Component extends Formeta implements OnInit {

  constructor(
    private fb: FormBuilder,
    private translator: TranslateService,
    public t: TranslationServiceEn
  ) {
    super();
    translator.use('en');
    // translator.get(t.fab.thahaChhaina)
    //   .pipe(take(1))
    //   .subscribe((chhaina: string) => {
    //     this.caseStatus = chhaina;
    //   });
  }

  ngOnInit(): void {
  }

  formInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormChanges(): void {
    throw new Error('Method not implemented.');
  }

  saveChanges(): void {
    throw new Error('Method not implemented.');
  }

  loadChanges(): void {
    throw new Error('Method not implemented.');
  }
}
