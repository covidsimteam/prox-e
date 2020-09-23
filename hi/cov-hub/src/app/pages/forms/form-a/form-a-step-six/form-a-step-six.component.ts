import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-six',
  templateUrl: './form-a-step-six.component.html',
  styleUrls: ['./form-a-step-six.component.scss']
})
export class FormAStepSixComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }


}
