import { Component, OnInit } from '@angular/core';
import { COUNTRIES , NEARBY_COUNTRIES } from '../../../../@core/data/countries.geo';
import { TranslationServiceEn } from '../../../../services/i18n/translation-gen.service';
import { PROVINCES} from '../../../../@core/data/province-districts.geo';
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


  changeCountry(event){

  }


  provinceChanged(event){

    var prov = PROVINCES.filter(obj => {
      return obj.name === event;
    });

    console.log(JSON.stringify(prov));

    this.districts = prov[0].districts;
  }


  districtChanged(event){

  }


  loadProvincesForCountry(countryName:string){

    //this.countryProvinces = country.states('US');
    //input country -> country ko province haru

  }

}
