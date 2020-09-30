/* @generated from adl module covdb.twod */

import * as ADL from './../runtime/adl';

export interface Position {
  xLat: number;
  yLng: number;
}

export function makePosition(
  input: {
    xLat: number,
    yLng: number,
  }
): Position {
  return {
    xLat: input.xLat,
    yLng: input.yLng,
  };
}

const Position_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.twod","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"xLat","default":{"kind":"nothing"},"name":"xLat","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"yLng","default":{"kind":"nothing"},"name":"yLng","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}]}},"name":"Position","version":{"kind":"nothing"}}};

export const snPosition: ADL.ScopedName = {moduleName:"covdb.twod", name:"Position"};

export function texprPosition(): ADL.ATypeExpr<Position> {
  return {value : {typeRef : {kind: "reference", value : snPosition}, parameters : []}};
}

export interface Picture_Circle {
  kind: 'circle';
  value: Circle;
}
export interface Picture_Rectangle {
  kind: 'rectangle';
  value: Rectangle;
}
export interface Picture_Composed {
  kind: 'composed';
  value: Picture[];
}
export interface Picture_Translated {
  kind: 'translated';
  value: Translated<Picture>;
}

export type Picture = Picture_Circle | Picture_Rectangle | Picture_Composed | Picture_Translated;

export interface PictureOpts {
  circle: Circle;
  rectangle: Rectangle;
  composed: Picture[];
  translated: Translated<Picture>;
}

export function makePicture<K extends keyof PictureOpts>(kind: K, value: PictureOpts[K]) { return {kind, value}; }

const Picture_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.twod","decl":{"annotations":[],"type_":{"kind":"union_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"circle","default":{"kind":"nothing"},"name":"circle","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covdb.twod","name":"Circle"}},"parameters":[]}},{"annotations":[],"serializedName":"rectangle","default":{"kind":"nothing"},"name":"rectangle","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covdb.twod","name":"Rectangle"}},"parameters":[]}},{"annotations":[],"serializedName":"composed","default":{"kind":"nothing"},"name":"composed","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covdb.twod","name":"Picture"}},"parameters":[]}]}},{"annotations":[],"serializedName":"translated","default":{"kind":"nothing"},"name":"translated","typeExpr":{"typeRef":{"kind":"reference","value":{"moduleName":"covdb.twod","name":"Translated"}},"parameters":[{"typeRef":{"kind":"reference","value":{"moduleName":"covdb.twod","name":"Picture"}},"parameters":[]}]}}]}},"name":"Picture","version":{"kind":"nothing"}}};

export const snPicture: ADL.ScopedName = {moduleName:"covdb.twod", name:"Picture"};

export function texprPicture(): ADL.ATypeExpr<Picture> {
  return {value : {typeRef : {kind: "reference", value : snPicture}, parameters : []}};
}

export interface Circle {
  radius: number;
}

export function makeCircle(
  input: {
    radius: number,
  }
): Circle {
  return {
    radius: input.radius,
  };
}

const Circle_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.twod","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"radius","default":{"kind":"nothing"},"name":"radius","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}]}},"name":"Circle","version":{"kind":"nothing"}}};

export const snCircle: ADL.ScopedName = {moduleName:"covdb.twod", name:"Circle"};

export function texprCircle(): ADL.ATypeExpr<Circle> {
  return {value : {typeRef : {kind: "reference", value : snCircle}, parameters : []}};
}

export interface Rectangle {
  width: number;
  height: number;
}

export function makeRectangle(
  input: {
    width: number,
    height: number,
  }
): Rectangle {
  return {
    width: input.width,
    height: input.height,
  };
}

const Rectangle_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.twod","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"width","default":{"kind":"nothing"},"name":"width","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"height","default":{"kind":"nothing"},"name":"height","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}}]}},"name":"Rectangle","version":{"kind":"nothing"}}};

export const snRectangle: ADL.ScopedName = {moduleName:"covdb.twod", name:"Rectangle"};

export function texprRectangle(): ADL.ATypeExpr<Rectangle> {
  return {value : {typeRef : {kind: "reference", value : snRectangle}, parameters : []}};
}

export interface Translated<T> {
  xoffset: number;
  yoffset: number;
  object: T;
}

export function makeTranslated<T>(
  input: {
    xoffset?: number,
    yoffset?: number,
    object: T,
  }
): Translated<T> {
  return {
    xoffset: input.xoffset === undefined ? 0 : input.xoffset,
    yoffset: input.yoffset === undefined ? 0 : input.yoffset,
    object: input.object,
  };
}

const Translated_AST : ADL.ScopedDecl =
  {"moduleName":"covdb.twod","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":["T"],"fields":[{"annotations":[],"serializedName":"xoffset","default":{"kind":"just","value":0},"name":"xoffset","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"yoffset","default":{"kind":"just","value":0},"name":"yoffset","typeExpr":{"typeRef":{"kind":"primitive","value":"Double"},"parameters":[]}},{"annotations":[],"serializedName":"object","default":{"kind":"nothing"},"name":"object","typeExpr":{"typeRef":{"kind":"typeParam","value":"T"},"parameters":[]}}]}},"name":"Translated","version":{"kind":"nothing"}}};

export const snTranslated: ADL.ScopedName = {moduleName:"covdb.twod", name:"Translated"};

export function texprTranslated<T>(texprT : ADL.ATypeExpr<T>): ADL.ATypeExpr<Translated<T>> {
  return {value : {typeRef : {kind: "reference", value : {moduleName : "covdb.twod",name : "Translated"}}, parameters : [texprT.value]}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covdb.twod.Position" : Position_AST,
  "covdb.twod.Picture" : Picture_AST,
  "covdb.twod.Circle" : Circle_AST,
  "covdb.twod.Rectangle" : Rectangle_AST,
  "covdb.twod.Translated" : Translated_AST
};
