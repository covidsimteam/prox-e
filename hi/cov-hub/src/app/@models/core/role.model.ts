export enum RoleKeys {
  area = 'area',
  orgs = 'orgs',
  title = 'title',
  access = 'access'
}

export enum RoleTypes {
  officer = 'officer',
  admin = 'admin',
  sampleCollector = 'sample_collector',
  reporter = 'reporter',
  investigator = 'investigator',
  contactTracer = 'contact_tracer',
  user = 'user'
}

export type Role = {
  [key in RoleKeys]: string;
};

export type RoleItem = Pick<Role, RoleKeys.area | RoleKeys.orgs>;

const lalitpurMunicipality: RoleItem = { area: 'lalitpur', orgs: 'municipality' };
const lalitpurLab: RoleItem = { area: 'lalitpur', orgs: 'lab' };
const lalitpurField: RoleItem = { area: 'lalitpur', orgs: 'field' };
const lalitpurCict: RoleItem = { area: 'lalitpur', orgs: 'cict' };
const commonUser: RoleItem = { area: 'common', orgs: 'user' };

// With default values
const lalitpurRoles: Role[] = [
  {
    title: RoleTypes.admin,
    access: 'home,r1,a1,b1,b2,schedule',
    ...lalitpurMunicipality
  },
  {
    title: RoleTypes.officer,
    access: 'home,r1,a1,b1,b2,schedule',
    ...lalitpurMunicipality
  },
  {
    title: RoleTypes.sampleCollector,
    access: 'home,r1',
    ...lalitpurLab
  },
  {
    title: RoleTypes.reporter,
    access: 'home,r1',
    ...lalitpurLab
  },
  {
    title: RoleTypes.admin,
    access: 'home,r1,schedule',
    ...lalitpurLab
  },
  {
    title: RoleTypes.sampleCollector,
    access: 'home,r1',
    ...lalitpurField
  },
  {
    title: RoleTypes.investigator,
    access: 'home,a1',
    ...lalitpurCict
  },
  {
    title: RoleTypes.contactTracer,
    access: 'home,a1,b1,schedule',
    ...lalitpurCict
  },
  {
    title: RoleTypes.user,
    access: 'self-a1,self-b1,self-b2,schedule',
    ...commonUser
  }
];

const lalitpurRole = (type: RoleTypes) =>
  lalitpurRoles.find(role => role.title === type.toString());

export const roleAuths = (type: RoleTypes) => lalitpurRole(type);
