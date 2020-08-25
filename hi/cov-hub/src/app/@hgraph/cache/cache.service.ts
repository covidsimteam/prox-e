import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type CacheStream = Observable<Array<Object>>;

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private caches: CacheStream;

  constructor() { }

  set cache(cache: CacheStream) { this.caches = cache; }

  get cache(): CacheStream { return this.caches; }
}
