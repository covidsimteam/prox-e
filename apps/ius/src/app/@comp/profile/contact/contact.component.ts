import { Component, OnInit, Input } from '@angular/core';
import { HubUser } from '../../../@models/user.model';

@Component({
  selector: 'cov-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() user: HubUser;

  ngOnInit(): void {
  }

}
