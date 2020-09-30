// @generated from adl module covdb.model

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct DbTable {
  #[serde(rename="tableName")]
  pub table_name: String,

  #[serde(rename="primaryKey")]
  pub primary_key: Vec<String>,
}

impl DbTable {
  pub fn new(table_name: String, primary_key: Vec<String>) -> DbTable {
    DbTable {
      table_name: table_name,
      primary_key: primary_key,
    }
  }
}

pub type DbField = String;

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
