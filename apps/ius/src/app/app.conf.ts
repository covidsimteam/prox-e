import { NbAuthSimpleToken } from '@nebular/auth';

export const SMALL_BP = 444;

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
      failure: null,
    },
    defaultErrors: ['Login/Email combination is not correct, please try again.'],
    defaultMessages: ['You have been successfully logged in.'],
  },
  register: {
    endpoint: '/sign-up',
    method: 'post',
    redirect: {
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  },
  logout: {
    endpoint: '/sign-out',
    method: 'post',
    redirect: {
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully logged out.'],
  },
  requestPass: {
    endpoint: '/request-pass',
    method: 'post',
    redirect: {
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





export const CompModule = () => import('./@comp/comp.module')
  .then(m => m.CompModule);

export const HealthFormsModule = () => import('./pages/forms/forms.module')
  .then(m => m.HealthFormsModule);

export const MapsModule = () => import('./pages/maps/maps.module')
  .then(m => m.MapsModule);

export const ChartsModule = () => import('./pages/charts/charts.module')
  .then(m => m.ChartsModule);

export const TablesModule = () => import('./pages/tables/tables.module')
  .then(m => m.TablesModule);

export const CaseTracingModule = () => import('./pages/case-tracing/case-tracing.module')
  .then(m => m.CaseTracingModule);

export const ROUTE_HOME = 'home';
export const ROUTE_STATS = 'stats';
export const ROUTE_CASES = 'cases';
export const ROUTE_SCHED = 'schedules';
export const ROUTE_FORMS = 'forms';
export const ROUTE_MAPS = 'maps';
export const ROUTE_CHARTS = 'charts';
export const ROUTE_TABLES = 'tables';
export const ROUTE_PROFILE = 'profile';


export const PREF_HUB = 'hub';
export const PREF_CORE = 'core';
export const PREF_AUTH = 'auth';

export const FORM_A = `${PREF_HUB}/${ROUTE_FORMS}/form-a`;
export const FORM_B1 = `${PREF_HUB}/${ROUTE_FORMS}/form-b1`;
export const FORM_B2 = `${PREF_HUB}/${ROUTE_FORMS}/form-b2`;

export const FORM_X = `${PREF_HUB}/${ROUTE_FORMS}/form-x`;

export const POI = `${PREF_HUB}/${ROUTE_FORMS}/point-of-entry`;
export const QUARANTINE = `${PREF_HUB}/${ROUTE_FORMS}/quarantine`;
export const RDT_LAB = `${PREF_HUB}/${ROUTE_FORMS}/rdt-lab`;
export const PCR_LAB = `${PREF_HUB}/${ROUTE_FORMS}/pcr-lab`;

export const ISOLATION = `${PREF_HUB}/${ROUTE_FORMS}/isolation`;
export const HOSPITAL = `${PREF_HUB}/${ROUTE_FORMS}/hospital`;
export const MUNICIPALITY = `${PREF_HUB}/${ROUTE_FORMS}/municipality`;


export const TABLE_PCR =  `${PREF_HUB}/${ROUTE_TABLES}/pcr`;
export const TABLE_RDT =  `${PREF_HUB}/${ROUTE_TABLES}/rdt`;
export const TABLE_RET =  `${PREF_HUB}/${ROUTE_TABLES}/returnee`;

export const KATHMANDU =  `${PREF_HUB}/maps/kathmandu`;
export const NEPAL =  `${PREF_HUB}/maps/nepal`;

export const CHARTS_STATS =  `${PREF_HUB}/charts/stats`;
export const PREVENTIVES =  `${PREF_HUB}/charts/preventives`;
export const REACTIVES =  `${PREF_HUB}/charts/reactives`;

export const GRAPHS_CONCEPTS =  `${PREF_HUB}/graphs/concepts`;
export const GRAPHS_POTATOES =  `${PREF_HUB}/graphs/potatoes`;
export const GRAPHS_SYS_CONCEPTS =  `${PREF_HUB}/graphs/sys-concepts`;
export const GRAPHS_COUCHES =  `${PREF_HUB}/graphs/couches`;

export const STATS = `${PREF_HUB}/${ROUTE_STATS}`;
export const CASES = `${PREF_HUB}/${ROUTE_CASES}`;

export const HOME = STATS;

export const DASHBOARD = `${PREF_CORE}/dashboard`;
export const SCHEDULE = `${PREF_CORE}/schedule`;
