import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-nine',
  templateUrl: './form-a-step-nine.component.html',
  styleUrls: ['./form-a-step-nine.component.scss']
})
export class FormAStepNineComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }


}
