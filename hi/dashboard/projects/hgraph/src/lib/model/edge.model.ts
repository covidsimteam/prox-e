import { IdentifiableObject } from './core.model';
import { Node } from './node.model';
import { ModelStream } from './model.stream';

export interface Edge extends IdentifiableObject {

  // NB: index is assigned internally by force, once initialized it is defined
  index?: number;
  nodes: Node[];
  sources?: IdentifiableObject[];
  sinks?: IdentifiableObject[];

}

export interface BinaryEdge extends IdentifiableObject {
  index?: number;
  from: string | Node;
  to: string | Node;
}

export interface EdgeStream<T extends Edge | BinaryEdge> {
  id: ModelStream;
  model: EdgeStream<T>;
  value: T;
}
