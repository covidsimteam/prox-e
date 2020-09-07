import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, scan } from 'rxjs/operators';
import { IdPrefixService } from '../utils/id-prefix.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthsService {

  private readonly roleArr: unknown[] = [''];

  constructor() {}

  addRole(v: string) {
    this.roleArr.push(v);
  }

  addRoles(roles: string[]) {
    roles.forEach((role: string) => this.addRole(IdPrefixService.toColonHyphen(role)));
  }

  getDashboardAuths(): Observable<unknown> {
    return from(this.roleArr)
    .pipe(
      mergeMap((p: unknown) => from(p as any)),
      scan((acc, curr) => {
        if (acc?.toString() !== acc) {
          (acc as any[]).push(curr);
        }
        return (acc as any[]).slice();
      }));
    }

    getRoles(): string[] {
      return this.roleArr?.toString().split('');
    }

  }
