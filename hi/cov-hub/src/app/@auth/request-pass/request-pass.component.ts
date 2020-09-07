import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbRequestPasswordComponent } from '@nebular/auth';
import { AuthService } from '../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) {
    super(authService, {}, changeDetector, router);
  }

  forgotPasswordForm: FormGroup;

  loading = false;

  redirectDelay: number;
  showMessages = { error: null, success: null };
  submitted = false;
  returnUrl: string;

  ngOnInit() {
    if (
      this.authService.isAdmin() ||
      this.authService.isPrivileged ||
      !this.authService.isInPublicMode) {
      this.router.navigate(['hub', 'home']);
    }
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  forgotPassword() {
    // TODO attach pouchdb authenticate's forgot password api call
  }
}
