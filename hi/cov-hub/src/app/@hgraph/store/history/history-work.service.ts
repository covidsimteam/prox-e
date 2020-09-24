import { Injectable } from '@angular/core';
import { AuthService } from '../../@auth/core/auth.service';

import { SideEffect, Auth, Form } from '../impure/effect.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { LedgerService } from './ledger.service';


@Injectable({
  providedIn: 'root'
})
export class AuthHistory {

  protected state = new BehaviorSubject<Auth>(null);

  constructor(
    protected ledger: LedgerService
  ) {}

  onLogin(e: SideEffect<Auth>) {
    e.action();
  }

  onRoleChange(_: SideEffect<Auth>) {}

  onLogout(_: SideEffect<Auth>) {}
}

@Injectable({
  providedIn: 'root'
})
export class FormHistory {

  onFormSelect(_: SideEffect<Form>) {}

  onFormInput(_: SideEffect<Form>) {}

  onFormComplete(_: SideEffect<Form>) {}

}

@Injectable({
  providedIn: 'root'
})
export class FileHistory {

  onFileSelect(_: SideEffect<File>) {}

  onFileReview(_: SideEffect<File>) {}

  onFileUpload(_: SideEffect<File>) {}

}


@Injectable({
  providedIn: 'root'
})
export class HistoryWorkService {

  constructor(
    protected authService: AuthService,
    protected auth: AuthHistory,
    protected form: FormHistory,
    protected file: FileHistory) { }
}
