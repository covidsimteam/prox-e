import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-one-b',
  templateUrl: './form-a-step-one-b.component.html',
  styleUrls: ['./form-a-step-one-b.component.scss']
})
export class FormAStepOneBComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
