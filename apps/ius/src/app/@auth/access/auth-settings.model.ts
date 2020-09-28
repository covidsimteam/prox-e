import { HubUser } from '../../@models/user.model';

export const authSettings = {
  guest: {
  },
  user: {
    parent: 'guest',
      view: ['current-user'],
      edit: ['current-user'],
  },
  admin: {
    parent: 'user',
      view: ['current-user', 'users'],
      edit: ['current-user', 'users'],
  },
};

const guest = {
  view: 'public',
  edit: 'public',
};

const admin = {
  view: 'authorized',
  edit: 'authorized',
};


export class AuthSetting {

  admin: typeof admin;

  guest: typeof guest;

  user: HubUser;

}
