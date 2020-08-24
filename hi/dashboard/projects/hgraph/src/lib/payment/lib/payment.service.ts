import { Injectable } from '@angular/core';
import { PaymentStream } from '../../model/model.stream';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private id: PaymentStream<string>;

  constructor() { }

  set pay(payment: PaymentStream<string>) { this.id = payment; }

  get pay(): PaymentStream<string> { return this.id; }

}
