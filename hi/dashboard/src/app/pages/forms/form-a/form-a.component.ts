import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.scss']
})
export class FormAComponent implements OnInit, OnDestroy {

  aForm: FormGroup;
  // TODO put all the translatable labels in the en.json file for now
  constructor(
    private fb: FormBuilder,
    translator: TranslateService,
    ) {
    translator.use('np');
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.aForm = this.fb.group({
      name: '',
    });

    this.aForm.valueChanges.subscribe(this.formValueChanged);
  }

  formValueChanged(formValue: any) {}

}
