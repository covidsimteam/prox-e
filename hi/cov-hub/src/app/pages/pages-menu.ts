import { NbMenuItem } from '@nebular/theme';

import {
  ROUTE_HOME,
  ROUTE_STATS,
  ROUTE_CASES,
  ROUTE_TRACES,
  ROUTE_FORMS,
  ROUTE_TABLES
 } from './pages-routing.module';

export const ROUTE_HUB = '/hub/';
export const route = (context: string) => `${ROUTE_HUB}${context}`;
const HOME = route(ROUTE_HOME);
const STATS = route(ROUTE_STATS);

const CASES = route(ROUTE_CASES);
const TRACES = route(ROUTE_TRACES);
const FORM_A = route(`${ROUTE_FORMS}/form-a`);
const FORM_B1 = route(`${ROUTE_FORMS}/form-b1`);
const FORM_B2 = route(`${ROUTE_FORMS}/form-b2`);

const FORM_X = route(`${ROUTE_FORMS}/form-x`);

const POI = route(`${ROUTE_FORMS}/point-of-entry`);
const QUARANTINE = route(`${ROUTE_FORMS}/quarantine`);
const RDT_LAB = route(`${ROUTE_FORMS}/rdt-lab`);
const PCR_LAB = route(`${ROUTE_FORMS}/pcr-lab`);

const ISOLATION = route(`${ROUTE_FORMS}/isolation`);
const HOSPITAL = route(`${ROUTE_FORMS}/hospital`);
const MUNICIPALITY = route(`${ROUTE_FORMS}/municipality`);


const TABLE_PCR =  route(`${ROUTE_TABLES}/pcr`);
const TABLE_RDT =  route(`${ROUTE_TABLES}/rdt`);
const TABLE_RET =  route(`${ROUTE_TABLES}/returnee`);

const KATHMANDU =  route('maps/kathmandu');
const NEPAL =  route('maps/nepal');

const CHARTS_STATS =  route('charts/stats');
const PREVENTIVES =  route('charts/preventives');
const REACTIVES =  route('charts/reactives');

const GRAPHS_CONCEPTS =  route('graphs/concepts');
const GRAPHS_POTATOES =  route('graphs/potatoes');
const GRAPHS_SYS_CONCEPTS =  route('graphs/sys-concepts');
const GRAPHS_COUCHES =  route('graphs/couches');

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Core Panels',
    icon: 'home-outline',
    link: `${HOME}`,
    home: true,
  },
  {
    title: 'Core Stats',
    icon: 'activity-outline',
    link: `${STATS}`,
  },
  {
    title: 'Forms',
    group: true,
  },
  {
    title: 'Forms',
    icon: 'calendar-outline',
    children: [
      {
        title: 'Cases',
        link: `${CASES}`
      },
      {
        title: 'Traces',
        link: `${TRACES}`
      },
      {
        title: 'Form A',
        link: `${FORM_A}`,
      },
      {
        title: 'Form B1',
        link: `${FORM_B1}`,
      },
      {
        title: 'Form B2',
        link: `${FORM_B2}`,
      },
      {
        title: 'Form X',
        link: `${FORM_X}`,
      },
      {
        title: 'Point of Entry',
        link: `${POI}`,
      },
      {
        title: 'Quarantine Facility',
        link: `${QUARANTINE}`,
      },
      {
        title: 'RDT Lab',
        link: `${RDT_LAB}`,
      },
      {
        title: 'PCR Lab',
        link: `${PCR_LAB}`,
      },
      {
        title: 'Isolation',
        link: `${ISOLATION}`,
      },
      {
        title: 'Hospital',
        link: `${HOSPITAL}`,
      },
      {
        title: 'Municipality',
        link: `${MUNICIPALITY}`,
      },
    ],
  },
  {
    title: 'Aggregates',
    icon: 'bar-chart-2-outline',
    children: [
      {
        title: 'PCR Tests',
        link: `${TABLE_PCR}`,
      },
      {
        title: 'RDT Tests',
        link: `${TABLE_RDT}`,
      },
      {
        title: 'Returnees',
        link: `${TABLE_RET}`,
      },
    ],
  },
  {
    title: 'Visual Stats',
    group: true,
  },
  {
    title: 'COVID-19 Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Kathmandu',
        link: `${KATHMANDU}`,
      },
      {
        title: 'Nepal',
        link: `${NEPAL}`,
      },
    ],
  },
  {
    title: 'COVID-19 Stats',
    icon: 'activity-outline',
    children: [
      {
        title: 'COVID-19 Charts',
        link: `${CHARTS_STATS}`,
      },
      {
        title: 'Preventive Measures',
        link: `${PREVENTIVES}`,
      },
      {
        title: 'Medical Stats',
        link: `${REACTIVES}`,
      },
    ],
  },
  {
    title: 'Meta Graphs',
    group: true,
  },
  {
    title: 'Dev Dashboard',
    icon: 'activity-outline',
    children: [
      {
        title: 'Concepts',
        link: `${GRAPHS_CONCEPTS}`,
      },
      {
        title: 'Potatoes',
        link: `${GRAPHS_POTATOES}`,
      },
    ],
  },
  {
    title: 'System Dashboard',
    icon: 'activity-outline',
    children: [
      {
        title: 'Concepts',
        link: `${GRAPHS_SYS_CONCEPTS}`,
      },
      {
        title: 'Couches',
        link: `${GRAPHS_COUCHES}`,
      },
    ],
  },
];
