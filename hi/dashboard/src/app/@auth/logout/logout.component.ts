import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbLogoutComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent extends NbLogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    protected router: Router,
    ) {
      super(authService, {}, router);
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
