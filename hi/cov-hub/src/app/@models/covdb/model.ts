/* @generated from adl module covdb.model */

import * as ADL from './../runtime/adl';

export interface DbTable {
  tableName: string;
  primaryKey: string[];
}

export function makeDbTable(
  input: {
    tableName: string,
    primaryKey: string[],
  }
): DbTable {
  return {
    tableName: input.tableName,
    primaryKey: input.primaryKey,
  };
}

const DbTable_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.model","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"tableName","default":{"kind":"nothing"},"name":"tableName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"primaryKey","default":{"kind":"nothing"},"name":"primaryKey","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"DbTable","version":{"kind":"nothing"}}};

export const snDbTable: ADL.ScopedName = {moduleName:"covdb.model", name:"DbTable"};

export function texprDbTable(): ADL.ATypeExpr<DbTable> {
  return {value : {typeRef : {kind: "reference", value : snDbTable}, parameters : []}};
}

export type DbField = string;

const DbField_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.model","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbField","version":{"kind":"nothing"}}};

export const snDbField: ADL.ScopedName = {moduleName:"covdb.model", name:"DbField"};

export function texprDbField(): ADL.ATypeExpr<DbField> {
  return {value : {typeRef : {kind: "reference", value : snDbField}, parameters : []}};
}

export interface User {
  email: string;
  fullName: string;
}

export function makeUser(
  input: {
    email: string,
    fullName: string,
  }
): User {
  return {
    email: input.email,
    fullName: input.fullName,
  };
}

const User_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.model","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"fullName","default":{"kind":"nothing"},"name":"fullName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"User","version":{"kind":"nothing"}}};

export const snUser: ADL.ScopedName = {moduleName:"covdb.model", name:"User"};

export function texprUser(): ADL.ATypeExpr<User> {
  return {value : {typeRef : {kind: "reference", value : snUser}, parameters : []}};
}

export interface Address {
  id: number;
  details: string[];
}

export function makeAddress(
  input: {
    id: number,
    details: string[],
  }
): Address {
  return {
    id: input.id,
    details: input.details,
  };
}

const Address_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.model","decl":{"annotations":[{"v1":{"moduleName":"covdb.model","name":"DbTable"},"v2":{"primaryKey":["id"],"tableName":"covhub.address"}}],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"Int32"},"parameters":[]}},{"annotations":[],"serializedName":"details","default":{"kind":"nothing"},"name":"details","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"Address","version":{"kind":"nothing"}}};

export const snAddress: ADL.ScopedName = {moduleName:"covdb.model", name:"Address"};

export function texprAddress(): ADL.ATypeExpr<Address> {
  return {value : {typeRef : {kind: "reference", value : snAddress}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covdb.model.DbTable" : DbTable_AST,
  "covdb.model.DbField" : DbField_AST,
  "covdb.model.User" : User_AST,
  "covdb.model.Address" : Address_AST
};
