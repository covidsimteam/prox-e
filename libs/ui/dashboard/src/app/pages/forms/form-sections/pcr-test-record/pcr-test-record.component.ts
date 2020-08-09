import { Component, OnInit } from '@angular/core';
import { TestRecord } from '../../../../models/forms.model';

@Component({
  selector: 'ngx-pcr-test-record',
  templateUrl: './pcr-test-record.component.html',
  styleUrls: ['./pcr-test-record.component.scss']
})
export class PcrTestRecordComponent {

  pcrRecords: Array<TestRecord> = [];

  addPCRRecord(_: boolean) {
    this.pcrRecords = [ ...this.pcrRecords, new TestRecord()];
  }
}
