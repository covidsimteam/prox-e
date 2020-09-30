/* @generated from adl module covhub.cases */

package adl.covhub.cases;

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

public class CaseState {

  /* Members */

  private boolean aFormFilled;
  private short numberOfContacts;
  private short numberOfB1Forms;
  private short numberOfB2Forms;
  private short numberOfSwabs;
  private short numberOfPositiveContacts;
  private String sourceOfInfection;
  private Coordinates placeOfInfection;

  /* Constructors */

  public CaseState(boolean aFormFilled, short numberOfContacts, short numberOfB1Forms, short numberOfB2Forms, short numberOfSwabs, short numberOfPositiveContacts, String sourceOfInfection, Coordinates placeOfInfection) {
    this.aFormFilled = aFormFilled;
    this.numberOfContacts = numberOfContacts;
    this.numberOfB1Forms = numberOfB1Forms;
    this.numberOfB2Forms = numberOfB2Forms;
    this.numberOfSwabs = numberOfSwabs;
    this.numberOfPositiveContacts = numberOfPositiveContacts;
    this.sourceOfInfection = Objects.requireNonNull(sourceOfInfection);
    this.placeOfInfection = Objects.requireNonNull(placeOfInfection);
  }

  public CaseState() {
    this.aFormFilled = false;
    this.numberOfContacts = (short)0;
    this.numberOfB1Forms = (short)0;
    this.numberOfB2Forms = (short)0;
    this.numberOfSwabs = (short)0;
    this.numberOfPositiveContacts = (short)0;
    this.sourceOfInfection = "";
    this.placeOfInfection = new Coordinates();
  }

  public CaseState(CaseState other) {
    this.aFormFilled = other.aFormFilled;
    this.numberOfContacts = other.numberOfContacts;
    this.numberOfB1Forms = other.numberOfB1Forms;
    this.numberOfB2Forms = other.numberOfB2Forms;
    this.numberOfSwabs = other.numberOfSwabs;
    this.numberOfPositiveContacts = other.numberOfPositiveContacts;
    this.sourceOfInfection = other.sourceOfInfection;
    this.placeOfInfection = Coordinates.FACTORY.create(other.placeOfInfection);
  }

  /* Accessors and mutators */

  public boolean getAFormFilled() {
    return aFormFilled;
  }

  public void setAFormFilled(boolean aFormFilled) {
    this.aFormFilled = aFormFilled;
  }

  public short getNumberOfContacts() {
    return numberOfContacts;
  }

  public void setNumberOfContacts(short numberOfContacts) {
    this.numberOfContacts = numberOfContacts;
  }

  public short getNumberOfB1Forms() {
    return numberOfB1Forms;
  }

  public void setNumberOfB1Forms(short numberOfB1Forms) {
    this.numberOfB1Forms = numberOfB1Forms;
  }

  public short getNumberOfB2Forms() {
    return numberOfB2Forms;
  }

  public void setNumberOfB2Forms(short numberOfB2Forms) {
    this.numberOfB2Forms = numberOfB2Forms;
  }

  public short getNumberOfSwabs() {
    return numberOfSwabs;
  }

  public void setNumberOfSwabs(short numberOfSwabs) {
    this.numberOfSwabs = numberOfSwabs;
  }

  public short getNumberOfPositiveContacts() {
    return numberOfPositiveContacts;
  }

  public void setNumberOfPositiveContacts(short numberOfPositiveContacts) {
    this.numberOfPositiveContacts = numberOfPositiveContacts;
  }

  public String getSourceOfInfection() {
    return sourceOfInfection;
  }

  public void setSourceOfInfection(String sourceOfInfection) {
    this.sourceOfInfection = Objects.requireNonNull(sourceOfInfection);
  }

  public Coordinates getPlaceOfInfection() {
    return placeOfInfection;
  }

  public void setPlaceOfInfection(Coordinates placeOfInfection) {
    this.placeOfInfection = Objects.requireNonNull(placeOfInfection);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof CaseState)) {
      return false;
    }
    CaseState other = (CaseState) other0;
    return
      aFormFilled == other.aFormFilled &&
      numberOfContacts == other.numberOfContacts &&
      numberOfB1Forms == other.numberOfB1Forms &&
      numberOfB2Forms == other.numberOfB2Forms &&
      numberOfSwabs == other.numberOfSwabs &&
      numberOfPositiveContacts == other.numberOfPositiveContacts &&
      sourceOfInfection.equals(other.sourceOfInfection) &&
      placeOfInfection.equals(other.placeOfInfection);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + (aFormFilled ? 0 : 1);
    _result = _result * 37 + (int) numberOfContacts;
    _result = _result * 37 + (int) numberOfB1Forms;
    _result = _result * 37 + (int) numberOfB2Forms;
    _result = _result * 37 + (int) numberOfSwabs;
    _result = _result * 37 + (int) numberOfPositiveContacts;
    _result = _result * 37 + sourceOfInfection.hashCode();
    _result = _result * 37 + placeOfInfection.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Boolean aFormFilled;
    private Short numberOfContacts;
    private Short numberOfB1Forms;
    private Short numberOfB2Forms;
    private Short numberOfSwabs;
    private Short numberOfPositiveContacts;
    private String sourceOfInfection;
    private Coordinates placeOfInfection;

    public Builder() {
      this.aFormFilled = null;
      this.numberOfContacts = null;
      this.numberOfB1Forms = null;
      this.numberOfB2Forms = null;
      this.numberOfSwabs = null;
      this.numberOfPositiveContacts = null;
      this.sourceOfInfection = null;
      this.placeOfInfection = null;
    }

    public Builder setAFormFilled(Boolean aFormFilled) {
      this.aFormFilled = Objects.requireNonNull(aFormFilled);
      return this;
    }

    public Builder setNumberOfContacts(Short numberOfContacts) {
      this.numberOfContacts = Objects.requireNonNull(numberOfContacts);
      return this;
    }

    public Builder setNumberOfB1Forms(Short numberOfB1Forms) {
      this.numberOfB1Forms = Objects.requireNonNull(numberOfB1Forms);
      return this;
    }

    public Builder setNumberOfB2Forms(Short numberOfB2Forms) {
      this.numberOfB2Forms = Objects.requireNonNull(numberOfB2Forms);
      return this;
    }

    public Builder setNumberOfSwabs(Short numberOfSwabs) {
      this.numberOfSwabs = Objects.requireNonNull(numberOfSwabs);
      return this;
    }

    public Builder setNumberOfPositiveContacts(Short numberOfPositiveContacts) {
      this.numberOfPositiveContacts = Objects.requireNonNull(numberOfPositiveContacts);
      return this;
    }

    public Builder setSourceOfInfection(String sourceOfInfection) {
      this.sourceOfInfection = Objects.requireNonNull(sourceOfInfection);
      return this;
    }

    public Builder setPlaceOfInfection(Coordinates placeOfInfection) {
      this.placeOfInfection = Objects.requireNonNull(placeOfInfection);
      return this;
    }

    public CaseState create() {
      Builders.checkFieldInitialized("CaseState", "aFormFilled", aFormFilled);
      Builders.checkFieldInitialized("CaseState", "numberOfContacts", numberOfContacts);
      Builders.checkFieldInitialized("CaseState", "numberOfB1Forms", numberOfB1Forms);
      Builders.checkFieldInitialized("CaseState", "numberOfB2Forms", numberOfB2Forms);
      Builders.checkFieldInitialized("CaseState", "numberOfSwabs", numberOfSwabs);
      Builders.checkFieldInitialized("CaseState", "numberOfPositiveContacts", numberOfPositiveContacts);
      Builders.checkFieldInitialized("CaseState", "sourceOfInfection", sourceOfInfection);
      Builders.checkFieldInitialized("CaseState", "placeOfInfection", placeOfInfection);
      return new CaseState(aFormFilled, numberOfContacts, numberOfB1Forms, numberOfB2Forms, numberOfSwabs, numberOfPositiveContacts, sourceOfInfection, placeOfInfection);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<CaseState> FACTORY = new Factory<CaseState>() {
    @Override
    public CaseState create() {
      return new CaseState();
    }

    @Override
    public CaseState create(CaseState other) {
      return new CaseState(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.cases", "CaseState");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<CaseState> jsonBinding() {
      return CaseState.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<CaseState> jsonBinding() {
    final Lazy<JsonBinding<Boolean>> aFormFilled = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Short>> numberOfContacts = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfB1Forms = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfB2Forms = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfSwabs = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfPositiveContacts = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<String>> sourceOfInfection = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Coordinates>> placeOfInfection = new Lazy<>(() -> Coordinates.jsonBinding());
    final Factory<CaseState> _factory = FACTORY;

    return new JsonBinding<CaseState>() {
      @Override
      public Factory<CaseState> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(CaseState _value) {
        JsonObject _result = new JsonObject();
        _result.add("aFormFilled", aFormFilled.get().toJson(_value.aFormFilled));
        _result.add("numberOfContacts", numberOfContacts.get().toJson(_value.numberOfContacts));
        _result.add("numberOfB1Forms", numberOfB1Forms.get().toJson(_value.numberOfB1Forms));
        _result.add("numberOfB2Forms", numberOfB2Forms.get().toJson(_value.numberOfB2Forms));
        _result.add("numberOfSwabs", numberOfSwabs.get().toJson(_value.numberOfSwabs));
        _result.add("numberOfPositiveContacts", numberOfPositiveContacts.get().toJson(_value.numberOfPositiveContacts));
        _result.add("sourceOfInfection", sourceOfInfection.get().toJson(_value.sourceOfInfection));
        _result.add("placeOfInfection", placeOfInfection.get().toJson(_value.placeOfInfection));
        return _result;
      }

      @Override
      public CaseState fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new CaseState(
          JsonBindings.fieldFromJson(_obj, "aFormFilled", aFormFilled.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfContacts", numberOfContacts.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfB1Forms", numberOfB1Forms.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfB2Forms", numberOfB2Forms.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfSwabs", numberOfSwabs.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfPositiveContacts", numberOfPositiveContacts.get()),
          JsonBindings.fieldFromJson(_obj, "sourceOfInfection", sourceOfInfection.get()),
          JsonBindings.fieldFromJson(_obj, "placeOfInfection", placeOfInfection.get())
        );
      }
    };
  }
}
