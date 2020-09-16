import { Component, OnInit } from '@angular/core';
import { ContactTracingInfo, ContactTracingData } from '../../@core/data/contact-tracing';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'cov-contact-tracing',
  templateUrl: './contact-tracing.component.html',
  styleUrls: ['./contact-tracing.component.scss']
})
export class ContactTracingComponent implements OnInit {

  private alive = true;
  contactTracingData: ContactTracingInfo[];

  displayedColumns = [
    'contact', 'assignedTo', 'case', 'followup', 'followupDate1', 
    'followupDate2', 'followupDate3', 'followupDate4', 'followupDate5'
  ];
  
  constructor(private contactTracingService: ContactTracingData) {
    this.contactTracingService.getContactTracingData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.contactTracingData = data
      });
  }

  ngOnInit(): void {
  }
  
}