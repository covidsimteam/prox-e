import { Component, Input } from '@angular/core';

@Component({
  selector: 'cov-hub',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  @Input() on = true;
}
