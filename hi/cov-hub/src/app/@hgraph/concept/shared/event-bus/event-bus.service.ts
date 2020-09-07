import { Injectable } from '@angular/core';
import { AllFromNowService } from './all-from-now.service';
import { AllSoFarService } from './all-so-far.service';
import { LastOneAndAllAfterService } from './last-one-and-all-after.service';
import { LastOneOnlyService } from './last-one-only.service';

@Injectable({
  providedIn: 'root'
})
export class EventBusService<E> {

  constructor(
    public allFromNow: AllFromNowService,
    public allSoFar: AllSoFarService,
    public lastOneOnly: LastOneOnlyService,
    public fromlastOne: LastOneAndAllAfterService<E>
    ) { }
}
