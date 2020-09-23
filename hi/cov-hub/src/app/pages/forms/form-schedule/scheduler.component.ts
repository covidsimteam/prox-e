import { Component, OnInit } from '@angular/core';
import { Formeta } from '../formeta.class';

@Component({
  selector: 'ngx-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent extends Formeta implements OnInit {

  constructor() { super(); }


  ngOnInit(): void {
  }

  formInit(): void {
    throw new Error('Method not implemented.');
  }

  onFormChanges(): void {
    throw new Error('Method not implemented.');
  }

  saveChanges(): void {
    throw new Error('Method not implemented.');
  }

  loadChanges(): void {
    throw new Error('Method not implemented.');
  }

}
