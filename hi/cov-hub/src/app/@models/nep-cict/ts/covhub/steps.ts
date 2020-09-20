/* @generated from adl module covhub.steps */

import * as ADL from './../runtime/adl';

export interface Step1 {
  coordinatorInitiated: boolean;
  coordinatorSubmitted: boolean;
  yellowCellsInititated: boolean;
  yellowCellsUpdated: boolean[];
  yellowCellsFilled: boolean[];
  caseInvestigatorAssigned: boolean;
  oneDayReached: boolean;
  twoDaysReached: boolean;
}

export function makeStep1(
  input: {
    coordinatorInitiated: boolean,
    coordinatorSubmitted: boolean,
    yellowCellsInititated: boolean,
    yellowCellsUpdated: boolean[],
    yellowCellsFilled: boolean[],
    caseInvestigatorAssigned: boolean,
    oneDayReached: boolean,
    twoDaysReached: boolean,
  }
): Step1 {
  return {
    coordinatorInitiated: input.coordinatorInitiated,
    coordinatorSubmitted: input.coordinatorSubmitted,
    yellowCellsInititated: input.yellowCellsInititated,
    yellowCellsUpdated: input.yellowCellsUpdated,
    yellowCellsFilled: input.yellowCellsFilled,
    caseInvestigatorAssigned: input.caseInvestigatorAssigned,
    oneDayReached: input.oneDayReached,
    twoDaysReached: input.twoDaysReached,
  };
}

const Step1_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.steps","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"coordinatorInitiated","default":{"kind":"nothing"},"name":"coordinatorInitiated","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"coordinatorSubmitted","default":{"kind":"nothing"},"name":"coordinatorSubmitted","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"yellowCellsInititated","default":{"kind":"nothing"},"name":"yellowCellsInititated","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"yellowCellsUpdated","default":{"kind":"nothing"},"name":"yellowCellsUpdated","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}]}},{"annotations":[],"serializedName":"yellowCellsFilled","default":{"kind":"nothing"},"name":"yellowCellsFilled","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}]}},{"annotations":[],"serializedName":"caseInvestigatorAssigned","default":{"kind":"nothing"},"name":"caseInvestigatorAssigned","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"oneDayReached","default":{"kind":"nothing"},"name":"oneDayReached","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"twoDaysReached","default":{"kind":"nothing"},"name":"twoDaysReached","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"Step1","version":{"kind":"nothing"}}};

export const snStep1: ADL.ScopedName = {moduleName:"covhub.steps", name:"Step1"};

export function texprStep1(): ADL.ATypeExpr<Step1> {
  return {value : {typeRef : {kind: "reference", value : snStep1}, parameters : []}};
}

export interface Step2Stats {
  sourcesOfInfection: string[];
  placesOfInfection: string[];
  numberOfContacts: number;
}

export function makeStep2Stats(
  input: {
    sourcesOfInfection: string[],
    placesOfInfection: string[],
    numberOfContacts: number,
  }
): Step2Stats {
  return {
    sourcesOfInfection: input.sourcesOfInfection,
    placesOfInfection: input.placesOfInfection,
    numberOfContacts: input.numberOfContacts,
  };
}

const Step2Stats_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.steps","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"sourcesOfInfection","default":{"kind":"nothing"},"name":"sourcesOfInfection","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"placesOfInfection","default":{"kind":"nothing"},"name":"placesOfInfection","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"numberOfContacts","default":{"kind":"nothing"},"name":"numberOfContacts","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}}]}},"name":"Step2Stats","version":{"kind":"nothing"}}};

export const snStep2Stats: ADL.ScopedName = {moduleName:"covhub.steps", name:"Step2Stats"};

export function texprStep2Stats(): ADL.ATypeExpr<Step2Stats> {
  return {value : {typeRef : {kind: "reference", value : snStep2Stats}, parameters : []}};
}

export interface Step2 {
  caseName: string;
  caseSelected: boolean;
  aFormInitiated: boolean;
  aFormFilled: boolean;
  yellowUpdateStarted: boolean;
  step2Stats: Step2Stats;
  yellowUpdateFinished: boolean;
}

export function makeStep2(
  input: {
    caseName: string,
    caseSelected: boolean,
    aFormInitiated: boolean,
    aFormFilled: boolean,
    yellowUpdateStarted: boolean,
    step2Stats: Step2Stats,
    yellowUpdateFinished: boolean,
  }
): Step2 {
  return {
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    aFormInitiated: input.aFormInitiated,
    aFormFilled: input.aFormFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    step2Stats: input.step2Stats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

const Step2_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.steps","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"caseName","default":{"kind":"nothing"},"name":"caseName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"caseSelected","default":{"kind":"nothing"},"name":"caseSelected","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"aFormInitiated","default":{"kind":"nothing"},"name":"aFormInitiated","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"aFormFilled","default":{"kind":"nothing"},"name":"aFormFilled","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"yellowUpdateStarted","default":{"kind":"nothing"},"name":"yellowUpdateStarted","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"step2Stats","default":{"kind":"nothing"},"name":"step2Stats","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.steps","name":"Step2Stats"}},"parameters":[]}},{"annotations":[],"serializedName":"yellowUpdateFinished","default":{"kind":"nothing"},"name":"yellowUpdateFinished","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"Step2","version":{"kind":"nothing"}}};

export const snStep2: ADL.ScopedName = {moduleName:"covhub.steps", name:"Step2"};

export function texprStep2(): ADL.ATypeExpr<Step2> {
  return {value : {typeRef : {kind: "reference", value : snStep2}, parameters : []}};
}

export interface Step3 {
  contactTracer: string;
  numberOfB1Forms: number;
  numberOfContacts: number;
  caseName: string;
  caseSelected: boolean;
  b1FormsInitiated: string[];
  b1FormsFilled: string[];
  yellowUpdateStarted: boolean;
  step2Stats: Step2Stats;
  yellowUpdateFinished: boolean;
}

export function makeStep3(
  input: {
    contactTracer: string,
    numberOfB1Forms: number,
    numberOfContacts: number,
    caseName: string,
    caseSelected: boolean,
    b1FormsInitiated: string[],
    b1FormsFilled: string[],
    yellowUpdateStarted: boolean,
    step2Stats: Step2Stats,
    yellowUpdateFinished: boolean,
  }
): Step3 {
  return {
    contactTracer: input.contactTracer,
    numberOfB1Forms: input.numberOfB1Forms,
    numberOfContacts: input.numberOfContacts,
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    b1FormsInitiated: input.b1FormsInitiated,
    b1FormsFilled: input.b1FormsFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    step2Stats: input.step2Stats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

const Step3_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.steps","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"contactTracer","default":{"kind":"nothing"},"name":"contactTracer","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfB1Forms","default":{"kind":"nothing"},"name":"numberOfB1Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfContacts","default":{"kind":"nothing"},"name":"numberOfContacts","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"caseName","default":{"kind":"nothing"},"name":"caseName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"caseSelected","default":{"kind":"nothing"},"name":"caseSelected","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"b1FormsInitiated","default":{"kind":"nothing"},"name":"b1FormsInitiated","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"b1FormsFilled","default":{"kind":"nothing"},"name":"b1FormsFilled","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"yellowUpdateStarted","default":{"kind":"nothing"},"name":"yellowUpdateStarted","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"step2Stats","default":{"kind":"nothing"},"name":"step2Stats","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.steps","name":"Step2Stats"}},"parameters":[]}},{"annotations":[],"serializedName":"yellowUpdateFinished","default":{"kind":"nothing"},"name":"yellowUpdateFinished","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"Step3","version":{"kind":"nothing"}}};

export const snStep3: ADL.ScopedName = {moduleName:"covhub.steps", name:"Step3"};

export function texprStep3(): ADL.ATypeExpr<Step3> {
  return {value : {typeRef : {kind: "reference", value : snStep3}, parameters : []}};
}

export interface Step4 {
  contactFollower: string;
  numberOfB2Forms: number;
  numberOfContacts: number;
  caseName: string;
  caseSelected: boolean;
  b1FormsInitiated: string[];
  b1FormsFilled: string[];
  yellowUpdateStarted: boolean;
  step2Stats: Step2Stats;
  yellowUpdateFinished: boolean;
}

export function makeStep4(
  input: {
    contactFollower: string,
    numberOfB2Forms: number,
    numberOfContacts: number,
    caseName: string,
    caseSelected: boolean,
    b1FormsInitiated: string[],
    b1FormsFilled: string[],
    yellowUpdateStarted: boolean,
    step2Stats: Step2Stats,
    yellowUpdateFinished: boolean,
  }
): Step4 {
  return {
    contactFollower: input.contactFollower,
    numberOfB2Forms: input.numberOfB2Forms,
    numberOfContacts: input.numberOfContacts,
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    b1FormsInitiated: input.b1FormsInitiated,
    b1FormsFilled: input.b1FormsFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    step2Stats: input.step2Stats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

const Step4_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.steps","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"contactFollower","default":{"kind":"nothing"},"name":"contactFollower","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfB2Forms","default":{"kind":"nothing"},"name":"numberOfB2Forms","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"numberOfContacts","default":{"kind":"nothing"},"name":"numberOfContacts","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"caseName","default":{"kind":"nothing"},"name":"caseName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"caseSelected","default":{"kind":"nothing"},"name":"caseSelected","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"b1FormsInitiated","default":{"kind":"nothing"},"name":"b1FormsInitiated","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"b1FormsFilled","default":{"kind":"nothing"},"name":"b1FormsFilled","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}},{"annotations":[],"serializedName":"yellowUpdateStarted","default":{"kind":"nothing"},"name":"yellowUpdateStarted","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}},{"annotations":[],"serializedName":"step2Stats","default":{"kind":"nothing"},"name":"step2Stats","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.steps","name":"Step2Stats"}},"parameters":[]}},{"annotations":[],"serializedName":"yellowUpdateFinished","default":{"kind":"nothing"},"name":"yellowUpdateFinished","typeExpr":{"typeRef":{"kind":"primitive","value":"Bool"},"parameters":[]}}]}},"name":"Step4","version":{"kind":"nothing"}}};

export const snStep4: ADL.ScopedName = {moduleName:"covhub.steps", name:"Step4"};

export function texprStep4(): ADL.ATypeExpr<Step4> {
  return {value : {typeRef : {kind: "reference", value : snStep4}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.steps.Step1" : Step1_AST,
  "covhub.steps.Step2Stats" : Step2Stats_AST,
  "covhub.steps.Step2" : Step2_AST,
  "covhub.steps.Step3" : Step3_AST,
  "covhub.steps.Step4" : Step4_AST
};
