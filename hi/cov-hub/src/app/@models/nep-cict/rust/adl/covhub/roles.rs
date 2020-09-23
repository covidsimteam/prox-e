// @generated from adl module covhub.roles

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Admin {
  pub domain: String,

  pub id: String,

  pub key: String,
}

impl Admin {
  pub fn new(domain: String, id: String, key: String) -> Admin {
    Admin {
      domain: domain,
      id: id,
      key: key,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct CaseInvestigator {
  pub id: String,

  #[serde(rename="aForms")]
  pub a_forms: Vec<String>,

  #[serde(rename="aFormsStarted")]
  pub a_forms_started: Vec<String>,

  #[serde(rename="aFormsFinished")]
  pub a_forms_finished: Vec<String>,
}

impl CaseInvestigator {
  pub fn new(id: String, a_forms: Vec<String>, a_forms_started: Vec<String>, a_forms_finished: Vec<String>) -> CaseInvestigator {
    CaseInvestigator {
      id: id,
      a_forms: a_forms,
      a_forms_started: a_forms_started,
      a_forms_finished: a_forms_finished,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct ContactTracer {
  pub id: String,

  #[serde(rename="b1Forms")]
  pub b_1_forms: Vec<String>,
}

impl ContactTracer {
  pub fn new(id: String, b_1_forms: Vec<String>) -> ContactTracer {
    ContactTracer {
      id: id,
      b_1_forms: b_1_forms,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct ContactFollowup {
  pub id: String,

  #[serde(rename="b2Forms")]
  pub b_2_forms: Vec<String>,
}

impl ContactFollowup {
  pub fn new(id: String, b_2_forms: Vec<String>) -> ContactFollowup {
    ContactFollowup {
      id: id,
      b_2_forms: b_2_forms,
    }
  }
}

#[derive(Clone,Deserialize,Eq,Hash,PartialEq,Serialize)]
pub struct Coordinator {
  pub id: String,

  pub cases: Vec<String>,

  pub investigators: Vec<CaseInvestigator>,
}

impl Coordinator {
  pub fn new(id: String, cases: Vec<String>, investigators: Vec<CaseInvestigator>) -> Coordinator {
    Coordinator {
      id: id,
      cases: cases,
      investigators: investigators,
    }
  }
}
