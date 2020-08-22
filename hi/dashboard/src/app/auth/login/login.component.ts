import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
