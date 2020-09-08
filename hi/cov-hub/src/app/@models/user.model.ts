export interface HubUser {
  username: string;
  password: string;
  roles: string[];
  pic?: string;
}

export const HUB_USER_KEYS = ['username', 'password', 'roles'];

export function isHubUser(user: any): user is HubUser {
  return Object.keys(user)
    .every((key: string) =>
      HUB_USER_KEYS
        .find((uk) => uk === key));
}

export interface HeaderBio extends HubUser {
  picture?: string;
  name?: string;
}
