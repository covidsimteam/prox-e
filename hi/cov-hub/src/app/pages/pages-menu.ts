import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Core Panels',
    icon: 'home-outline',
    link: '/hub/home',
    home: true,
  },
  {
    title: 'Core Stats',
    icon: 'activity-outline',
    link: '/hub/stats',
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
        link: '/hub/cases'
      },
      {
        title: 'Traces',
        link: '/hub/traces'
      },
      {
        title: 'Form A',
        link: '/hub/forms/form-a',
      },
      {
        title: 'Form B1',
        link: '/hub/forms/form-b1',
      },
      {
        title: 'Form B2',
        link: '/hub/forms/form-b2',
      },
      // {
      //   title: 'Form X',
      //   link: '/hub/forms/form-x',
      // },
      {
        title: 'Point of Entry',
        link: '/hub/forms/point-of-entry',
      },
      {
        title: 'Quarantine Facility',
        link: '/hub/forms/quarantine-facility',
      },
      {
        title: 'RDT Lab',
        link: '/hub/forms/rdt-lab',
      },
      {
        title: 'PCR Lab',
        link: '/hub/forms/pcr-lab',
      },
      {
        title: 'Isolation',
        link: '/hub/forms/isolation',
      },
      {
        title: 'Hospital',
        link: '/hub/forms/hospital',
      },
      {
        title: 'Municipality',
        link: '/hub/forms/municipality',
      },
    ],
  },
  {
    title: 'Aggregates',
    icon: 'bar-chart-2-outline',
    children: [
      {
        title: 'PCR Tests',
        link: '/hub/tables/pcr',
      },
      {
        title: 'RDT Tests',
        link: '/hub/tables/rdt',
      },
      {
        title: 'Returnees',
        link: '/hub/tables/returnee',
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
        title: 'Kathmandu Valley',
        link: '/hub/maps/area/kathmandu_valley',
      },
      {
        title: 'Nepal',
        link: '/hub/maps/nepal',
      },
    ],
  },
  {
    title: 'COVID-19 Stats',
    icon: 'pie-chart-outline',
    link: '/hub/charts/echarts',
  },
  {
    title: 'COVID-19 Charts',
    icon: 'activity-outline',
    children: [
      {
        title: 'Preventive Measures',
        link: '/hub/charts/chartjs',
      },
      {
        title: 'Medical Stats',
        link: '/hub/charts/d3',
      },
    ],
  },
  // {
  //   title: 'Meta Graphs',
  //   group: true,
  // },
  // {
  //   title: 'Dashboard',
  //   icon: 'activity-outline',
  //   children: [
  //     {
  //       title: 'Concepts',
  //       link: '/hub/graphs/concepts',
  //     },
  //     {
  //       title: 'Potatoes',
  //       link: '/hub/graphs/servers',
  //     },
  //   ],
  // },
  // {
  //   title: 'System',
  //   icon: 'activity-outline',
  //   children: [
  //     {
  //       title: 'Concepts',
  //       link: '/hub/graphs/concepts',
  //     },
  //     {
  //       title: 'Couches',
  //       link: '/hub/graphs/servers',
  //     },
  //   ],
  // },
];
