/* @generated from adl module covhub.dbannotations */

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
  {"moduleName":"covhub.dbannotations","decl":{"annotations":[],"type_":{"kind":"struct_","value":{"typeParams":[],"fields":[{"annotations":[],"serializedName":"tableName","default":{"kind":"nothing"},"name":"tableName","typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}},{"annotations":[],"serializedName":"primaryKey","default":{"kind":"nothing"},"name":"primaryKey","typeExpr":{"typeRef":{"kind":"primitive","value":"Vector"},"parameters":[{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}]}}]}},"name":"DbTable","version":{"kind":"nothing"}}};

export const snDbTable: ADL.ScopedName = {moduleName:"covhub.dbannotations", name:"DbTable"};

export function texprDbTable(): ADL.ATypeExpr<DbTable> {
  return {value : {typeRef : {kind: "reference", value : snDbTable}, parameters : []}};
}

export type DbField = string;

const DbField_AST : ADL.ScopedDecl =
  {"moduleName":"covhub.dbannotations","decl":{"annotations":[],"type_":{"kind":"type_","value":{"typeParams":[],"typeExpr":{"typeRef":{"kind":"primitive","value":"String"},"parameters":[]}}},"name":"DbField","version":{"kind":"nothing"}}};

export const snDbField: ADL.ScopedName = {moduleName:"covhub.dbannotations", name:"DbField"};

export function texprDbField(): ADL.ATypeExpr<DbField> {
  return {value : {typeRef : {kind: "reference", value : snDbField}, parameters : []}};
}

export const _AST_MAP: { [key: string]: ADL.ScopedDecl } = {
  "covhub.dbannotations.DbTable" : DbTable_AST,
  "covhub.dbannotations.DbField" : DbField_AST
};
