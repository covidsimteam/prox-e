import { Coordinates } from './coordinates.model';

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

export type CaseStatePatch = Partial<CaseState>;

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

export interface CaseInformation {
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

export type InformationPatch = Partial<CaseInformation>;

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
): CaseInformation {
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
