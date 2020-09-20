/* @generated from adl module covhub.user */

import * as ADL from './../runtime/adl';

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
  {"moduleName":"covhub.user","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"fullName","default":{"kind":"nothing"},"name":"fullName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}]}},"name":"User","version":{"kind":"nothing"}}};

export const snUser: ADL.ScopedName = {moduleName:"covhub.user", name:"User"};

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
  {"moduleName":"covhub.user","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"id","default":{"kind":"nothing"},"name":"id","typeExpr":{"typeRef":{"kind":"primitive","value":"Int32"},"parameters":[]}},{"annotations":[],"serializedName":"details","default":{"kind":"nothing"},"name":"details","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"Address","version":{"kind":"nothing"}}};

export const snAddress: ADL.ScopedName = {moduleName:"covhub.user", name:"Address"};

export function texprAddress(): ADL.ATypeExpr<Address> {
  return {value : {typeRef : {kind: "reference", value : snAddress}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.user.User" : User_AST,
  "covhub.user.Address" : Address_AST
};
