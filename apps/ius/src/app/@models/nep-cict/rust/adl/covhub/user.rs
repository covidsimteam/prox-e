// @generated from adl module covhub.user

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Coordinates {
  #[serde(rename="xLat")]
  pub x_lat: f64,

  #[serde(rename="yLng")]
  pub y_lng: f64,

  #[serde(rename="zAlt")]
  pub z_alt: f64,

  pub time: f64,
}

impl Coordinates {
  pub fn new(x_lat: f64, y_lng: f64, z_alt: f64, time: f64) -> Coordinates {
    Coordinates {
      x_lat: x_lat,
      y_lng: y_lng,
      z_alt: z_alt,
      time: time,
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

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct User {
  pub email: String,

  #[serde(rename="fullName")]
  pub full_name: String,

  pub locations: std::collections::HashMap<String,Coordinates>,

  pub addresses: std::collections::HashMap<String,Address>,
}

impl User {
  pub fn new(email: String, full_name: String, locations: std::collections::HashMap<String,Coordinates>, addresses: std::collections::HashMap<String,Address>) -> User {
    User {
      email: email,
      full_name: full_name,
      locations: locations,
      addresses: addresses,
    }
  }
}
