import { Injectable } from '@angular/core';
import { NbJSThemesRegistry, NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HubUser } from '../../@models/user.model';
import { AuthSetting } from '../access/auth-settings.model';
import { AuthService } from '../core/auth.service';


@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(
    protected auth: AuthService,
    protected jsThemes: NbJSThemesRegistry,
    protected themeService: NbThemeService) { }

  private getPrefs(user: HubUser): AuthSetting {
    const authSet: AuthSetting = new AuthSetting();
    // TODO get preferences from roleAuths array in role service
    return authSet;
  }

  initCurrentUser() {
    this.auth.userObs
      .pipe(map((user: HubUser) => {
        const userTheme = this.getPrefs(user)?.user?.roles['theme'] || 'default';
        if (user && userTheme) {
          this.themeService.changeTheme(userTheme);
        }
      }));
    }
  }

