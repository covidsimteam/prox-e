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
}

impl Person {
  pub fn new(first_name: String, last_name: String, age: i16, gender: Gender) -> Person {
    Person {
      first_name: first_name,
      last_name: last_name,
      age: age,
      gender: gender,
    }
  }
}

pub type Persons = Vec<Person>;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct UserId(pub String);

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct EntityId(pub f64);
