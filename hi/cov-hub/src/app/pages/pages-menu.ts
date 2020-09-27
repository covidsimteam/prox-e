import { NbMenuItem } from '@nebular/theme';
import {
  CASES,
  CHARTS_STATS,
  FORM_A,
  FORM_B1,
  FORM_B2,
  FORM_X,
  GRAPHS_CONCEPTS,
  GRAPHS_COUCHES,
  GRAPHS_POTATOES,
  GRAPHS_SYS_CONCEPTS,
  HOME,
  HOSPITAL,
  ISOLATION,
  KATHMANDU,
  MUNICIPALITY, NEPAL,
  PCR_LAB,
  POI,
  PREVENTIVES,
  QUARANTINE,
  RDT_LAB, REACTIVES,
  STATS,
  TABLE_PCR,
  TABLE_RDT,
  TABLE_RET
} from './pages.conf';

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
    title: 'Tables',
    group: true,
  },
  {
    title: 'Schedules',
    icon: 'clock-outline',
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
    title: 'Files',
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
    title: 'Reports',
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
    title: 'Workflows',
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
    title: 'Resources',
    group: true
  },
  {
    title: 'Team',
    icon: 'people-outline',
    children: [
      {
        title: 'Funds',
        link: ''
      },
      {
        title: 'Materials',
        link: ''
      },
    ]
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
