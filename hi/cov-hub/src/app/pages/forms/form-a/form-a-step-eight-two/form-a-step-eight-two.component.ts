import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-eight-two',
  templateUrl: './form-a-step-eight-two.component.html',
  styleUrls: ['./form-a-step-eight-two.component.scss']
})
export class FormAStepEightTwoComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
