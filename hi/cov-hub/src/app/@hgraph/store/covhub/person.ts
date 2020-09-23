
export interface Gender {
  individual: string;
  biological: string;
}

export function makeGender(
  input: {
    individual: string,
    biological: string,
  }
): Gender {
  return {
    individual: input.individual,
    biological: input.biological,
  };
}

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  citizenshipNumber: string;
  passportNumber: string;
  licenceNumber: string;
  employer: string;
  employerProvidedId: string;
}

export function makePerson(
  input: {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    citizenshipNumber: string,
    passportNumber: string,
    licenceNumber: string,
    employer: string,
    employerProvidedId: string,
  }
): Person {
  return {
    firstName: input.firstName,
    lastName: input.lastName,
    age: input.age,
    gender: input.gender,
    citizenshipNumber: input.citizenshipNumber,
    passportNumber: input.passportNumber,
    licenceNumber: input.licenceNumber,
    employer: input.employer,
    employerProvidedId: input.employerProvidedId,
  };
}


export type Persons = Person[];


export type UserId = string;

export type EntityId = number;
