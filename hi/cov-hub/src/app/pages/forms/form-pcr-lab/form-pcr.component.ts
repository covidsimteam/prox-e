import { Component, OnInit } from '@angular/core';
import { Formeta } from '../formeta.class';

@Component({
  selector: 'ngx-form-pcr',
  styleUrls: ['./form-pcr.component.scss'],
  templateUrl: './form-pcr.component.html',
})
export class FormPCRComponent extends Formeta implements OnInit {

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
