import { Injectable } from '@angular/core';

// TODO

@Injectable({
  providedIn: 'root',
})
export class LoggingService {

  constructor() { }

  error(err: string) {
    console.error(JSON.stringify(err));
  }
}
