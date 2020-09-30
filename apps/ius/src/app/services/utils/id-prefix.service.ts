import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdPrefixService {

  private idArr: string[] = [];
  constructor() { }

  static toColonHyphen(id: string): string {
    return id.replace('_', ':').toString();
  }

  static toHyphenOnly(id: string): string {
    return id.replace(':', '_').toString();
  }



  set id(id: string) {
    this.idArr.push(id);
  }

  get id(): string {
    return IdPrefixService.toColonHyphen(this.idArr[0]);
  }

  getIds(): string[] {
    return this.idArr;
  }

  resolveIdPrefixes(ids: string[]): string[] {
    return ids.map(id => IdPrefixService.toColonHyphen(id));
  }

}
