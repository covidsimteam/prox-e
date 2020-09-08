import { Injectable } from '@angular/core';
import { BinaryEdge, Edge } from './model/edge.model';
import { Graph, HGraph } from './model/hgraph.model';
import { Node } from './model/node.model';


@Injectable({
  providedIn: 'root',
})
export class HgraphService {
  private nodeArr: Node[];
  private edgeArr: BinaryEdge[];
  private hedgeArr: Edge[];

  constructor(private idStr: string) { }

  /**
   * Gets node if it exists in graph, else returns
   * new node instance from given serialized node instance
   * or new node instance with the given serialized string id
   * @param node: Node
   * @returns node if exists else returns an instance with the id from input
   */
  getNodeInGraph(node: string | Partial<Node>): Node {
    return this.nodes.find((n) => n.id === node);
  }

  /**
   * Gets edge referencing the existing nodes of the graph
   * @param e : Edge with source NodeRef and target NodeRef
   * @returns edge connecting graph's existing nodes
   */
  getEdgeInGraph(e: Partial<BinaryEdge>): BinaryEdge {
    return {
      id: e.id,
      label: e.label,
      from: e.from,
      to: e.to,
      nodes: e.nodes,
      updateEdges: (_: BinaryEdge[]) => e,
    };
  }

  updateNodes(nodes: Node[], remove: boolean): Node[] {
    const inGraphNodes = nodes.map((n) => this.getNodeInGraph(n.id));
    if (!remove) {
      this.nodes.push(...inGraphNodes);
    } else {
      const inGraphNodeIds = inGraphNodes.map((n) => n.id);
      this.nodes = this.nodes.filter((n) => !inGraphNodeIds.includes(n.id));
    }
    return this.nodes;
  }

  updateEdges(edges: BinaryEdge[], remove: boolean): BinaryEdge[] {
    const inGraphEdges = edges.map((e) => this.getEdgeInGraph(e));
    if (!remove) {
      this.edges.push(...inGraphEdges);
    } else {
      this.edges = this.edges.filter(
        (se) =>
          !inGraphEdges
            .map((ie) => ({ from: ie.from, to: ie.to }))
            .includes({ from: se.from, to: se.to })
      );
    }
    return this.edges;
  }

  get id(): string {
    return this.idStr;
  }

  get nodes(): Node[] {
    return this.nodeArr.length ? this.nodeArr.slice() : [];
  }

  set nodes(nodes: Node[]) {
    this.nodes = nodes || this.nodes;
  }

  set hedges(edges: Edge[]) {
    this.hedges = edges || this.hedges;
  }

  get hedges(): Edge[] {
    return this.hedgeArr.length ? this.hedgeArr.slice() : [];
  }

  set edges(edges: BinaryEdge[]) {
    this.edges = edges || this.edges;
  }

  get edges(): BinaryEdge[] {
    return this.edgeArr.length ? this.edgeArr.slice() : [];
  }

  get graph(): Graph {
    return new Graph(this.idStr, this.nodeArr, this.edgeArr);
  }

  get hgraph(): HGraph {
    const hgraph = new HGraph();
    hgraph.id = this.id;
    hgraph.edges = this.hedges;
    hgraph.nodes = this.nodes;
    return hgraph;
  }

}
