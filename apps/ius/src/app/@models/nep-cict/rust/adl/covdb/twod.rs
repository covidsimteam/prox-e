// @generated from adl module covdb.twod

use serde::Deserialize;
use serde::Serialize;

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Position {
  #[serde(rename="xLat")]
  pub x_lat: f64,

  #[serde(rename="yLng")]
  pub y_lng: f64,
}

impl Position {
  pub fn new(x_lat: f64, y_lng: f64) -> Position {
    Position {
      x_lat: x_lat,
      y_lng: y_lng,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub enum Picture {
  #[serde(rename="circle")]
  Circle(Circle),

  #[serde(rename="rectangle")]
  Rectangle(Rectangle),

  #[serde(rename="composed")]
  Composed(Vec<Picture>),

  #[serde(rename="translated")]
  Translated(Translated<Picture>),
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Circle {
  pub radius: f64,
}

impl Circle {
  pub fn new(radius: f64) -> Circle {
    Circle {
      radius: radius,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Rectangle {
  pub width: f64,

  pub height: f64,
}

impl Rectangle {
  pub fn new(width: f64, height: f64) -> Rectangle {
    Rectangle {
      width: width,
      height: height,
    }
  }
}

#[derive(Clone,Deserialize,PartialEq,Serialize)]
pub struct Translated<T> {
  #[serde(default="Translated::<T>::def_xoffset")]
  pub xoffset: f64,

  #[serde(default="Translated::<T>::def_yoffset")]
  pub yoffset: f64,

  pub object: T,
}

impl<T> Translated<T> {
  pub fn new(object: T) -> Translated<T> {
    Translated {
      xoffset: Translated::<T>::def_xoffset(),
      yoffset: Translated::<T>::def_yoffset(),
      object: object,
    }
  }

  pub fn def_xoffset() -> f64 {
    0_f64
  }

  pub fn def_yoffset() -> f64 {
    0_f64
  }
}
