/* @generated from adl module covhub.user */

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
  {"moduleName":"covhub.user","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"xLat","default":{"kind":"nothing"},"name":"xLat","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"yLng","default":{"kind":"nothing"},"name":"yLng","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"zAlt","default":{"kind":"nothing"},"name":"zAlt","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"time","default":{"kind":"nothing"},"name":"time","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}]}},"name":"Coordinates","version":{"kind":"nothing"}}};

export const snCoordinates: ADL.ScopedName = {moduleName:"covhub.user", name:"Coordinates"};

export function texprCoordinates(): ADL.ATypeExpr<Coordinates> {
  return {value : {typeRef : {kind: "reference", value : snCoordinates}, parameters : []}};
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

export interface User {
  email: string;
  fullName: string;
  locations: {[key: string]: Coordinates};
  addresses: {[key: string]: Address};
}

export function makeUser(
  input: {
    email: string,
    fullName: string,
    locations: {[key: string]: Coordinates},
    addresses: {[key: string]: Address},
  }
): User {
  return {
    email: input.email,
    fullName: input.fullName,
    locations: input.locations,
    addresses: input.addresses,
  };
}

const User_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.user","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"email","default":{"kind":"nothing"},"name":"email","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"fullName","default":{"kind":"nothing"},"name":"fullName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"locations","default":{"kind":"nothing"},"name":"locations","typeExpr":{"typeRef":{"kind":"primitive","value":"StringMap"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.user","name":"Coordinates"}},"parameters":[]}]}},{"annotations":[],"serializedName":"addresses","default":{"kind":"nothing"},"name":"addresses","typeExpr":{"typeRef":{"kind":"primitive","value":"StringMap"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covhub.user","name":"Address"}},"parameters":[]}]}}]}},"name":"User","version":{"kind":"nothing"}}};

export const snUser: ADL.ScopedName = {moduleName:"covhub.user", name:"User"};

export function texprUser(): ADL.ATypeExpr<User> {
  return {value : {typeRef : {kind: "reference", value : snUser}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.user.Coordinates" : Coordinates_AST,
  "covhub.user.Address" : Address_AST,
  "covhub.user.User" : User_AST
};
