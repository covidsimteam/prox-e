import { NbAuthSimpleToken } from '@nebular/auth';

export const authSetup = {
  name: 'email',
  token: {
    key: 'token',
    class: NbAuthSimpleToken,
  },
  baseEndpoint: '/auth/',
  login: {
    endpoint: '/sign-in',
    method: 'post',
    redirect: {
      success: '/hub/',
      failure: null,
    },
    defaultErrors: ['Login/Email combination is not correct, please try again.'],
    defaultMessages: ['You have been successfully logged in.'],
  },
  register: {
    endpoint: '/sign-up',
    method: 'post',
    redirect: {
      success: '/welcome/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  },
  logout: {
    endpoint: '/sign-out',
    method: 'post',
    redirect: {
      success: '/auth/sign-in/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully logged out.'],
  },
  requestPass: {
    endpoint: '/request-pass',
    method: 'post',
    redirect: {
      success: '/check-email/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Reset password instructions have been sent to your email.'],
  },
  resetPass: {
    endpoint: '/reset-pass',
    method: 'post',
    redirect: {
      success: '/reset-success/',
      failure: null,
    },
    resetPasswordTokenKey: 'covid-reset',
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your password has been successfully changed.'],
  },
};

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

export const formSetup = {
  login: formSetting,
  register: formSetting,
  requestPassword: formSetting,
  resetPassword: formSetting,
  logout: {
    redirectDelay: 0,
  },
};


