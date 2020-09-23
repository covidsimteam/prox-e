import { NbAuthToken } from '@nebular/auth';

export class AuthToken extends NbAuthToken {
  protected payload: any;
  readonly strategy = 'email';

  constructor() {
    super();
  }

  getValue(): string {
    return this.payload?.toString();
  }

  isValid(): boolean {
    return true;
  }

  getOwnerStrategyName(): string {
    return this.strategy;
  }

  getCreatedAt(): Date {
    return new Date(); // TODO attach to db audit database
  }

  toString(): string {
    return this.getValue();
  }

  getName(): string {
    return this.strategy;
  }

  getPayload(): any {
    return this.getValue();
  }
}
