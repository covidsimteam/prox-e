import { Component, OnInit } from '@angular/core';
import { Formeta } from '../../../@comp/cov-form/formeta.class';


@Component({
  selector: 'ngx-form-rdt',
  styleUrls: ['./form-rdt.component.scss'],
  templateUrl: './form-rdt.component.html',
})
export class FormRDTComponent extends Formeta implements OnInit {

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
