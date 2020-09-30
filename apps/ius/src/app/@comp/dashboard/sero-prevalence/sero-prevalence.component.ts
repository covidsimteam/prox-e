import { Component, OnInit, Input } from '@angular/core';
import { BarChartDataSet } from '../../../@models/domain.model';

@Component({
  selector: 'cov-sero-prevalence',
  templateUrl: './sero-prevalence.component.html',
  styleUrls: ['./sero-prevalence.component.scss']
})
export class SeroPrevalenceComponent {

  @Input() districtPcrDataSets: BarChartDataSet[] = [{
    label: '',
    data: [],
    backgroundColor: ''
  }, {
    label: '',
    data: [],
    backgroundColor: ''
  }];

  @Input() seroOrRatio: string;

}
