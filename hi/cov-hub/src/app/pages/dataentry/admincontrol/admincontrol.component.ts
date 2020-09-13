import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { NewcaseComponent } from './newcase/newcase.component';
import { NewuserComponent } from './newuser/newuser.component';

@Component({
  selector: 'cov-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrls: ['./admincontrol.component.scss']
})
export class AdmincontrolComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  showNewCaseWindow() {
    this.windowService.open(NewcaseComponent, {
      title: 'New Case'
    });
  }

  showNewUserWindow() {
    this.windowService.open(NewuserComponent, {
      title: 'New User'
    });
  }
}
