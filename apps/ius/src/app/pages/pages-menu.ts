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
  SCHED,
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
    link: `${SCHED}`,
  },
  {
    title: 'Files',
    icon: 'map-outline',
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
        title: 'Entry Points',
        link: `${POI}`,
      },
      {
        title: 'Quarantines',
        link: `${QUARANTINE}`,
      },
      {
        title: 'RDT Labs',
        link: `${RDT_LAB}`,
      },
      {
        title: 'PCR Labs',
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
    title: 'Visual Stats',
    group: true,
  },
  {
    title: 'Cov-Maps',
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
        title: 'Charts',
        link: `${CHARTS_STATS}`,
      },
      {
        title: 'Interventions',
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
    title: 'Resources',
    group: true
  },

  {
    title: 'System',
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
  {
    title: 'Devs',
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
  }
];
