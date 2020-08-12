import { Injectable } from '@angular/core';
import { HoodieService } from './hoodie.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private hoodie: HoodieService) { }

  log(message: string) {
    this.hoodie.logger.warn(message);
  }
}
