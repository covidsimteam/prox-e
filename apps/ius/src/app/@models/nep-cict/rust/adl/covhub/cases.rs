// @generated from adl module covhub.cases

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

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct CaseState {
  #[serde(rename="aFormFilled")]
  pub a_form_filled: bool,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,

  #[serde(rename="numberOfB1Forms")]
  pub number_of_b_1_forms: i16,

  #[serde(rename="numberOfB2Forms")]
  pub number_of_b_2_forms: i16,

  #[serde(rename="numberOfSwabs")]
  pub number_of_swabs: i16,

  #[serde(rename="numberOfPositiveContacts")]
  pub number_of_positive_contacts: i16,

  #[serde(rename="sourceOfInfection")]
  pub source_of_infection: String,

  #[serde(rename="placeOfInfection")]
  pub place_of_infection: Coordinates,
}

impl CaseState {
  pub fn new(a_form_filled: bool, number_of_contacts: i16, number_of_b_1_forms: i16, number_of_b_2_forms: i16, number_of_swabs: i16, number_of_positive_contacts: i16, source_of_infection: String, place_of_infection: Coordinates) -> CaseState {
    CaseState {
      a_form_filled: a_form_filled,
      number_of_contacts: number_of_contacts,
      number_of_b_1_forms: number_of_b_1_forms,
      number_of_b_2_forms: number_of_b_2_forms,
      number_of_swabs: number_of_swabs,
      number_of_positive_contacts: number_of_positive_contacts,
      source_of_infection: source_of_infection,
      place_of_infection: place_of_infection,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Information {
  #[serde(rename="caseCoordinates")]
  pub case_coordinates: Coordinates,

  #[serde(rename="reportingInstitution")]
  pub reporting_institution: String,

  #[serde(rename="nameOfCase")]
  pub name_of_case: String,

  #[serde(rename="phoneNumber")]
  pub phone_number: String,

  pub province: String,

  pub district: String,

  pub municipality: String,

  #[serde(rename="wardNumber")]
  pub ward_number: String,

  pub tole: String,

  #[serde(rename="caseInvestigator")]
  pub case_investigator: String,

  #[serde(rename="caseState")]
  pub case_state: CaseState,
}

impl Information {
  pub fn new(case_coordinates: Coordinates, reporting_institution: String, name_of_case: String, phone_number: String, province: String, district: String, municipality: String, ward_number: String, tole: String, case_investigator: String, case_state: CaseState) -> Information {
    Information {
      case_coordinates: case_coordinates,
      reporting_institution: reporting_institution,
      name_of_case: name_of_case,
      phone_number: phone_number,
      province: province,
      district: district,
      municipality: municipality,
      ward_number: ward_number,
      tole: tole,
      case_investigator: case_investigator,
      case_state: case_state,
    }
  }
}
