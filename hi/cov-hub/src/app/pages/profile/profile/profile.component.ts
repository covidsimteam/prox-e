import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HubUser } from '../../../@models/user.model';
import { AuthService } from '../../../@auth/core/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cov-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  @Input() user: HubUser;
  file: File;
  originalProfilePic = true;
  class = 'hide-text';
  username: string;
  subs: Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.username = this.user?.username;
    this.subs = this.auth.userObs.subscribe((usr) => this.user = usr);
  }

  getFilePath(e: any) {
    this.originalProfilePic = false;
    this.file = e.target.files[0];
  }

  get filePreview(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl((
      window.URL.createObjectURL(this.file)));
  }

  imageHover() {
    this.class = 'show-text';
  }

  imageLeave() {
    this.class = 'hide-text';
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
