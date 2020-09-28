import { Component } from '@angular/core';
import { Formeta } from '../../../@comp/cov-form/formeta.class';

@Component({
  selector: 'ngx-form-municipality',
  styleUrls: ['./form-municipality.component.scss'],
  templateUrl: './form-municipality.component.html',
})
export class FormMunicipalityComponent extends Formeta {
  quarantined: boolean = false;
  tested: boolean = false;

  quarantineToggle(checked: boolean) {
    this.quarantined = checked;
  }

  testedToggle(checked: boolean) {
    this.tested = checked;
  }

  formInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormChanges(): void {
    throw new Error('Method not implemented.');
  }

  saveChanges(): void {
    throw new Error('Method not implemented.');
  }

  loadChanges(): void {
    throw new Error('Method not implemented.');
  }
}
