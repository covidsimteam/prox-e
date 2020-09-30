import { IdentifiableObject, UntypedTuple } from './core.model';
import { ModelStream } from './model.stream';

export interface Node extends IdentifiableObject {
  index?: number;
  attributes?: UntypedTuple;

  x?: number;
  y?: number;

  vx?: number;
  vy?: number;

  fx?: number | null;
  fy?: number | null;

  updateNodes: (nodes: Node[]) => void;
}

export class Node implements Node {
  constructor(public id: string) { }
}

export interface NodeOrder {
  [nodeId: string]: {
    sources: number;
    targets: number;
  };
}

export interface NodeStream<T extends Node | NodeOrder> {
  id: ModelStream;
  model: NodeStream<T>;
  value: T;
}
