import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';
import { BasicAuth } from '../../models/auth-response.model';

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
    private changeDetector: ChangeDetectorRef
    ) {
      super(authService, {}, changeDetector, router);
      super.socialLinks = [];
    }

    ngOnInit() {
      if (
        this.authService.isAdmin() ||
        this.authService.isPrivileged ||
        !this.authService.isInPublicMode) {
          this.router.navigate(['hub', 'home']);
        }
      }

      login() {
        const { email, password } = this.user;
        this.authService.login(email, password, false)
        .subscribe((val: BasicAuth.Response) => {
          if (BasicAuth.isSuccess(val)) {
            this.router.navigateByUrl('/hub/home');
          }
        });
      }

    }
