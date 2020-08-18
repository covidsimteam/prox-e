import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/core/auth.service';

@Component({
  selector: 'ngx-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
@Component({ templateUrl: 'layout.component.html' })
export class AccountComponent {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        if (this.authService.isAuthenticated) {
            this.router.navigate(['hub', 'home']);
        }
    }
}
