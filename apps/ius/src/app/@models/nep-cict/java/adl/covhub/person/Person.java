/* @generated from adl module covhub.person */

package adl.covhub.person;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.adl.runtime.Builders;
import org.adl.runtime.Factories;
import org.adl.runtime.Factory;
import org.adl.runtime.JsonBinding;
import org.adl.runtime.JsonBindings;
import org.adl.runtime.Lazy;
import org.adl.runtime.sys.adlast.ScopedName;
import org.adl.runtime.sys.adlast.TypeExpr;
import org.adl.runtime.sys.adlast.TypeRef;
import java.util.ArrayList;
import java.util.Objects;

public class Person {

  /* Members */

  private String firstName;
  private String lastName;
  private short age;
  private Gender gender;
  private String citizenshipNumber;
  private String passportNumber;
  private String licenceNumber;
  private String employer;
  private String employerProvidedId;

  /* Constructors */

  public Person(String firstName, String lastName, short age, Gender gender, String citizenshipNumber, String passportNumber, String licenceNumber, String employer, String employerProvidedId) {
    this.firstName = Objects.requireNonNull(firstName);
    this.lastName = Objects.requireNonNull(lastName);
    this.age = age;
    this.gender = Objects.requireNonNull(gender);
    this.citizenshipNumber = Objects.requireNonNull(citizenshipNumber);
    this.passportNumber = Objects.requireNonNull(passportNumber);
    this.licenceNumber = Objects.requireNonNull(licenceNumber);
    this.employer = Objects.requireNonNull(employer);
    this.employerProvidedId = Objects.requireNonNull(employerProvidedId);
  }

  public Person() {
    this.firstName = "";
    this.lastName = "";
    this.age = (short)0;
    this.gender = new Gender();
    this.citizenshipNumber = "";
    this.passportNumber = "";
    this.licenceNumber = "";
    this.employer = "";
    this.employerProvidedId = "";
  }

  public Person(Person other) {
    this.firstName = other.firstName;
    this.lastName = other.lastName;
    this.age = other.age;
    this.gender = Gender.FACTORY.create(other.gender);
    this.citizenshipNumber = other.citizenshipNumber;
    this.passportNumber = other.passportNumber;
    this.licenceNumber = other.licenceNumber;
    this.employer = other.employer;
    this.employerProvidedId = other.employerProvidedId;
  }

  /* Accessors and mutators */

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = Objects.requireNonNull(firstName);
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = Objects.requireNonNull(lastName);
  }

  public short getAge() {
    return age;
  }

  public void setAge(short age) {
    this.age = age;
  }

  public Gender getGender() {
    return gender;
  }

  public void setGender(Gender gender) {
    this.gender = Objects.requireNonNull(gender);
  }

  public String getCitizenshipNumber() {
    return citizenshipNumber;
  }

  public void setCitizenshipNumber(String citizenshipNumber) {
    this.citizenshipNumber = Objects.requireNonNull(citizenshipNumber);
  }

  public String getPassportNumber() {
    return passportNumber;
  }

  public void setPassportNumber(String passportNumber) {
    this.passportNumber = Objects.requireNonNull(passportNumber);
  }

  public String getLicenceNumber() {
    return licenceNumber;
  }

  public void setLicenceNumber(String licenceNumber) {
    this.licenceNumber = Objects.requireNonNull(licenceNumber);
  }

  public String getEmployer() {
    return employer;
  }

  public void setEmployer(String employer) {
    this.employer = Objects.requireNonNull(employer);
  }

  public String getEmployerProvidedId() {
    return employerProvidedId;
  }

  public void setEmployerProvidedId(String employerProvidedId) {
    this.employerProvidedId = Objects.requireNonNull(employerProvidedId);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Person)) {
      return false;
    }
    Person other = (Person) other0;
    return
      firstName.equals(other.firstName) &&
      lastName.equals(other.lastName) &&
      age == other.age &&
      gender.equals(other.gender) &&
      citizenshipNumber.equals(other.citizenshipNumber) &&
      passportNumber.equals(other.passportNumber) &&
      licenceNumber.equals(other.licenceNumber) &&
      employer.equals(other.employer) &&
      employerProvidedId.equals(other.employerProvidedId);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + firstName.hashCode();
    _result = _result * 37 + lastName.hashCode();
    _result = _result * 37 + (int) age;
    _result = _result * 37 + gender.hashCode();
    _result = _result * 37 + citizenshipNumber.hashCode();
    _result = _result * 37 + passportNumber.hashCode();
    _result = _result * 37 + licenceNumber.hashCode();
    _result = _result * 37 + employer.hashCode();
    _result = _result * 37 + employerProvidedId.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String firstName;
    private String lastName;
    private Short age;
    private Gender gender;
    private String citizenshipNumber;
    private String passportNumber;
    private String licenceNumber;
    private String employer;
    private String employerProvidedId;

    public Builder() {
      this.firstName = null;
      this.lastName = null;
      this.age = null;
      this.gender = null;
      this.citizenshipNumber = null;
      this.passportNumber = null;
      this.licenceNumber = null;
      this.employer = null;
      this.employerProvidedId = null;
    }

    public Builder setFirstName(String firstName) {
      this.firstName = Objects.requireNonNull(firstName);
      return this;
    }

    public Builder setLastName(String lastName) {
      this.lastName = Objects.requireNonNull(lastName);
      return this;
    }

    public Builder setAge(Short age) {
      this.age = Objects.requireNonNull(age);
      return this;
    }

    public Builder setGender(Gender gender) {
      this.gender = Objects.requireNonNull(gender);
      return this;
    }

    public Builder setCitizenshipNumber(String citizenshipNumber) {
      this.citizenshipNumber = Objects.requireNonNull(citizenshipNumber);
      return this;
    }

    public Builder setPassportNumber(String passportNumber) {
      this.passportNumber = Objects.requireNonNull(passportNumber);
      return this;
    }

    public Builder setLicenceNumber(String licenceNumber) {
      this.licenceNumber = Objects.requireNonNull(licenceNumber);
      return this;
    }

    public Builder setEmployer(String employer) {
      this.employer = Objects.requireNonNull(employer);
      return this;
    }

    public Builder setEmployerProvidedId(String employerProvidedId) {
      this.employerProvidedId = Objects.requireNonNull(employerProvidedId);
      return this;
    }

    public Person create() {
      Builders.checkFieldInitialized("Person", "firstName", firstName);
      Builders.checkFieldInitialized("Person", "lastName", lastName);
      Builders.checkFieldInitialized("Person", "age", age);
      Builders.checkFieldInitialized("Person", "gender", gender);
      Builders.checkFieldInitialized("Person", "citizenshipNumber", citizenshipNumber);
      Builders.checkFieldInitialized("Person", "passportNumber", passportNumber);
      Builders.checkFieldInitialized("Person", "licenceNumber", licenceNumber);
      Builders.checkFieldInitialized("Person", "employer", employer);
      Builders.checkFieldInitialized("Person", "employerProvidedId", employerProvidedId);
      return new Person(firstName, lastName, age, gender, citizenshipNumber, passportNumber, licenceNumber, employer, employerProvidedId);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Person> FACTORY = new Factory<Person>() {
    @Override
    public Person create() {
      return new Person();
    }

    @Override
    public Person create(Person other) {
      return new Person(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.person", "Person");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Person> jsonBinding() {
      return Person.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Person> jsonBinding() {
    final Lazy<JsonBinding<String>> firstName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> lastName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Short>> age = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Gender>> gender = new Lazy<>(() -> Gender.jsonBinding());
    final Lazy<JsonBinding<String>> citizenshipNumber = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> passportNumber = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> licenceNumber = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> employer = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> employerProvidedId = new Lazy<>(() -> JsonBindings.STRING);
    final Factory<Person> _factory = FACTORY;

    return new JsonBinding<Person>() {
      @Override
      public Factory<Person> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Person _value) {
        JsonObject _result = new JsonObject();
        _result.add("firstName", firstName.get().toJson(_value.firstName));
        _result.add("lastName", lastName.get().toJson(_value.lastName));
        _result.add("age", age.get().toJson(_value.age));
        _result.add("gender", gender.get().toJson(_value.gender));
        _result.add("citizenshipNumber", citizenshipNumber.get().toJson(_value.citizenshipNumber));
        _result.add("passportNumber", passportNumber.get().toJson(_value.passportNumber));
        _result.add("licenceNumber", licenceNumber.get().toJson(_value.licenceNumber));
        _result.add("employer", employer.get().toJson(_value.employer));
        _result.add("employerProvidedId", employerProvidedId.get().toJson(_value.employerProvidedId));
        return _result;
      }

      @Override
      public Person fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Person(
          JsonBindings.fieldFromJson(_obj, "firstName", firstName.get()),
          JsonBindings.fieldFromJson(_obj, "lastName", lastName.get()),
          JsonBindings.fieldFromJson(_obj, "age", age.get()),
          JsonBindings.fieldFromJson(_obj, "gender", gender.get()),
          JsonBindings.fieldFromJson(_obj, "citizenshipNumber", citizenshipNumber.get()),
          JsonBindings.fieldFromJson(_obj, "passportNumber", passportNumber.get()),
          JsonBindings.fieldFromJson(_obj, "licenceNumber", licenceNumber.get()),
          JsonBindings.fieldFromJson(_obj, "employer", employer.get()),
          JsonBindings.fieldFromJson(_obj, "employerProvidedId", employerProvidedId.get())
        );
      }
    };
  }
}
