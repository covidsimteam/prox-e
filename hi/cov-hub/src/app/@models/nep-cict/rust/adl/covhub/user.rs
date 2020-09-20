// @generated from adl module covhub.user

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct User {
  pub email: String,

  #[serde(rename="fullName")]
  pub full_name: String,
}

impl User {
  pub fn new(email: String, full_name: String) -> User {
    User {
      email: email,
      full_name: full_name,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Address {
  pub id: i32,

  pub details: Vec<String>,
}

impl Address {
  pub fn new(id: i32, details: Vec<String>) -> Address {
    Address {
      id: id,
      details: details,
    }
  }
}
