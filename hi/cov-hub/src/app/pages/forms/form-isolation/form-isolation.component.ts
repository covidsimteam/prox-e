import { Component, OnInit } from '@angular/core';
import { Formeta } from '../../../@comp/cov-form/formeta.class';

@Component({
  selector: 'ngx-form-isolation',
  styleUrls: ['./form-isolation.component.scss'],
  templateUrl: './form-isolation.component.html',
})
export class FormIsolationComponent extends Formeta implements OnInit {

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
