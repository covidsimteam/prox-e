import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-municipality',
  styleUrls: ['./form-municipality.component.scss'],
  templateUrl: './form-municipality.component.html',
})
export class FormMunicipalityComponent {
  quarantined: boolean = false;
  tested: boolean = false;

  quarantineToggle(checked: boolean) {
    this.quarantined = checked;
  }

  testedToggle(checked: boolean) {
    this.tested = checked;
  }
}
