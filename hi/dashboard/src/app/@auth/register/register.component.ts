import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { BasicAuth } from '../../@models/auth-response.model';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
    ) {
      super(authService, {}, changeDetector, router);
      super.socialLinks = [];
    }

    ngOnInit(): void {
      if (
        this.authService.isAdmin() ||
        this.authService.isPrivileged ||
        !this.authService.isInPublicMode) {
          this.router.navigate(['hub', 'home']);
        }
      }

      register() {
        const { email, password } = this.user;
        this.authService.signUp(email, password)
        .subscribe((val: BasicAuth.Response) => {
          if (BasicAuth.isSuccess(val)) {
            this.router.navigateByUrl('/hub/home');
          }
        });
      }

    }
