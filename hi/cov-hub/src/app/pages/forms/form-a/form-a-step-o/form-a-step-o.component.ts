import { Component, OnInit } from '@angular/core';

import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-o',
  templateUrl: './form-a-step-o.component.html',
  styleUrls: ['./form-a-step-o.component.scss']
})
export class FormAStepOComponent implements OnInit {

  caseStatus: string;

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

  changeCaseStatus(event: any) {
    this.caseStatus = event as string;
  }
}
