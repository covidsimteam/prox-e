import { Injectable } from '@angular/core';
import { LedgerService } from '../../@hgraph/store/ledger/ledger.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilesService {

  file = new BehaviorSubject<string | RegExp>('');

  constructor(
    protected ledger: LedgerService
  ) {}

  forFileSelect(file: string | RegExp, payload: string) {
    // TODO selection related functions go here
    // this.ledger.update(file, payload);
  }

  forFileReview(file: string | RegExp) {}

  forFileUpload(file: string | RegExp) {}

}
