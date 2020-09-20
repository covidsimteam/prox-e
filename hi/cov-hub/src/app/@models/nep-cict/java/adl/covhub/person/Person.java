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

  /* Constructors */

  public Person(String firstName, String lastName, short age, Gender gender) {
    this.firstName = Objects.requireNonNull(firstName);
    this.lastName = Objects.requireNonNull(lastName);
    this.age = age;
    this.gender = Objects.requireNonNull(gender);
  }

  public Person() {
    this.firstName = "";
    this.lastName = "";
    this.age = (short)0;
    this.gender = new Gender();
  }

  public Person(Person other) {
    this.firstName = other.firstName;
    this.lastName = other.lastName;
    this.age = other.age;
    this.gender = Gender.FACTORY.create(other.gender);
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
      gender.equals(other.gender);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + firstName.hashCode();
    _result = _result * 37 + lastName.hashCode();
    _result = _result * 37 + (int) age;
    _result = _result * 37 + gender.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String firstName;
    private String lastName;
    private Short age;
    private Gender gender;

    public Builder() {
      this.firstName = null;
      this.lastName = null;
      this.age = null;
      this.gender = null;
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

    public Person create() {
      Builders.checkFieldInitialized("Person", "firstName", firstName);
      Builders.checkFieldInitialized("Person", "lastName", lastName);
      Builders.checkFieldInitialized("Person", "age", age);
      Builders.checkFieldInitialized("Person", "gender", gender);
      return new Person(firstName, lastName, age, gender);
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
        return _result;
      }

      @Override
      public Person fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Person(
          JsonBindings.fieldFromJson(_obj, "firstName", firstName.get()),
          JsonBindings.fieldFromJson(_obj, "lastName", lastName.get()),
          JsonBindings.fieldFromJson(_obj, "age", age.get()),
          JsonBindings.fieldFromJson(_obj, "gender", gender.get())
        );
      }
    };
  }
}
