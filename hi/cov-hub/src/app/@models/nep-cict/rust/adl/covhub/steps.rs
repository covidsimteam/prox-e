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
pub struct StepStats {
  #[serde(rename="sourcesOfInfection")]
  pub sources_of_infection: Vec<String>,

  #[serde(rename="placesOfInfection")]
  pub places_of_infection: Vec<String>,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,
}

impl StepStats {
  pub fn new(sources_of_infection: Vec<String>, places_of_infection: Vec<String>, number_of_contacts: i16) -> StepStats {
    StepStats {
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

  #[serde(rename="stepStats")]
  pub step_stats: StepStats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step2 {
  pub fn new(case_name: String, case_selected: bool, a_form_initiated: bool, a_form_filled: bool, yellow_update_started: bool, step_stats: StepStats, yellow_update_finished: bool) -> Step2 {
    Step2 {
      case_name: case_name,
      case_selected: case_selected,
      a_form_initiated: a_form_initiated,
      a_form_filled: a_form_filled,
      yellow_update_started: yellow_update_started,
      step_stats: step_stats,
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

  #[serde(rename="stepStats")]
  pub step_stats: StepStats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step3 {
  pub fn new(contact_tracer: String, number_of_b_1_forms: i16, number_of_contacts: i16, case_name: String, case_selected: bool, b_1_forms_initiated: Vec<String>, b_1_forms_filled: Vec<String>, yellow_update_started: bool, step_stats: StepStats, yellow_update_finished: bool) -> Step3 {
    Step3 {
      contact_tracer: contact_tracer,
      number_of_b_1_forms: number_of_b_1_forms,
      number_of_contacts: number_of_contacts,
      case_name: case_name,
      case_selected: case_selected,
      b_1_forms_initiated: b_1_forms_initiated,
      b_1_forms_filled: b_1_forms_filled,
      yellow_update_started: yellow_update_started,
      step_stats: step_stats,
      yellow_update_finished: yellow_update_finished,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step4 {
  #[serde(rename="contactFollower")]
  pub contact_follower: String,

  #[serde(rename="fourteenDayCounter")]
  pub fourteen_day_counter: i16,

  #[serde(rename="numberOfB2Forms")]
  pub number_of_b_2_forms: i16,

  #[serde(rename="numberOfContacts")]
  pub number_of_contacts: i16,

  #[serde(rename="caseName")]
  pub case_name: String,

  #[serde(rename="caseSelected")]
  pub case_selected: bool,

  #[serde(rename="b2FormsInitiated")]
  pub b_2_forms_initiated: Vec<String>,

  #[serde(rename="b2FormsFilled")]
  pub b_2_forms_filled: Vec<String>,

  #[serde(rename="yellowUpdateStarted")]
  pub yellow_update_started: bool,

  #[serde(rename="stepStats")]
  pub step_stats: StepStats,

  #[serde(rename="yellowUpdateFinished")]
  pub yellow_update_finished: bool,
}

impl Step4 {
  pub fn new(contact_follower: String, fourteen_day_counter: i16, number_of_b_2_forms: i16, number_of_contacts: i16, case_name: String, case_selected: bool, b_2_forms_initiated: Vec<String>, b_2_forms_filled: Vec<String>, yellow_update_started: bool, step_stats: StepStats, yellow_update_finished: bool) -> Step4 {
    Step4 {
      contact_follower: contact_follower,
      fourteen_day_counter: fourteen_day_counter,
      number_of_b_2_forms: number_of_b_2_forms,
      number_of_contacts: number_of_contacts,
      case_name: case_name,
      case_selected: case_selected,
      b_2_forms_initiated: b_2_forms_initiated,
      b_2_forms_filled: b_2_forms_filled,
      yellow_update_started: yellow_update_started,
      step_stats: step_stats,
      yellow_update_finished: yellow_update_finished,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step5 {
  #[serde(rename="labPersonnel")]
  pub lab_personnel: String,

  #[serde(rename="sixDayCounter")]
  pub six_day_counter: i16,

  #[serde(rename="labFormFilled")]
  pub lab_form_filled: bool,

  #[serde(rename="sampleCollected")]
  pub sample_collected: bool,

  pub printed: bool,

  #[serde(rename="sentToLab")]
  pub sent_to_lab: bool,
}

impl Step5 {
  pub fn new(lab_personnel: String, six_day_counter: i16, lab_form_filled: bool, sample_collected: bool, printed: bool, sent_to_lab: bool) -> Step5 {
    Step5 {
      lab_personnel: lab_personnel,
      six_day_counter: six_day_counter,
      lab_form_filled: lab_form_filled,
      sample_collected: sample_collected,
      printed: printed,
      sent_to_lab: sent_to_lab,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Step6 {
  pub positive: bool,

  #[serde(rename="sevenDayCounter")]
  pub seven_day_counter: i16,

  pub contacts: Vec<String>,

  #[serde(rename="allNotified")]
  pub all_notified: bool,
}

impl Step6 {
  pub fn new(positive: bool, seven_day_counter: i16, contacts: Vec<String>, all_notified: bool) -> Step6 {
    Step6 {
      positive: positive,
      seven_day_counter: seven_day_counter,
      contacts: contacts,
      all_notified: all_notified,
    }
  }
}
