export interface Admin {
  domain: string;
  id: string;
  key: string;
}

export type AdminPatch = Partial<Admin>;

export function makeAdmin(
  input: {
    domain: string,
    id: string,
    key: string,
  }
): Admin {
  return {
    domain: input.domain,
    id: input.id,
    key: input.key,
  };
}

export interface CaseInvestigator {
  id: string;
  aForms: string[];
  aFormsStarted: string[];
  aFormsFinished: string[];
}

export type CaseInvestigatorPatch = Partial<CaseInvestigator>;

export function makeCaseInvestigator(
  input: {
    id: string,
    aForms: string[],
    aFormsStarted: string[],
    aFormsFinished: string[],
  }
): CaseInvestigator {
  return {
    id: input.id,
    aForms: input.aForms,
    aFormsStarted: input.aFormsStarted,
    aFormsFinished: input.aFormsFinished,
  };
}

export interface ContactTracer {
  id: string;
  b1Forms: string[];
}

export type ContactTracerPatch = Partial<ContactTracer>;

export function makeContactTracer(
  input: {
    id: string,
    b1Forms: string[],
  }
): ContactTracer {
  return {
    id: input.id,
    b1Forms: input.b1Forms,
  };
}

export interface ContactFollowup {
  id: string;
  b2Forms: string[];
}

export type ContactFollowupPatch = Partial<ContactFollowup>;

export function makeContactFollowup(
  input: {
    id: string,
    b2Forms: string[],
  }
): ContactFollowup {
  return {
    id: input.id,
    b2Forms: input.b2Forms,
  };
}

export interface Coordinator {
  id: string;
  cases: string[];
  investigators: CaseInvestigator[];
}

export type CoordinatorPatch = Partial<Coordinator>;

export function makeCoordinator(
  input: {
    id: string,
    cases: string[],
    investigators: CaseInvestigator[],
  }
): Coordinator {
  return {
    id: input.id,
    cases: input.cases,
    investigators: input.investigators,
  };
}

export type Role = Admin
  | ContactTracer
  | CaseInvestigator
  | ContactFollowup
  | Coordinator;


export type RolePatch = AdminPatch
  | ContactTracerPatch
  | CaseInvestigatorPatch
  | ContactFollowupPatch
  | CoordinatorPatch;
