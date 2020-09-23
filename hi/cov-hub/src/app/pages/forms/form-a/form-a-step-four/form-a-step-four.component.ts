import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-four',
  templateUrl: './form-a-step-four.component.html',
  styleUrls: ['./form-a-step-four.component.scss']
})
export class FormAStepFourComponent implements OnInit {

  caseStatus: string;

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

  changeCaseStatus(event: any) {
    this.caseStatus = event as string;
  }


}
