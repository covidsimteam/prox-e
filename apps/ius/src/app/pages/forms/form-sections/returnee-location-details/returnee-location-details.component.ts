import { Component, OnInit } from '@angular/core';
import { COUNTRIES, NEARBY_COUNTRIES } from '../../../../@core/data/countries.geo';
import { PROVINCES } from '../../../../@core/data/province-districts.geo';

@Component({
  selector: 'cov-returnee-location-details',
  templateUrl: './returnee-location-details.component.html',
  styleUrls: ['./returnee-location-details.component.scss']
})
export class ReturneeLocationDetailsComponent implements OnInit {

  countries: string[];
  nearbyCountries: string[];
  nepalAndNeighbors: string[];

  provinces: string[];
  destinationOpts: string[] | undefined;
  addressOpts: string[] | undefined;

  permanentAddrProvince: string = '';
  finalDestProvince: string = '';
  districts = { destinationOpts: null, addressOpts: null};

  constructor() { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
    this.nearbyCountries = NEARBY_COUNTRIES;
    this.nepalAndNeighbors = ['Nepal', ...NEARBY_COUNTRIES];
    this.provinces = PROVINCES?.map(province => province.name);
  }

  changeAddrProvince(event: string) {
    this.permanentAddrProvince = event;
    this.districts.addressOpts = PROVINCES?.find(province => province.name === this.finalDestProvince)?.districts;
  }

  changeDestProvince(event: string) {
    this.finalDestProvince = event;
    this.districts.destinationOpts = PROVINCES?.find(province => province.name === this.finalDestProvince)?.districts;
  }

}
