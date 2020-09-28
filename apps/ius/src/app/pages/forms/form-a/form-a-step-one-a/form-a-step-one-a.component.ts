import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../../../../@core/data/countries.geo';
import { PROVINCES } from '../../../../@core/data/province-districts.geo';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';
@Component({
  selector: 'cov-form-a-step-one-a',
  templateUrl: './form-a-step-one-a.component.html',
  styleUrls: ['./form-a-step-one-a.component.scss']
})
export class FormAStepOneAComponent implements OnInit {

  countries: string[];
  countryProvinces: string[];
  districts: any [];

  constructor(public t: TranslationServiceEn) { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    this.countryProvinces = PROVINCES?.map(province => province.name);
  }


  changeCountry(event: any) {
    // TODO check and remove
  }


  provinceChanged(event: any) {

    const prov = PROVINCES.filter(obj => {
      return obj.name === event;
    });

    this.districts = prov[0].districts;
  }


  districtChanged(event: any) {
    // TODO check and remove
  }


  loadProvincesForCountry(countryName: string) {
    // TODO check and remove
  }

}
