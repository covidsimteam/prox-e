// @generated from adl module covhub.person

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Gender {
  pub individual: String,

  pub biological: String,
}

impl Gender {
  pub fn new(individual: String, biological: String) -> Gender {
    Gender {
      individual: individual,
      biological: biological,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Person {
  #[serde(rename="firstName")]
  pub first_name: String,

  #[serde(rename="lastName")]
  pub last_name: String,

  pub age: i16,

  pub gender: Gender,

  #[serde(rename="citizenshipNumber")]
  pub citizenship_number: String,

  #[serde(rename="passportNumber")]
  pub passport_number: String,

  #[serde(rename="licenceNumber")]
  pub licence_number: String,

  pub employer: String,

  #[serde(rename="employerProvidedId")]
  pub employer_provided_id: String,
}

impl Person {
  pub fn new(first_name: String, last_name: String, age: i16, gender: Gender, citizenship_number: String, passport_number: String, licence_number: String, employer: String, employer_provided_id: String) -> Person {
    Person {
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
      citizenship_number: citizenship_number,
      passport_number: passport_number,
      licence_number: licence_number,
      employer: employer,
      employer_provided_id: employer_provided_id,
    }
  }
}

pub type Persons = Vec<Person>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct UserId(pub String);

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EntityId(pub f64);
