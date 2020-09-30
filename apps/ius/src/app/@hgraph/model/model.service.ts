import { ModelStream } from './model.stream';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private modelStream: ModelStream
    ) { }

    set model(model: ModelStream) {
      this.modelStream = model;
    }

    get model(): ModelStream {
      return this.modelStream;
    }

}
