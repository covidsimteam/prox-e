import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../@core/utils';
import { Graph, HGraph } from '../model/hgraph.model';
import { LedgerService } from '../store/ledger/ledger.service';

export type TruthStream = Observable<HGraph | Graph>;
@Injectable({
  providedIn: 'root'
})
export class SsotService {

  constructor(
    protected state: StateService,
    protected store: LedgerService
    ) { }
}
