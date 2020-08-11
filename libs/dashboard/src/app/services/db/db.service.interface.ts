import { EventEmitter } from '@angular/core';
import { Doc, ExistingDoc } from '../../models/domain.model';

export interface DBService {
  instance(): PouchDB.Database<{}> | undefined;
  remoteSync?(): EventEmitter<any> | undefined;
  getChangeListener?(): EventEmitter<any> | undefined;
  get(id: string): Promise<any> | undefined;
  create?(doc: ExistingDoc): Promise<any> | undefined;
  createUsingPost?(doc: Doc): Promise<any> | undefined;
  update?(doc: ExistingDoc): Promise<any> | undefined;
  delete?(doc: ExistingDoc): Promise<any> | undefined;
}
