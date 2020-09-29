import { Component, OnInit } from '@angular/core';
import { Formeta } from '../../../@comp/cov-form/formeta.class';

@Component({
  selector: 'cov-form-qf',
  styleUrls: ['./form-qf.component.scss'],
  templateUrl: './form-qf.component.html',
})
export class FormQFComponent extends Formeta implements OnInit {

  ngOnInit() {}

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
