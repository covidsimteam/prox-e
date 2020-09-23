import { Component, OnInit } from '@angular/core';
import { ContactTracingInfo } from '../../../@core/data/contact-tracing';
import { takeWhile } from 'rxjs/operators';
import { ContactTracingService } from '../contact-tracing.service';

@Component({
  selector: 'cov-contact-tracing',
  templateUrl: './contact-tracing.component.html',
  styleUrls: ['./contact-tracing.component.scss']
})
export class ContactTracingComponent implements OnInit {

  displayedColumns = [
    'contact', 'assignedTo', 'case', 'followup', 'followupDate1',
    'followupDate2', 'followupDate3', 'followupDate4', 'followupDate5'
  ];

  constructor(public contactTracingService: ContactTracingService) {}

  ngOnInit(): void {
  }

}
