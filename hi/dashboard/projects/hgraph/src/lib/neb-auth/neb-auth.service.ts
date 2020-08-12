import { Injectable } from '@angular/core';
import { NbAuthResult, NbAuthService, NbAuthStrategies, NbTokenService } from '@nebular/auth';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NebAuthService extends NbAuthService {
  private readonly EmailStrategy: string = 'email';
  constructor(
    private nbAuthService: NbAuthService,
    private nbTokenService: NbTokenService,
    private nbStrategies: NbAuthStrategies) {
    super(nbTokenService, nbStrategies);
  }

  get strategies(): NbAuthStrategies { return this.nbStrategies; }
  get tokens(): NbTokenService { return this.nbTokenService; }

  authenticateHelp(email: string, password: string): Observable<NbAuthResult> {
    const auth = this.isAuthenticatedOrRefresh();
    auth.subscribe((truth: boolean) => {
      if (truth) {
        this.logout(this.EmailStrategy);
        return EMPTY;
    });
    return this.nbAuthService.authenticate(this.EmailStrategy, { email, password });
  }

  requestPasswordHelp(email: string): Observable<NbAuthResult> {
    return this.requestPassword(this.EmailStrategy, { email });
  }

  resetPasswordHelp(newPassword: string): Observable<NbAuthResult> {
    return this.resetPassword(this.EmailStrategy, { newPassword });
  }

  registerHelp(email: string, password: string, name?: string): Observable<NbAuthResult> {
    return this.register(this.EmailStrategy, { email, password, name });
  }

  signOutHelp(): Observable<NbAuthResult> {
    return this.logout(this.EmailStrategy);
  }

}
