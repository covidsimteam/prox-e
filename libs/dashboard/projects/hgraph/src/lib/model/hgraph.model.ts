
import { BinaryEdge, Edge } from './edge.model';
import { Node, NodeOrder } from './node.model';
import { DataSet } from 'vis-network';
export class Graph {

  id: string;
  nodes: Node[] = [];
  edges: BinaryEdge[] = [];

  constructor(id: string, nodes: Node[], edges: BinaryEdge[]) {
    this.nodes = nodes;
    this.edges = edges;
    this.id = id;
    this.nodes.forEach(n => n.id = '' + this.id);
    this.edges.forEach(e => e.id = '' + this.id);
  }

  private edgeRefs(): { sources: string[], targets: string[] } {
    const sources: string[] = [];
    const targets: string[] = [];
    this.edges.forEach( (edge: BinaryEdge) => {
      sources.push(edge.from.toString());
      targets.push(edge.to.toString());
    });
    return { sources, targets };
  }

  private getNodeOrder(node: Node, sources: string[], targets: string[]) {
    return {
      [node.id]: {
        sources: sources.filter(s => s === node.id).length,
        targets: targets.filter(t => t === node.id).length
      }
    };
  }


  get edgeCounts(): NodeOrder[] {
    const edgeCounts: NodeOrder[] = [];
    const { sources, targets } = this.edgeRefs();
    this.nodes.forEach( (node: Node) => {
      edgeCounts.push(this.getNodeOrder(node, sources, targets));
    });
    return edgeCounts;
  }

  getEdgeCount(node: Node): NodeOrder {
    if (!node) {
      return { null: { sources: 0, targets: 0 }};
    }
    if (this.nodes.map(n => n.id).indexOf(node.id) < 0) {
      return {[node.id]: { sources: 0, targets: 0}};
    }
    const { sources, targets } = this.edgeRefs();
    return this.getNodeOrder(node, sources, targets);
  }

}

export class HGraph {
  id: string;
  nodes: Node[] = [];
  edges: Edge[] = [];
}

export class GraphData {
  constructor(
    public id: string,
    public nodes: DataSet<Node>,
    public edges: DataSet<BinaryEdge>) {}
}
