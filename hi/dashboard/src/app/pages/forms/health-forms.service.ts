import { Injectable } from '@angular/core';
import { FormAComponent } from './form-a/form-a.component';
import { FormB1Component } from './form-b1/form-b1.component';
import { FormB2Component } from './form-b2/form-b2.component';
import { FormPOEComponent } from './form-poe/form-poe.component';
import { HealthFormsModule } from './forms.module';


@Injectable({
  providedIn: HealthFormsModule
})
export class HealthFormsService {

  constructor(
    private formA: FormAComponent,
    private formB1: FormB1Component,
    private formB2: FormB2Component,
    private formR1: FormPOEComponent
  ) { }

  get aForm(): FormAComponent { return this.formA; }

  get b1Form(): FormB1Component { return this.formB1; }

  get b2Form(): FormB2Component { return this.formB2; }

  get r1Form(): FormPOEComponent { return this.formR1; }
}
