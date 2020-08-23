import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD:hi/dashboard/src/app/auth/login/login.component.ts
import { BasicAuth } from '../models/auth-response.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading = false;

  redirectDelay: number;
  showMessages = { error: null, success: null };
  submitted = false;
  returnUrl: string;
=======
import { NbLoginComponent } from '@nebular/auth';
import { BasicAuth } from '../../@models/auth-response.model';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbLoginComponent implements OnInit {
>>>>>>> master:hi/dashboard/src/app/@auth/register/register.component.ts

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
<<<<<<< HEAD:hi/dashboard/src/app/auth/login/login.component.ts
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/hub/home';
  }

  get f() {
    return this.loginForm.controls;
  }

  login(): void {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.loading = true;
    // TODO create role with edit privileges
    this.authService.login(this.f.username.value, this.f.password.value, '_admin')
      .subscribe((response: BasicAuth.Response) => {
        if (BasicAuth.isSuccess(response)) {
          this.router.navigate([this.returnUrl]);
          this.loading = false;
        } else {
          this.showMessages.error = response.error;
        }
      });
  }

}
=======
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
>>>>>>> master:hi/dashboard/src/app/@auth/register/register.component.ts
