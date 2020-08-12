import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Data, Network, Options } from 'vis-network';
import { Graph, GraphData } from './model/hgraph.model';


@Injectable({
  providedIn: 'root'
})
export class HgraphVisService {

  private networkOptions: Options;

  private network: Network;

  private graphData: GraphData;

  constructor() {
    this.networkOptions = {
      nodes: {
        shape: 'dot',
        size: 30,
        font: {
          size: 32
        },
        borderWidth: 2,
        shadow: true
      },
      edges: {
        width: 2,
        shadow: true,
        smooth: {
          enabled: true,
          roundness: 0.5,
          type: 'cubicBezier',
          forceDirection: 'none'
        }
      },
      interaction: {
        navigationButtons: true
      },
      physics: {
        forceAtlas2Based: {
          avoidOverlap: 0.25,
          gravitationalConstant: -95,
          centralGravity: 0.01,
          springLength: 100,
          springConstant: 0.19,
          damping: 0.5
        },
        minVelocity: 0.75,
        solver: 'forceAtlas2Based'
      }
    };
  }

  updateNetwork(element: HTMLElement, graphs: Graph[], options?: Options) {
    if (graphs.length < 1) {
      return;
    }
    graphs.forEach(g => {
      this.graphData.nodes.update(g.nodes);
      this.graphData.edges.update(g.edges);
    });
    if (!this.network) {
      this.network = new Network(
        element,
        this.graphData as Data,
        options || this.networkOptions
      );
    } else {
      this.network.setData(this.graphData as Data);
    }
    return this.network;
  }

  click(): Observable<any> {
    return fromEvent<Network>(this.network, 'click');
  }

  rightClick(): Observable<any> {
    return fromEvent<Network>(this.network, 'oncontext');
  }

  nodeHover(): Observable<any> {
    return fromEvent<Network>(this.network, 'hoverNode');
  }

  nodeSelect(): Observable<any> {
    return fromEvent<Network>(this.network, 'selectNode');
  }

  unselect() {
    if (!this.network) {
      return;
    }
    this.network.unselectAll();
  }

  enableAdd() {
    if (!this.network) {
      return;
    }
    this.network.addNodeMode();
    this.network.addEdgeMode();
  }

  disableAdd() {
    if (!this.network) {
      return;
    }
    this.network.disableEditMode();
  }

  fitToView() {
    if (!this.network) {
      return;
    }
    this.network.fit({ animation: true });
  }
}
