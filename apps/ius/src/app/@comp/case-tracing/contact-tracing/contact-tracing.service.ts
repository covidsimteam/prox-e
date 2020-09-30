import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { ContactTracingInfo } from '../../../@core/data/contact-tracing';

@Injectable({
  providedIn: 'root'
})
export class ContactTracingService {
    private contactTracingInfoData: ContactTracingInfo[] = [
        {
            contact: 'Ram Thapa', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
        },
        {
            contact: 'Hari Bahadur', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
        },
        {
            contact: 'Hari Bahadur', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
        },
        {
            contact: 'Hari Bahadur', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
        },
        {
            contact: 'Hari Bahadur', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
            },
        {
            contact: 'Hari Bahadur', assignedTo: 'Mrs. Y', case: 'Ram Thapa', followup: 'Mr. Z',
            followupDate1: '2020-09-05', followupDate2: '2020-09-08', followupDate3: '2020-09-11',
            followupDate4: '2020-09-15', followupDate5: '2020-09-20'
        }
    ];

    getContactTracingData(): Observable<ContactTracingInfo[]> {
        return observableOf(this.contactTracingInfoData);
    }
}
