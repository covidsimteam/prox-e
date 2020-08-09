import { Component } from '@angular/core';
import { SymptomRecord } from '../../../../models/forms.model';

@Component({
  selector: 'ngx-symptom-record',
  templateUrl: './symptom-record.component.html',
  styleUrls: ['./symptom-record.component.scss']
})
export class SymptomRecordComponent {

  symptomRecords: Array<SymptomRecord> = [];

  addSymptomRecord(_: boolean) {
    this.symptomRecords = [ ...this.symptomRecords, new SymptomRecord()];
  }
}
