import { EventEmitter } from '@angular/core';
import { Doc, ExistingDoc } from '../../models/domain.model';

export interface DBService {
  instance(): any;
  remoteSync?(): EventEmitter<any>;
  getChangeListener?(): EventEmitter<any>;
  get(id: string): Promise<any>;
  create?(doc: ExistingDoc): Promise<any>;
  createUsingPost?(doc: Doc): Promise<any>;
  update?(doc: ExistingDoc): Promise<any>;
  delete?(doc: ExistingDoc): Promise<any>;
}
