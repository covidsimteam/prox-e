import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuth } from '../../models/auth-response.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'ngx-forgot-password',
  styleUrls: ['./forgot-password.component.scss'],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

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
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  forgotPassword(): void {

  }

}
