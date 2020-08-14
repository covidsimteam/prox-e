import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';
import { BasicAuth } from 'app/models/auth-response.model';
import { AuthGuard } from 'app/services/guards/auth.guard';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private authGuard: AuthGuard
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
      this.authService.login(email, password, false)
        .subscribe((val: BasicAuth.Response) => {
          if (BasicAuth.isSuccess(val)) {
            this.authService.authSuccess = true;
            this.router.navigateByUrl('/hub/home');
          }
        });
    }

  }
