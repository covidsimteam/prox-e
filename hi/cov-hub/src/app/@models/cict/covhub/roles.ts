/* @generated from adl module covhub.roles */

import * as ADL from './../runtime/adl';

export interface Admin {
  domain: string;
  id: string;
  key: string;
}

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

const Admin_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.roles","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"domain","default":{"kind":"nothing"},"name":"domain","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"key","default":{"kind":"nothing"},"name":"key","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"Admin","version":{"kind":"nothing"}}};

export const snAdmin: ADL.ScopedName = {moduleName:"covhub.roles", name:"Admin"};

export function texprAdmin(): ADL.ATypeExpr<Admin> {
  return {value : {typeRef : {kind: "reference", value : snAdmin}, parameters : []}};
}

export interface CaseInvestigator {
  id: string;
  aForms: string[];
  aFormsStarted: string[];
  aFormsFinished: string[];
}

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

const CaseInvestigator_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.roles","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"aForms","default":{"kind":"nothing"},"name":"aForms","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"aFormsStarted","default":{"kind":"nothing"},"name":"aFormsStarted","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"aFormsFinished","default":{"kind":"nothing"},"name":"aFormsFinished","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"CaseInvestigator","version":{"kind":"nothing"}}};

export const snCaseInvestigator: ADL.ScopedName = {moduleName:"covhub.roles", name:"CaseInvestigator"};

export function texprCaseInvestigator(): ADL.ATypeExpr<CaseInvestigator> {
  return {value : {typeRef : {kind: "reference", value : snCaseInvestigator}, parameters : []}};
}

export interface ContactTracer {
  id: string;
  b1Forms: string[];
}

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

const ContactTracer_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.roles","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"b1Forms","default":{"kind":"nothing"},"name":"b1Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"ContactTracer","version":{"kind":"nothing"}}};

export const snContactTracer: ADL.ScopedName = {moduleName:"covhub.roles", name:"ContactTracer"};

export function texprContactTracer(): ADL.ATypeExpr<ContactTracer> {
  return {value : {typeRef : {kind: "reference", value : snContactTracer}, parameters : []}};
}

export interface ContactFollowup {
  id: string;
  b2Forms: string[];
}

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

const ContactFollowup_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.roles","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"b2Forms","default":{"kind":"nothing"},"name":"b2Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"ContactFollowup","version":{"kind":"nothing"}}};

export const snContactFollowup: ADL.ScopedName = {moduleName:"covhub.roles", name:"ContactFollowup"};

export function texprContactFollowup(): ADL.ATypeExpr<ContactFollowup> {
  return {value : {typeRef : {kind: "reference", value : snContactFollowup}, parameters : []}};
}

export interface Coordinator {
  id: string;
  cases: string[];
  investigators: CaseInvestigator[];
}

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

const Coordinator_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.roles","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"cases","default":{"kind":"nothing"},"name":"cases","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"investigators","default":{"kind":"nothing"},"name":"investigators","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.roles","name":"CaseInvestigator"}},"parameters":[]}]}}]}},"name":"Coordinator","version":{"kind":"nothing"}}};

export const snCoordinator: ADL.ScopedName = {moduleName:"covhub.roles", name:"Coordinator"};

export function texprCoordinator(): ADL.ATypeExpr<Coordinator> {
  return {value : {typeRef : {kind: "reference", value : snCoordinator}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.roles.Admin" : Admin_AST,
  "covhub.roles.CaseInvestigator" : CaseInvestigator_AST,
  "covhub.roles.ContactTracer" : ContactTracer_AST,
  "covhub.roles.ContactFollowup" : ContactFollowup_AST,
  "covhub.roles.Coordinator" : Coordinator_AST
};
