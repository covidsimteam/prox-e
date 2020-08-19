import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbRequestPasswordComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-request-pass',
  templateUrl: './request-pass.component.html',
  styleUrls: ['./request-pass.component.scss']
})
export class RequestPassComponent extends NbRequestPasswordComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
    ) {
      super(authService, {}, changeDetector, router);
    }

    ngOnInit() {
      if (
        this.authService.isAdmin() ||
        this.authService.isPrivileged ||
        !this.authService.isInPublicMode) {
          this.router.navigate(['hub', 'home']);
        }
      }


    }
