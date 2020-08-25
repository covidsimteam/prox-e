import { ThemeStream } from './../model/model.stream';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: ThemeStream;

  constructor() { }

  set theme(theme: ThemeStream) { this.themes = theme; }

  get theme(): ThemeStream { return this.themes; }
}
