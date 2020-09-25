export const HealthFormsModule = () => import('./forms/forms.module')
  .then(m => m.HealthFormsModule);

export const MapsModule = () => import('./maps/maps.module')
  .then(m => m.MapsModule);

export const ChartsModule = () => import('./charts/charts.module')
  .then(m => m.ChartsModule);

export const TablesModule = () => import('./tables/tables.module')
  .then(m => m.TablesModule);

export const CaseTracingModule = () => import('./case-tracing/case-tracing.module')
  .then(m => m.CaseTracingModule);

export const ROUTE_HOME = 'home';
export const ROUTE_STATS = 'stats';
export const ROUTE_CASES = 'cases';
export const ROUTE_TRACES = 'traces';
export const ROUTE_FORMS = 'forms';
export const ROUTE_MAPS = 'maps';
export const ROUTE_CHARTS = 'charts';
export const ROUTE_TABLES = 'tables';
export const ROUTE_PROFILE = 'profile';


export const ROUTE_HUB = '/hub/';
export const route = (context: string) => `${ROUTE_HUB}${context}`;

export const HOME = route(ROUTE_HOME);
export const STATS = route(ROUTE_STATS);

export const CASES = route(ROUTE_CASES);
export const TRACES = route(ROUTE_TRACES);
export const FORM_A = route(`${ROUTE_FORMS}/form-a`);
export const FORM_B1 = route(`${ROUTE_FORMS}/form-b1`);
export const FORM_B2 = route(`${ROUTE_FORMS}/form-b2`);

export const FORM_X = route(`${ROUTE_FORMS}/form-x`);

export const POI = route(`${ROUTE_FORMS}/point-of-entry`);
export const QUARANTINE = route(`${ROUTE_FORMS}/quarantine`);
export const RDT_LAB = route(`${ROUTE_FORMS}/rdt-lab`);
export const PCR_LAB = route(`${ROUTE_FORMS}/pcr-lab`);

export const ISOLATION = route(`${ROUTE_FORMS}/isolation`);
export const HOSPITAL = route(`${ROUTE_FORMS}/hospital`);
export const MUNICIPALITY = route(`${ROUTE_FORMS}/municipality`);


export const TABLE_PCR =  route(`${ROUTE_TABLES}/pcr`);
export const TABLE_RDT =  route(`${ROUTE_TABLES}/rdt`);
export const TABLE_RET =  route(`${ROUTE_TABLES}/returnee`);

export const KATHMANDU =  route('maps/kathmandu');
export const NEPAL =  route('maps/nepal');

export const CHARTS_STATS =  route('charts/stats');
export const PREVENTIVES =  route('charts/preventives');
export const REACTIVES =  route('charts/reactives');

export const GRAPHS_CONCEPTS =  route('graphs/concepts');
export const GRAPHS_POTATOES =  route('graphs/potatoes');
export const GRAPHS_SYS_CONCEPTS =  route('graphs/sys-concepts');
export const GRAPHS_COUCHES =  route('graphs/couches');
