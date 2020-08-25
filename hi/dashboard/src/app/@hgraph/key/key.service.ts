import { Injectable } from '@angular/core';
import { EntityService, ValueStream } from '../entity/entity.service';
import { IdStream } from '../model/model.stream';

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
}
