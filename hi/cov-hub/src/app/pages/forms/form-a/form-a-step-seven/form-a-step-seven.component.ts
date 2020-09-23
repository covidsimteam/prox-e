import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-seven',
  templateUrl: './form-a-step-seven.component.html',
  styleUrls: ['./form-a-step-seven.component.scss']
})
export class FormAStepSevenComponent implements OnInit {


  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
