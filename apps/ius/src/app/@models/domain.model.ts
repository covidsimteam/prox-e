import { EventEmitter } from '@angular/core';

export interface DBList {
  [dbId: string]: {
    name: string,
    instance?: PouchDB.Database,
    remoteInstance?: PouchDB.Database,
    listener?: EventEmitter<any> | undefined,
  };
}

export enum Databases {
  covidsimteam = 'covidsimteam',
  returnees = 'foreign_returnees',
  spatial = 'nepal_spatial',
  pcr_tests = 'pcr_tests',
  rdt_tests = 'rdt_tests',
  audit = 'usage_audit',
  matrix = 'matrix',
  roles = 'roles',
  history = 'history',
  cict = 'cict'
}

export interface ExistingDoc {
  _id: string;
  _rev: string;
  [key: string]: any;
}

export interface FeatureCollection<T> {
  _id: string;
  _rev: string;
  type: 'FeatureCollection';
  features: Feature<T>[];
}

export interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface Feature<P extends Properties> {
  type: 'Feature';
  geometry: Geometry;
  properties: P;
}

export interface Properties {
  [key: string]: any;
}

export interface GovProvinceProperties extends Properties {
  DDGN: number;
  FIRST_DCOD: number;
  FIRST_DIST: string;
  FIRST_GN_C: number;
  FIRST_STAT: number;
  SHAPE_LENG: number;
  SHAPE_AREA: number;
  Area: number;
}

export interface RoadAllProperties extends Properties {
  FNODE: number;
  TNODE: number;
  ROAD_CODE: string;
  TYPE: string;
  Shape_len: number;
}

export interface RoadMajorProperties extends Properties {
  MED_DESCRI: string;
  RTT_DESCRI: string;
  F_CODE_DES: string;
  ISO: string;
  ISOCOUNTRY: string;
}

export interface DryPortProperties extends Properties {
  Id: number;
  Name: string;
}

export interface SettlementProperties extends Properties {
  AREA: number;
  PERIMETER: number;
  SETTLEMENT: number;
  SETTLEME_1: number;
  VDCNAME: string;
  TOTALHOUSE: number;
  TOTALPOPLN: number;
  POLYGONID: number;
  SCALE: number;
  ANGLE: number;
  Longitude: number;
  Latitude: number;
}

export interface GovDistrictProperties extends Properties {
  DDGN: number;
  FIRST_DCOD: number;
  FIRST_DIST: string;
  FIRST_GN_C: number;
  FIRST_STAT: number;
  SHAPE_LENG: number;
  SHAPE_AREA: number;
  Area: number;
  Centroid_X: number;
  Centroid_Y: number;
  Geom?: any;
}



export interface WardProperties extends Properties {
  OBJECTID: number;
  DCODE: number;
  DISTRICT: string;
  DAN: string;
  DAS: number;
  GaPa_NaPa: string;
  Type_GN: string;
  GN_CODE: number;
  NEW_WARD_N: number;
  DDGNWW: number;
  CENTER: string;
  STATE_CODE: number;
  DDGN: number;
  Area_SQKM: number;
  Shape_Leng: number;
  Shape_Area: number;
}

export module Area {

  export interface PCR {
      Positive: number;
      Negative: number;
  }

  export interface RDT {
      Positive: number;
      Negative: number;
  }

  export interface Returnee {
      Quarantined: number;
      Not_Quarantined: number;
  }

  export interface Datum {
      DDGNWW: number;
      PCR: PCR;
      RDT: RDT;
      Returnee: Returnee;
  }

  export interface Stats {
      _id: string;
      _rev: string;
      data: Datum[];
  }
}

export type Doc = Partial<ExistingDoc>;

export enum CurrentUser {
  isLoggedIn = 'isLoggedIn',
  name = 'username',
  pass = 'password',
  roles = 'roles',
  id = 'id',
  token = 'token'
}

export interface BarChartDataSet {
  data: number[];
  label: string;
  backgroundColor: string;
}
