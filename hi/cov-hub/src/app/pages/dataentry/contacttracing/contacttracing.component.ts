import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cov-contacttracing',
  templateUrl: './contacttracing.component.html',
  styleUrls: ['./contacttracing.component.scss']
})
export class ContacttracingComponent implements OnInit {
  displayedColumns: string[] = [
    'contact', 'assignedTo', 'case', 'followup', 'followupDate1', 
    'followupDate2', 'followupDate3', 'followupDate4', 'followupDate5'
  ];

  dataSource = TRACING_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface TracingTask {
  contact: string;
  assignedTo: string;
  case: string;
  followup: string;
  followupDate1: string;
  followupDate2: string;
  followupDate3: string;
  followupDate4: string;
  followupDate5: string;
}

/* Static data */
const TRACING_DATA: TracingTask[] = [
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  },
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  },
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  },
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  },
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  },
  {
    contact: "Hari Bahadur", assignedTo: "Mrs. Y", case: "Ram Thapa", followup: "Mr. Z",
    followupDate1: "2020-09-05", followupDate2: "2020-09-08", followupDate3: "2020-09-11",
    followupDate4: "2020-09-15", followupDate5: "2020-09-20"
  }
]

