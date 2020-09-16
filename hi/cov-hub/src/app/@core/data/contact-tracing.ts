import { Observable } from 'rxjs';

export interface ContactTracingInfo {
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

export abstract class ContactTracingData {
    abstract getContactTracingData(): Observable<ContactTracingInfo[]>;
}