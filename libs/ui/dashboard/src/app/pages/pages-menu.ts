import { NbMenuItem } from '@nebular/theme';

// TODO: remove all unused pages/modules

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Core Panels',
    icon: 'home-outline',
    link: '/hub/home',
    home: true,
  },
  {
    title: 'Data Entry',
    group: true,
  },
  {
    title: 'Returnees',
    icon: 'people-outline',
    children: [
      {
        title: 'Form A',
        link: '/hub/secured/forms/form-a',
      },
      {
        title: 'Point of Entry',
        link: '/hub/secured/forms/point-of-entry',
      },
      {
        title: 'Quarantine Facility',
        link: '/hub/secured/forms/quarantine-facility',
      },
      {
        title: 'RDT Lab',
        link: '/hub/secured/forms/rdt-lab',
      },
      {
        title: 'PCR Lab',
        link: '/hub/secured/forms/pcr-lab',
      },
      {
        title: 'Isolation',
        link: '/hub/secured/forms/isolation',
      },
      {
        title: 'Hospital',
        link: '/hub/secured/forms/hospital',
      },
      {
        title: 'Municipality',
        link: '/hub/secured/forms/municipality',
      },
    ],
  },
  {
    title: 'Aggregates',
    icon: 'bar-chart-2-outline',
    children: [
      {
        title: 'PCR Tests',
        link: '/hub/secured/tables/pcr',
      },
      {
        title: 'RDT Tests',
        link: '/hub/secured/tables/rdt',
      },
      {
        title: 'Returnees',
        link: '/hub/secured/tables/returnee',
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
      {
        title: 'Custom Map (Sample)',
        link: '/hub/maps/bubble',
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
  {
    title: 'Meta Graphs',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'activity-outline',
    children: [
      {
        title: 'Concepts',
        link: '/hub/graphs/concepts',
      },
      {
        title: 'Potatoes',
        link: '/hub/graphs/servers',
      },
    ],
  },
  {
    title: 'System',
    icon: 'activity-outline',
    children: [
      {
        title: 'Concepts',
        link: '/hub/graphs/concepts',
      },
      {
        title: 'Couches',
        link: '/hub/graphs/servers',
      },
    ],
  },
];
