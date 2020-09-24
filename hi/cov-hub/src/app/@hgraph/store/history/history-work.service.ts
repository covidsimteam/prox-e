import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../../@auth/core/auth.service';
import { Step } from '../covhub/steps.model';
import { LedgerService } from '../ledger/ledger.service';
import { Auth, File, Form, SideEffect } from '../state/impure/effect.model';
import { defaultConf } from '../store.conf';


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
export class HistoryWorkService extends ObservableStore<Step> {

  constructor(
    protected authService: AuthService,
    protected auth: AuthHistory,
    protected form: FormHistory,
    protected file: FileHistory) {
      super(defaultConf);
    }
}
