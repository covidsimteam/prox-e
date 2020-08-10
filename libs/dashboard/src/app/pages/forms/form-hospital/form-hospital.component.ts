import { Component, OnInit } from '@angular/core';
import { COUNTRIES, NEARBY_COUNTRIES } from '../../../@core/data/countries.geo';
import { PROVINCES } from '../../../@core/data/province-districts.geo';

class TestRecord {
  date: Date;
  result: boolean;
  lab: string;
}

class SymptomRecord {
  date: Date;
  commonSymptoms: string[];
  otherSymptoms: string;
}

@Component({
  selector: 'ngx-form-hospital',
  styleUrls: ['./form-hospital.component.scss'],
  templateUrl: './form-hospital.component.html',
})
export class FormHospitalComponent implements OnInit {

  countries: string[];
  nearbyCountries: string[];

  provinces: string[];
  districts = { destinationOpts: [], addressOpts: []};

  permanentAddrProvince: string = null;
  finalDestProvince: string = null;

  addTransitCountries = false;

  pcrRecords: Array<TestRecord> = [];
  rdtRecords: Array<TestRecord> = [];
  symptomRecords: Array<SymptomRecord> = [];

  relationName = 'Father';
  status = 'Recovery';

  ngOnInit() {
    this.countries = COUNTRIES;
    this.nearbyCountries = NEARBY_COUNTRIES;
    this.provinces = PROVINCES.map(province => province.name);
  }

  changeAddrProvince(event: string) {
    this.permanentAddrProvince = event;
    this.districts.addressOpts = PROVINCES.find(province => province.name === this.permanentAddrProvince).districts;
  }

  changeDestProvince(event: string) {
    this.finalDestProvince = event;
    this.districts.destinationOpts = PROVINCES.find(province => province.name === this.finalDestProvince).districts;
  }

  changeRelationship(event: string) {
    this.relationName = event;
  }

  statusChange(event: string) {
    this.status = event;
  }

  addSymptomRecord(_: boolean) {
    this.symptomRecords = [ ...this.symptomRecords, new SymptomRecord()];
  }

  addPCRRecord(_: boolean) {
    this.pcrRecords = [ ...this.pcrRecords, new TestRecord()];
  }

  addRDTRecord(_: boolean) {
    this.rdtRecords = [ ...this.rdtRecords, new TestRecord()];
  }
}
