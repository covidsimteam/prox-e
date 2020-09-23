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
