import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbResetPasswordComponent } from '@nebular/auth';
import { BasicAuth } from 'app/models/auth-response.model';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent extends NbResetPasswordComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
    ) {
      super(authService, {}, changeDetector, router);
    }

    ngOnInit(): void {
      if (
        this.authService.isAdmin() ||
        this.authService.isPrivileged ||
        !this.authService.isInPublicMode) {
          this.router.navigate(['hub', 'home']);
        }
      }

      resetPass() {
        const { email, password } = this.user;
        this.authService.login(email, password, false)
        .subscribe((val: BasicAuth.Response) => {
          if (BasicAuth.isSuccess(val)) {
            this.router.navigateByUrl('/hub/home');
          }
        });
      }

    }
