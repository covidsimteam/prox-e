import { Injectable } from '@angular/core';
import { PouchDBService } from '../../../../../src/app/services/db/pouchdb.service';
import { UserFacade } from '../../../../../src/app/facades/user.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(
    private pouchService: PouchDBService,
    private userService: UserFacade
  ) {}

  public checkUnique$(db: string, selectors: any, opts = {}): Observable<boolean> {
    return null;
  }

  public isUnique$(
    dbName: string,
    fieldName: string,
    ac: AbstractControl,
    {
      exceptions = [],
      opts = {},
      selectors = {},
      errorType = 'duplicate'
    } = { exceptions: [], opts: {}, selectors: {} }
  ): Observable<ValidationErrors | null> {
    return null;
  }

  checkUniqueResourceTitle$(ac: AbstractControl, id: string, privateFor: any = null) {
  }

  /**
   * Used in isUnique() to replace special characters inputted in fields
   * @param fieldInput inputted field values
   */
  private replaceSpecialChar(fieldInput) {
    return fieldInput.replace(/[-.*+?^${}()|[\]\\]/g, '\\$&');
  }

  public checkPassword$(ac: AbstractControl): Observable<boolean> {
    return null;
  }

  private roundTimestamp(timestamp: number) {
    return new Date(timestamp).setHours(0, 0, 0, 0);
  }

  public notDateInFuture$(ac: AbstractControl): Observable<ValidationErrors | null> {
    return null;
  }

  public notDateInPast$(ac: AbstractControl): Observable<ValidationErrors | null> {
    return null;
  }
}
