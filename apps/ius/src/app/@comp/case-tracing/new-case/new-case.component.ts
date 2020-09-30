import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';

import { PROVINCES } from '../../../@core/data/province-districts.geo';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { DialogData } from '../case.model';

import { FormBuilder, FormGroup } from '@angular/forms';
import { makeNewCaseFormModel, NewCaseFormeta, makeNewCaseFormGroup } from './new-case.formeta';



const OnDestroySubject = Symbol('OnDestroySubject');

@Component({
  selector: 'cov-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.scss']
})
export class NewCaseComponent implements OnInit, OnDestroy {


  provinces: string[];
  destinationOpts: string[] | undefined;
  addressOpts: string[] | undefined;
  finalDestProvince: string = '';
  districts = { destinationOpts: null, addressOpts: null };

  saveToCache = true;
  newTask: NewCaseFormeta = makeNewCaseFormModel();

  private [OnDestroySubject] = new ReplaySubject<true>(1);

  showOtherOccupation = false;

  newCaseFormGroup: FormGroup;

  constructor(
    public t: TranslationServiceEn,
    private translator: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
      this.translator.use('en');
  }

  ngOnInit() {
    this.provinces = PROVINCES?.map(province => province.name);
    this.createNewCaseForm();
  }

  ngOnDestroy(): void {
    this[OnDestroySubject].next(true);
    this[OnDestroySubject].complete();
  }

  get onDestroy$() {
    return this[OnDestroySubject].asObservable();
  }

  addNewTask(_: any) {
    this.saveToCache = false;
  }

  changeDestProvince(event: string) {
    this.finalDestProvince = event;
    this.districts.destinationOpts = PROVINCES?.find(province => province.name === this.finalDestProvince)?.districts;
  }

  createNewCaseForm() {
    this.newCaseFormGroup = makeNewCaseFormGroup();
  }

}
