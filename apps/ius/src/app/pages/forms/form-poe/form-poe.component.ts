import { Component, OnInit } from '@angular/core';
import { Formeta } from '../../../@comp/cov-form/formeta.class';

@Component({
  selector: 'cov-form-poe',
  styleUrls: ['./form-poe.component.scss'],
  templateUrl: './form-poe.component.html',
})
export class FormPOEComponent extends Formeta implements OnInit {

  ngOnInit() { }

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
