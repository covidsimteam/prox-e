import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    private changeDetector: ChangeDetectorRef,
    ) {
      super(authService, {}, changeDetector, router);
      super.socialLinks = [];
    }

    ngOnInit() {
      if (this.authService.isAdmin()) {
        this.router.navigate(['hub', 'home']);
      }
    }

    login() {
      const { email, password } = this.user;
      this.authService.login(email, password, false).subscribe();
    }

  }
