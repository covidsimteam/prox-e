import { Component, OnInit } from '@angular/core';
import { COUNTRIES, NEARBY_COUNTRIES } from '../../../../@core/data/countries.geo';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';

@Component({
  selector: 'cov-form-a-step-one',
  templateUrl: './form-a-step-one.component.html',
  styleUrls: ['./form-a-step-one.component.scss']
})
export class FormAStepOneComponent implements OnInit {

  countries: string[];

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
  }

changeCountry(event){

}


}
