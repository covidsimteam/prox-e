import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-test-card',
  styleUrls: ['./test-card.component.scss'],
  templateUrl: './test-card.component.html',
})
export class TestCardComponent {

  @Input() testName: string;

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
