import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { Formeta } from '../formeta.class';

@Component({
  selector: 'ngx-form-pcr',
  styleUrls: ['./form-b2.component.scss'],
  templateUrl: './form-b2.component.html',
})
export class FormB2Component extends Formeta implements OnInit {

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

  ngOnInit() { }

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
