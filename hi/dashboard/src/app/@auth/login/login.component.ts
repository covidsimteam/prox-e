import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { BasicAuth } from '../../models/auth-response.model';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  private returnUrl: string = '/hub/home';
  constructor(
    private authService: AuthService,
    protected router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {
    super(authService, {}, changeDetector, router);
    super.socialLinks = [];
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/hub/home';
    if (
      this.authService.isAuthenticated ||
      this.authService.isAdmin() ||
      this.authService.isPrivileged ||
      !this.authService.isInPublicMode) {
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  login() {
    const { email, password } = this.user;
    this.authService.login(email, password)
      .subscribe((val: BasicAuth.Response) => {
        if (BasicAuth.isSuccess(val)) {
          this.router.navigateByUrl(this.returnUrl);
        }
      });
  }

}
