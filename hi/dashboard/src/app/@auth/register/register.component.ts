import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbRegisterComponent } from '@nebular/auth';
import { BasicAuth } from '../../@models/auth-response.model';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {


  registerForm: FormGroup;

  loading = false;

  redirectDelay: number;
  showMessages = { error: null, success: null };
  submitted = false;

  private returnUrl: string = '/hub/home';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    protected router: Router,
    private changeDetector: ChangeDetectorRef,
    private authService: AuthService
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

  get fval() {
    return this.registerForm.controls;
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

}
