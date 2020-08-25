import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HgraphService } from '../hgraph.service';
import { HGraph, Graph } from '../model/hgraph.model';

export type TruthStream = Observable<HGraph | Graph>;
@Injectable({
  providedIn: 'root'
})
export class SsotService {

  constructor(
    private hgraphs: HgraphService
    ) { }

    get graph(): Graph {
        return this.hgraphs.graph;
    }

    get hgraph(): HGraph {
      return this.hgraphs.hgraph;
    }

    get truth(): TruthStream {
      return of(this.hgraphs.graph, this.hgraphs.hgraph);
    }
}
