module covhub.person {

  struct Gender {
    String individual;
    String biological;
  };

  struct Person
  {
      String firstName;
      String lastName;
      Int16 age;
      Gender gender;
  };

  type Persons = Vector<Person>;

  newtype UserId = String;

  newtype EntityId = Double;

};

