import { EdgeStream, Edge } from './edge.model';
import { NodeStream, Node } from './node.model';
import { Observable } from 'rxjs';

export interface IdStream {
  id: Observable<string | unknown>;
}

export interface PaymentStream<T> { id: Identity<T>; }

export type Identity<T> = Observable<IdStream | ModelStream | T>;

export type ModelStream = IdStream | EdgeStream<Edge> | NodeStream<Node> ;

export type KDBModelStream<T> = Observable<ModelStream | IdStream | [ModelStream, T]>;

export type KDBStream<T> = KDBModelStream<T | KDBModelStream<ModelStream>>;

export type UserStream = KDBStream<IdStream>;

export type PipeStream = KDBStream<UserStream>;

export type CosmosStream = KDBStream<PipeStream>;

export type ThemeStream = KDBStream<CosmosStream>;

export type AuthStream = KDBStream<ThemeStream>;
