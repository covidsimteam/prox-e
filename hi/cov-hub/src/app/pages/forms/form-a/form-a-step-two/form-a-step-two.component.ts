import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-two',
  templateUrl: './form-a-step-two.component.html',
  styleUrls: ['./form-a-step-two.component.scss']
})
export class FormAStepTwoComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}
