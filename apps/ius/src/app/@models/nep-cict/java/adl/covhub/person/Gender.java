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

public class Gender {

  /* Members */

  private String individual;
  private String biological;

  /* Constructors */

  public Gender(String individual, String biological) {
    this.individual = Objects.requireNonNull(individual);
    this.biological = Objects.requireNonNull(biological);
  }

  public Gender() {
    this.individual = "";
    this.biological = "";
  }

  public Gender(Gender other) {
    this.individual = other.individual;
    this.biological = other.biological;
  }

  /* Accessors and mutators */

  public String getIndividual() {
    return individual;
  }

  public void setIndividual(String individual) {
    this.individual = Objects.requireNonNull(individual);
  }

  public String getBiological() {
    return biological;
  }

  public void setBiological(String biological) {
    this.biological = Objects.requireNonNull(biological);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Gender)) {
      return false;
    }
    Gender other = (Gender) other0;
    return
      individual.equals(other.individual) &&
      biological.equals(other.biological);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + individual.hashCode();
    _result = _result * 37 + biological.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String individual;
    private String biological;

    public Builder() {
      this.individual = null;
      this.biological = null;
    }

    public Builder setIndividual(String individual) {
      this.individual = Objects.requireNonNull(individual);
      return this;
    }

    public Builder setBiological(String biological) {
      this.biological = Objects.requireNonNull(biological);
      return this;
    }

    public Gender create() {
      Builders.checkFieldInitialized("Gender", "individual", individual);
      Builders.checkFieldInitialized("Gender", "biological", biological);
      return new Gender(individual, biological);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Gender> FACTORY = new Factory<Gender>() {
    @Override
    public Gender create() {
      return new Gender();
    }

    @Override
    public Gender create(Gender other) {
      return new Gender(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.person", "Gender");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Gender> jsonBinding() {
      return Gender.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Gender> jsonBinding() {
    final Lazy<JsonBinding<String>> individual = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> biological = new Lazy<>(() -> JsonBindings.STRING);
    final Factory<Gender> _factory = FACTORY;

    return new JsonBinding<Gender>() {
      @Override
      public Factory<Gender> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Gender _value) {
        JsonObject _result = new JsonObject();
        _result.add("individual", individual.get().toJson(_value.individual));
        _result.add("biological", biological.get().toJson(_value.biological));
        return _result;
      }

      @Override
      public Gender fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Gender(
          JsonBindings.fieldFromJson(_obj, "individual", individual.get()),
          JsonBindings.fieldFromJson(_obj, "biological", biological.get())
        );
      }
    };
  }
}
