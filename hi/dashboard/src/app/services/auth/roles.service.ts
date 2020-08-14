import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roleArr: string[] = [''];
  private roleSub: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.roleArr);

  private user: string;
  private pass: string;

  constructor() {}

  public get username(): string {
    return this.user;
  }

  public set username(v: string) {
    this.user = v;
  }

  public get password(): string {
    return this.pass;
  }

  public set password(v: string) {
    this.pass = v;
  }

  addRole(role: string) {
    this.roleArr.push(role);
    this.roleSub.next([role]);
  }

  get roles(): string[] {
    return this.roleArr.slice();
  }

  get roleObs(): Observable<string[]> {
    return from([this.roleArr]);
  }

  set roles(roles: string[]) {
    this.roleArr = roles;
  }

  get roleStream(): Observable<string[]> {
    return this.roleSub.asObservable();
  }

  isAdmin(): boolean {
    return this.roleArr
      .some(role => role === 'lalitpur:lab_admin' || role === 'lalitpur:municipality_admin');
  }

  isAuthenticated(): boolean {
    return !!this.roleArr.length;
  }

  roleExists(role: string): boolean {
    return this.roleArr.find((rol: string) => role === rol)?.length !== 0;
  }

  removeRole(role: string) {
    this.roleArr = this.roleArr.filter(rol => rol !== role);
    this.roleSub
  }

}
