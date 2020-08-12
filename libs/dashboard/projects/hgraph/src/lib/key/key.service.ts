import { Injectable } from '@angular/core';
import { IdStream } from '../model/model.stream';
import { EntityService, ValueStream } from '../entity/entity.service';

export type KeyStream = IdStream;
@Injectable({
  providedIn: 'root'
})
export class KeyService {

  constructor(
    private entityService: EntityService) { }

  get value(): ValueStream {
    return this.entityService.val;
  }

  set value(values: ValueStream) {
    this.entityService.val = values;
  }

  get id(): KeyStream {
    return this.entityService.id;
  }

  set id(entityIds: KeyStream) {
    this.entityService.id = entityIds;
  }
}
