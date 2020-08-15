import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.scss']
})
export class FormAComponent implements OnInit, OnDestroy {

  aForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.aForm = this.fb.group({
      name: '',
    });

    this.aForm.valueChanges.subscribe(this.formValueChanged);
  }

  formValueChanged(formValue) {}

}
