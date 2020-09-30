/* @generated from adl module covhub.person */

import * as ADL from './../runtime/adl';

export interface Gender {
  individual: string;
  biological: string;
}

export function makeGender(
  input: {
    individual: string,
    biological: string,
  }
): Gender {
  return {
    individual: input.individual,
    biological: input.biological,
  };
}

const Gender_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.person","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"individual","default":{"kind":"nothing"},"name":"individual","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"biological","default":{"kind":"nothing"},"name":"biological","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"Gender","version":{"kind":"nothing"}}};

export const snGender: ADL.ScopedName = {moduleName:"covhub.person", name:"Gender"};

export function texprGender(): ADL.ATypeExpr<Gender> {
  return {value : {typeRef : {kind: "reference", value : snGender}, parameters : []}};
}

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  citizenshipNumber: string;
  passportNumber: string;
  licenceNumber: string;
  employer: string;
  employerProvidedId: string;
}

export function makePerson(
  input: {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    citizenshipNumber: string,
    passportNumber: string,
    licenceNumber: string,
    employer: string,
    employerProvidedId: string,
  }
): Person {
  return {
    firstName: input.firstName,
    lastName: input.lastName,
    age: input.age,
    gender: input.gender,
    citizenshipNumber: input.citizenshipNumber,
    passportNumber: input.passportNumber,
    licenceNumber: input.licenceNumber,
    employer: input.employer,
    employerProvidedId: input.employerProvidedId,
  };
}

const Person_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.person","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"firstName","default":{"kind":"nothing"},"name":"firstName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"lastName","default":{"kind":"nothing"},"name":"lastName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"age","default":{"kind":"nothing"},"name":"age","typeExpr":{"typeRef":{"kind":"primitive","value":"Int16"},"parameters":[]}},{"annotations":[],"serializedName":"gender","default":{"kind":"nothing"},"name":"gender","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.person","name":"Gender"}},"parameters":[]}},{"annotations":[],"serializedName":"citizenshipNumber","default":{"kind":"nothing"},"name":"citizenshipNumber","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"passportNumber","default":{"kind":"nothing"},"name":"passportNumber","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"licenceNumber","default":{"kind":"nothing"},"name":"licenceNumber","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"employer","default":{"kind":"nothing"},"name":"employer","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"employerProvidedId","default":{"kind":"nothing"},"name":"employerProvidedId","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"Person","version":{"kind":"nothing"}}};

export const snPerson: ADL.ScopedName = {moduleName:"covhub.person", name:"Person"};

export function texprPerson(): ADL.ATypeExpr<Person> {
  return {value : {typeRef : {kind: "reference", value : snPerson}, parameters : []}};
}

export type Persons = Person[];

const Persons_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.person","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.person","name":"Person"}},"parameters":[]}]}}},"name":"Persons","version":{"kind":"nothing"}}};

export const snPersons: ADL.ScopedName = {moduleName:"covhub.person", name:"Persons"};

export function texprPersons(): ADL.ATypeExpr<Persons> {
  return {value : {typeRef : {kind: "reference", value : snPersons}, parameters : []}};
}

export type UserId = string;

const UserId_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.person","decl":{"annotations":[],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"UserId","version":{"kind":"nothing"}}};

export const snUserId: ADL.ScopedName = {moduleName:"covhub.person", name:"UserId"};

export function texprUserId(): ADL.ATypeExpr<UserId> {
  return {value : {typeRef : {kind: "reference", value : snUserId}, parameters : []}};
}

export type EntityId = number;

const EntityId_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.person","decl":{"annotations":[],"type_":{"kind":"newtype_","value":{"typeParams":[],"default":{"kind":"nothing"},"typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}},"name":"EntityId","version":{"kind":"nothing"}}};

export const snEntityId: ADL.ScopedName = {moduleName:"covhub.person", name:"EntityId"};

export function texprEntityId(): ADL.ATypeExpr<EntityId> {
  return {value : {typeRef : {kind: "reference", value : snEntityId}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.person.Gender" : Gender_AST,
  "covhub.person.Person" : Person_AST,
  "covhub.person.Persons" : Persons_AST,
  "covhub.person.UserId" : UserId_AST,
  "covhub.person.EntityId" : EntityId_AST
};
