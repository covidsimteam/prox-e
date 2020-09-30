/* @generated from adl module covhub.cases */

import * as ADL from './../runtime/adl';

export interface Coordinates {
  xLat: number;
  yLng: number;
  zAlt: number;
  time: number;
}

export function makeCoordinates(
  input: {
    xLat: number,
    yLng: number,
    zAlt: number,
    time: number,
  }
): Coordinates {
  return {
    xLat: input.xLat,
    yLng: input.yLng,
    zAlt: input.zAlt,
    time: input.time,
  };
}

const Coordinates_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.cases","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"xLat","default":{"kind":"nothing"},"name":"xLat","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"yLng","default":{"kind":"nothing"},"name":"yLng","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"zAlt","default":{"kind":"nothing"},"name":"zAlt","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"time","default":{"kind":"nothing"},"name":"time","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}]}},"name":"Coordinates","version":{"kind":"nothing"}}};

export const snCoordinates: ADL.ScopedName = {moduleName:"covhub.cases", name:"Coordinates"};

export function texprCoordinates(): ADL.ATypeExpr<Coordinates> {
  return {value : {typeRef : {kind: "reference", value : snCoordinates}, parameters : []}};
}

export interface CaseState {
  aFormFilled: boolean;
  numberOfContacts: number;
  numberOfB1Forms: number;
  numberOfB2Forms: number;
  numberOfSwabs: number;
  numberOfPositiveContacts: number;
  sourceOfInfection: string;
  placeOfInfection: Coordinates;
}

export function makeCaseState(
  input: {
    aFormFilled: boolean,
    numberOfContacts: number,
    numberOfB1Forms: number,
    numberOfB2Forms: number,
    numberOfSwabs: number,
    numberOfPositiveContacts: number,
    sourceOfInfection: string,
    placeOfInfection: Coordinates,
  }
): CaseState {
  return {
    aFormFilled: input.aFormFilled,
    numberOfContacts: input.numberOfContacts,
    numberOfB1Forms: input.numberOfB1Forms,
    numberOfB2Forms: input.numberOfB2Forms,
    numberOfSwabs: input.numberOfSwabs,
    numberOfPositiveContacts: input.numberOfPositiveContacts,
    sourceOfInfection: input.sourceOfInfection,
    placeOfInfection: input.placeOfInfection,
  };
}

const CaseState_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.cases","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"aFormFilled","default":{"kind":"nothing"},"name":"aFormFilled","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfContacts","default":{"kind":"nothing"},"name":"numberOfContacts","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfB1Forms","default":{"kind":"nothing"},"name":"numberOfB1Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfB2Forms","default":{"kind":"nothing"},"name":"numberOfB2Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfSwabs","default":{"kind":"nothing"},"name":"numberOfSwabs","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfPositiveContacts","default":{"kind":"nothing"},"name":"numberOfPositiveContacts","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"sourceOfInfection","default":{"kind":"nothing"},"name":"sourceOfInfection","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"placeOfInfection","default":{"kind":"nothing"},"name":"placeOfInfection","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.cases","name":"Coordinates"}},"parameters":[]}}]}},"name":"CaseState","version":{"kind":"nothing"}}};

export const snCaseState: ADL.ScopedName = {moduleName:"covhub.cases", name:"CaseState"};

export function texprCaseState(): ADL.ATypeExpr<CaseState> {
  return {value : {typeRef : {kind: "reference", value : snCaseState}, parameters : []}};
}

export interface Information {
  caseCoordinates: Coordinates;
  reportingInstitution: string;
  nameOfCase: string;
  phoneNumber: string;
  province: string;
  district: string;
  municipality: string;
  wardNumber: string;
  tole: string;
  caseInvestigator: string;
  caseState: CaseState;
}

export function makeInformation(
  input: {
    caseCoordinates: Coordinates,
    reportingInstitution: string,
    nameOfCase: string,
    phoneNumber: string,
    province: string,
    district: string,
    municipality: string,
    wardNumber: string,
    tole: string,
    caseInvestigator: string,
    caseState: CaseState,
  }
): Information {
  return {
    caseCoordinates: input.caseCoordinates,
    reportingInstitution: input.reportingInstitution,
    nameOfCase: input.nameOfCase,
    phoneNumber: input.phoneNumber,
    province: input.province,
    district: input.district,
    municipality: input.municipality,
    wardNumber: input.wardNumber,
    tole: input.tole,
    caseInvestigator: input.caseInvestigator,
    caseState: input.caseState,
  };
}

const Information_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.cases","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"caseCoordinates","default":{"kind":"nothing"},"name":"caseCoordinates","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.cases","name":"Coordinates"}},"parameters":[]}},{"annotations":[],"serializedName":"reportingInstitution","default":{"kind":"nothing"},"name":"reportingInstitution","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"nameOfCase","default":{"kind":"nothing"},"name":"nameOfCase","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"phoneNumber","default":{"kind":"nothing"},"name":"phoneNumber","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"province","default":{"kind":"nothing"},"name":"province","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"district","default":{"kind":"nothing"},"name":"district","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"municipality","default":{"kind":"nothing"},"name":"municipality","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"wardNumber","default":{"kind":"nothing"},"name":"wardNumber","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"tole","default":{"kind":"nothing"},"name":"tole","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"caseInvestigator","default":{"kind":"nothing"},"name":"caseInvestigator","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"caseState","default":{"kind":"nothing"},"name":"caseState","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.cases","name":"CaseState"}},"parameters":[]}}]}},"name":"Information","version":{"kind":"nothing"}}};

export const snInformation: ADL.ScopedName = {moduleName:"covhub.cases", name:"Information"};

export function texprInformation(): ADL.ATypeExpr<Information> {
  return {value : {typeRef : {kind: "reference", value : snInformation}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.cases.Coordinates" : Coordinates_AST,
  "covhub.cases.CaseState" : CaseState_AST,
  "covhub.cases.Information" : Information_AST
};
