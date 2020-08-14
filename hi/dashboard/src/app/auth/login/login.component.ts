import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

import { AuthService } from '../core/auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

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
    private route: RouterStateSnapshot
    ) {
      super(authService, {}, changeDetector, router);
    }

  ngOnInit() {
    if (this.authService.isAdmin()) {
      this.router.navigate(['hub', 'home']);
    }
  }

}
