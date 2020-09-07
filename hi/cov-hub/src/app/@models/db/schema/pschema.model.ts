export interface PSchema {
  _id: string;
  _rev?: string;
  fields: string[][];
}

export interface PSchemaDoc {
  _id: string;
  _rev?: string;
  pschema: string;
  fields: string[];
}
