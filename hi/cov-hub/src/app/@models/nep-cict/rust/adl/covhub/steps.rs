// @generated from adl module covhub.steps

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step1 {
  #[serde(rename="coordinatorInitiated")]
  pub coordinator_initiated: bool,

  #[serde(rename="coordinatorSubmitted")]
  pub coordinator_submitted: bool,

  #[serde(rename="yellowCellsInititated")]
  pub yellow_cells_inititated: bool,

  #[serde(rename="yellowCellsUpdated")]
  pub yellow_cells_updated: Vec<bool>,

  #[serde(rename="yellowCellsFilled")]
  pub yellow_cells_filled: Vec<bool>,

  #[serde(rename="caseInvestigatorAssigned")]
  pub case_investigator_assigned: bool,

  #[serde(rename="oneDayReached")]
  pub one_day_reached: bool,

  #[serde(rename="twoDaysReached")]
  pub two_days_reached: bool,
}

impl Step1 {
  pub fn new(coordinator_initiated: bool, coordinator_submitted: bool, yellow_cells_inititated: bool, yellow_cells_updated: Vec<bool>, yellow_cells_filled: Vec<bool>, case_investigator_assigned: bool, one_day_reached: bool, two_days_reached: bool) -> Step1 {
    Step1 {
      coordinator_initiated: coordinator_initiated,
      coordinator_submitted: coordinator_submitted,
      yellow_cells_inititated: yellow_cells_inititated,
      yellow_cells_updated: yellow_cells_updated,
      yellow_cells_filled: yellow_cells_filled,
      case_investigator_assigned: case_investigator_assigned,
      one_day_reached: one_day_reached,
      two_days_reached: two_days_reached,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step2Stats {
  #[serde(rename="sourcesOfInfection")]
  pub sources_of_infection: Vec<String>,

  #[serde(rename="placesOfInfection")]
  pub places_of_infection: Vec<String>,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,
}

impl Step2Stats {
  pub fn new(sources_of_infection: Vec<String>, places_of_infection: Vec<String>, number_of_contacts: i16) -> Step2Stats {
    Step2Stats {
      sources_of_infection: sources_of_infection,
      places_of_infection: places_of_infection,
      number_of_contacts: number_of_contacts,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step2 {
  #[serde(rename="caseName")]
  pub case_name: String,

  #[serde(rename="caseSelected")]
  pub case_selected: bool,

  #[serde(rename="aFormInitiated")]
  pub a_form_initiated: bool,

  #[serde(rename="aFormFilled")]
  pub a_form_filled: bool,

  #[serde(rename="yellowUpdateStarted")]
  pub yellow_update_started: bool,

  #[serde(rename="step2Stats")]
  pub step_2_stats: Step2Stats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step2 {
  pub fn new(case_name: String, case_selected: bool, a_form_initiated: bool, a_form_filled: bool, yellow_update_started: bool, step_2_stats: Step2Stats, yellow_update_finished: bool) -> Step2 {
    Step2 {
      case_name: case_name,
      case_selected: case_selected,
      a_form_initiated: a_form_initiated,
      a_form_filled: a_form_filled,
      yellow_update_started: yellow_update_started,
      step_2_stats: step_2_stats,
      yellow_update_finished: yellow_update_finished,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step3 {
  #[serde(rename="contactTracer")]
  pub contact_tracer: String,

  #[serde(rename="numberOfB1Forms")]
  pub number_of_b_1_forms: i16,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,

  #[serde(rename="caseName")]
  pub case_name: String,

  #[serde(rename="caseSelected")]
  pub case_selected: bool,

  #[serde(rename="b1FormsInitiated")]
  pub b_1_forms_initiated: Vec<String>,

  #[serde(rename="b1FormsFilled")]
  pub b_1_forms_filled: Vec<String>,

  #[serde(rename="yellowUpdateStarted")]
  pub yellow_update_started: bool,

  #[serde(rename="step2Stats")]
  pub step_2_stats: Step2Stats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step3 {
  pub fn new(contact_tracer: String, number_of_b_1_forms: i16, number_of_contacts: i16, case_name: String, case_selected: bool, b_1_forms_initiated: Vec<String>, b_1_forms_filled: Vec<String>, yellow_update_started: bool, step_2_stats: Step2Stats, yellow_update_finished: bool) -> Step3 {
    Step3 {
      contact_tracer: contact_tracer,
      number_of_b_1_forms: number_of_b_1_forms,
      number_of_contacts: number_of_contacts,
      case_name: case_name,
      case_selected: case_selected,
      b_1_forms_initiated: b_1_forms_initiated,
      b_1_forms_filled: b_1_forms_filled,
      yellow_update_started: yellow_update_started,
      step_2_stats: step_2_stats,
      yellow_update_finished: yellow_update_finished,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step4 {
  #[serde(rename="contactFollower")]
  pub contact_follower: String,

  #[serde(rename="numberOfB2Forms")]
  pub number_of_b_2_forms: i16,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,

  #[serde(rename="caseName")]
  pub case_name: String,

  #[serde(rename="caseSelected")]
  pub case_selected: bool,

  #[serde(rename="b1FormsInitiated")]
  pub b_1_forms_initiated: Vec<String>,

  #[serde(rename="b1FormsFilled")]
  pub b_1_forms_filled: Vec<String>,

  #[serde(rename="yellowUpdateStarted")]
  pub yellow_update_started: bool,

  #[serde(rename="step2Stats")]
  pub step_2_stats: Step2Stats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step4 {
  pub fn new(contact_follower: String, number_of_b_2_forms: i16, number_of_contacts: i16, case_name: String, case_selected: bool, b_1_forms_initiated: Vec<String>, b_1_forms_filled: Vec<String>, yellow_update_started: bool, step_2_stats: Step2Stats, yellow_update_finished: bool) -> Step4 {
    Step4 {
      contact_follower: contact_follower,
      number_of_b_2_forms: number_of_b_2_forms,
      number_of_contacts: number_of_contacts,
      case_name: case_name,
      case_selected: case_selected,
      b_1_forms_initiated: b_1_forms_initiated,
      b_1_forms_filled: b_1_forms_filled,
      yellow_update_started: yellow_update_started,
      step_2_stats: step_2_stats,
      yellow_update_finished: yellow_update_finished,
    }
  }
}
