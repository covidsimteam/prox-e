import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-one-a',
  templateUrl: './form-a-step-one-a.component.html',
  styleUrls: ['./form-a-step-one-a.component.scss']
})
export class FormAStepOneAComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
