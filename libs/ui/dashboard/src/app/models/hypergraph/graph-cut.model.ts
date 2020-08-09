import { IdentifiableObject, UntypedTuple } from './../../../../projects/hgraph/src/lib/model/core.model';
import { DataSet } from 'vis-data';

export interface Node extends IdentifiableObject {
  attributes?: UntypedTuple;
}

export interface BinaryEdge extends IdentifiableObject {
  from: string | Node;
  to: string | Node;
}

export interface GraphCut extends IdentifiableObject {
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;
}

// This is not a violation of the Liskov Substitution Principle; this is actually how I define edges in my hypergraphs.
export interface Edge extends IdentifiableObject, Node {
  nodes: Node[];
  sources?: IdentifiableObject[];
  sinks?: IdentifiableObject[];
}

// There may be other node-like or edge-like structures in the hypergraphs.
export interface GraphObject extends IdentifiableObject, Node {}

