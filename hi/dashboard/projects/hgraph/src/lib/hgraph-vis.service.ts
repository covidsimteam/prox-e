import { Injectable } from '@angular/core';
import { Graph, GraphData } from './model/hgraph.model';

@Injectable({
  providedIn: 'root'
})
export class HgraphVisService {

  private graphData: GraphData;

  constructor() {
  }

  get graphDetail(): GraphData { return this.graphData; }

  updateNetwork(element: HTMLElement, graphs: Graph[]) {
    if (graphs.length < 1) {
      return;
    }
    graphs.forEach(g => {
      this.graphData.nodes.updateNodes(g.nodes);
      this.graphData.edges.updateEdges(g.edges);
    });
  }
}
