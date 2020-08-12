
import { Injectable } from '@angular/core';
import { IdStream } from '../model/model.stream';
import { IdentityService } from '../identity/identity.service';
import { EntityService, EntityStream, ValueStream } from '../entity/entity.service';

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

  get entity(): EntityStream {
    return this.entities.id;
  }


  set entity(entity: EntityStream) {
    this.entities.id = entity;
  }

  get value(): ValueStream {
    return this.entities.val;
  }

  set value(value: ValueStream) {
    this.entities.val = value;
  }

}
