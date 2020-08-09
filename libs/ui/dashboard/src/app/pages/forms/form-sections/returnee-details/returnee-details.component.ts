import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RISKY_OCCUPATIONS, OTHER_OCCUPATION } from '../../../../@core/data/risky-occupations';

@Component({
  selector: 'ngx-returnee-details',
  templateUrl: './returnee-details.component.html',
  styleUrls: ['./returnee-details.component.scss'],
})
export class ReturneeDetailsComponent implements OnInit {

  relationName = 'Father';
  occupations: string[];
  showOtherOccupation = false;

  constructor() { }

  ngOnInit(): void {
    this.occupations = RISKY_OCCUPATIONS;
  }

  changeRelationship(event: string) {
    this.relationName = event;
  }

  selectOccupation(event: string) {
    this.showOtherOccupation = event === OTHER_OCCUPATION;
  }

}
