
import { Injectable } from '@angular/core';
import { PipeStream } from '../model/model.stream';

@Injectable({
  providedIn: 'root'
})
export class PipeService {

  private pipes: PipeStream;

  constructor() { }

  set pipe(pipe: PipeStream) { this.pipes = pipe; }

  get pipe(): PipeStream { return this.pipes; }
}
