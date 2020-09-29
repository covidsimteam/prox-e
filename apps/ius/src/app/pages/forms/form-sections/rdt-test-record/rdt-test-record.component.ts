import { Component } from '@angular/core';
import { TestRecord } from '../../../../@models/forms.model';

@Component({
  selector: 'cov-rdt-test-record',
  templateUrl: './rdt-test-record.component.html',
  styleUrls: ['./rdt-test-record.component.scss']
})
export class RdtTestRecordComponent {

  rdtRecords: Array<TestRecord> = [];

  addRDTRecord(_: boolean) {
    this.rdtRecords = [ ...this.rdtRecords, new TestRecord()];
  }
}
