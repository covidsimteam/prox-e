import { Component, OnInit } from '@angular/core';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';



@Component({
  selector: 'cov-form-a-step-five',
  templateUrl: './form-a-step-five.component.html',
  styleUrls: ['./form-a-step-five.component.scss']
})
export class FormAStepFiveComponent implements OnInit {

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
  }

}


