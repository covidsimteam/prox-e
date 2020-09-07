import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-three',
  templateUrl: './form-a-step-three.component.html',
  styleUrls: ['./form-a-step-three.component.scss']
})
export class FormAStepThreeComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
