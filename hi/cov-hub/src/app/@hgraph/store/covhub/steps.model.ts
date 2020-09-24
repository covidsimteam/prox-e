export interface Step1 {
  coordinatorInitiated: boolean;
  coordinatorSubmitted: boolean;
  yellowCellsInititated: boolean;
  yellowCellsUpdated: boolean[];
  yellowCellsFilled: boolean[];
  caseInvestigatorAssigned: boolean;
  oneDayReached: boolean;
  twoDaysReached: boolean;
}

export type Step1Patch = Partial<Step1>;

export function makeStep1(
  input: {
    coordinatorInitiated: boolean,
    coordinatorSubmitted: boolean,
    yellowCellsInititated: boolean,
    yellowCellsUpdated: boolean[],
    yellowCellsFilled: boolean[],
    caseInvestigatorAssigned: boolean,
    oneDayReached: boolean,
    twoDaysReached: boolean,
  }
): Step1 {
  return {
    coordinatorInitiated: input.coordinatorInitiated,
    coordinatorSubmitted: input.coordinatorSubmitted,
    yellowCellsInititated: input.yellowCellsInititated,
    yellowCellsUpdated: input.yellowCellsUpdated,
    yellowCellsFilled: input.yellowCellsFilled,
    caseInvestigatorAssigned: input.caseInvestigatorAssigned,
    oneDayReached: input.oneDayReached,
    twoDaysReached: input.twoDaysReached,
  };
}

export interface StepStats {
  sourcesOfInfection: string[];
  placesOfInfection: string[];
  numberOfContacts: number;
}

export type StepStatsPatch = Partial<StepStats>;

export function makeStepStats(
  input: {
    sourcesOfInfection: string[],
    placesOfInfection: string[],
    numberOfContacts: number,
  }
): StepStats {
  return {
    sourcesOfInfection: input.sourcesOfInfection,
    placesOfInfection: input.placesOfInfection,
    numberOfContacts: input.numberOfContacts,
  };
}

export interface Step2 {
  caseName: string;
  caseSelected: boolean;
  aFormInitiated: boolean;
  aFormFilled: boolean;
  yellowUpdateStarted: boolean;
  stepStats: StepStats;
  yellowUpdateFinished: boolean;
}

export type Step2Patch = Partial<Step2>;

export function makeStep2(
  input: {
    caseName: string,
    caseSelected: boolean,
    aFormInitiated: boolean,
    aFormFilled: boolean,
    yellowUpdateStarted: boolean,
    stepStats: StepStats,
    yellowUpdateFinished: boolean,
  }
): Step2 {
  return {
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    aFormInitiated: input.aFormInitiated,
    aFormFilled: input.aFormFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    stepStats: input.stepStats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

export interface Step3 {
  contactTracer: string;
  numberOfB1Forms: number;
  numberOfContacts: number;
  caseName: string;
  caseSelected: boolean;
  b1FormsInitiated: string[];
  b1FormsFilled: string[];
  yellowUpdateStarted: boolean;
  stepStats: StepStats;
  yellowUpdateFinished: boolean;
}

export type Step3Patch = Partial<Step3>;

export function makeStep3(
  input: {
    contactTracer: string,
    numberOfB1Forms: number,
    numberOfContacts: number,
    caseName: string,
    caseSelected: boolean,
    b1FormsInitiated: string[],
    b1FormsFilled: string[],
    yellowUpdateStarted: boolean,
    stepStats: StepStats,
    yellowUpdateFinished: boolean,
  }
): Step3 {
  return {
    contactTracer: input.contactTracer,
    numberOfB1Forms: input.numberOfB1Forms,
    numberOfContacts: input.numberOfContacts,
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    b1FormsInitiated: input.b1FormsInitiated,
    b1FormsFilled: input.b1FormsFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    stepStats: input.stepStats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

export interface Step4 {
  contactFollower: string;
  fourteenDayCounter: number;
  numberOfB2Forms: number;
  numberOfContacts: number;
  caseName: string;
  caseSelected: boolean;
  b2FormsInitiated: string[];
  b2FormsFilled: string[];
  yellowUpdateStarted: boolean;
  stepStats: StepStats;
  yellowUpdateFinished: boolean;
}

export type Step4Patch = Partial<Step4>;

export function makeStep4(
  input: {
    contactFollower: string,
    fourteenDayCounter: number,
    numberOfB2Forms: number,
    numberOfContacts: number,
    caseName: string,
    caseSelected: boolean,
    b2FormsInitiated: string[],
    b2FormsFilled: string[],
    yellowUpdateStarted: boolean,
    stepStats: StepStats,
    yellowUpdateFinished: boolean,
  }
): Step4 {
  return {
    contactFollower: input.contactFollower,
    fourteenDayCounter: input.fourteenDayCounter,
    numberOfB2Forms: input.numberOfB2Forms,
    numberOfContacts: input.numberOfContacts,
    caseName: input.caseName,
    caseSelected: input.caseSelected,
    b2FormsInitiated: input.b2FormsInitiated,
    b2FormsFilled: input.b2FormsFilled,
    yellowUpdateStarted: input.yellowUpdateStarted,
    stepStats: input.stepStats,
    yellowUpdateFinished: input.yellowUpdateFinished,
  };
}

export interface Step5 {
  labPersonnel: string;
  sixDayCounter: number;
  labFormFilled: boolean;
  sampleCollected: boolean;
  printed: boolean;
  sentToLab: boolean;
}

export type Step5Patch = Partial<Step5>;

export function makeStep5(
  input: {
    labPersonnel: string,
    sixDayCounter: number,
    labFormFilled: boolean,
    sampleCollected: boolean,
    printed: boolean,
    sentToLab: boolean,
  }
): Step5 {
  return {
    labPersonnel: input.labPersonnel,
    sixDayCounter: input.sixDayCounter,
    labFormFilled: input.labFormFilled,
    sampleCollected: input.sampleCollected,
    printed: input.printed,
    sentToLab: input.sentToLab,
  };
}

export interface Step6 {
  positive: boolean;
  sevenDayCounter: number;
  contacts: string[];
  allNotified: boolean;
}

export type Step6Patch = Partial<Step6>;

export function makeStep6(
  input: {
    positive: boolean,
    sevenDayCounter: number,
    contacts: string[],
    allNotified: boolean,
  }
): Step6 {
  return {
    positive: input.positive,
    sevenDayCounter: input.sevenDayCounter,
    contacts: input.contacts,
    allNotified: input.allNotified,
  };
}
