
import { Injectable } from '@angular/core';
import { EntityService, ValueStream } from '../entity/entity.service';
import { IdentityService } from '../identity/identity.service';
import { IdStream } from '../model/model.stream';

export type ConceptStream = IdStream;
@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(
    private ids: IdentityService,
    private entities: EntityService
  ) { }

  get concept(): ConceptStream {
    return this.ids.id;
  }

  set concept(id: ConceptStream) {
    this.ids.id = id;
  }

  get value(): ValueStream {
    return this.entities.val;
  }

  set value(value: ValueStream) {
    this.entities.val = value;
  }

}
