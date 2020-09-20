/* @generated from adl module covhub.steps */

package adl.covhub.steps;

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

public class Step4 {

  /* Members */

  private String contactFollower;
  private short numberOfB2Forms;
  private short numberOfContacts;
  private String caseName;
  private boolean caseSelected;
  private ArrayList<String> b1FormsInitiated;
  private ArrayList<String> b1FormsFilled;
  private boolean yellowUpdateStarted;
  private Step2Stats step2Stats;
  private boolean yellowUpdateFinished;

  /* Constructors */

  public Step4(String contactFollower, short numberOfB2Forms, short numberOfContacts, String caseName, boolean caseSelected, ArrayList<String> b1FormsInitiated, ArrayList<String> b1FormsFilled, boolean yellowUpdateStarted, Step2Stats step2Stats, boolean yellowUpdateFinished) {
    this.contactFollower = Objects.requireNonNull(contactFollower);
    this.numberOfB2Forms = numberOfB2Forms;
    this.numberOfContacts = numberOfContacts;
    this.caseName = Objects.requireNonNull(caseName);
    this.caseSelected = caseSelected;
    this.b1FormsInitiated = Objects.requireNonNull(b1FormsInitiated);
    this.b1FormsFilled = Objects.requireNonNull(b1FormsFilled);
    this.yellowUpdateStarted = yellowUpdateStarted;
    this.step2Stats = Objects.requireNonNull(step2Stats);
    this.yellowUpdateFinished = yellowUpdateFinished;
  }

  public Step4() {
    this.contactFollower = "";
    this.numberOfB2Forms = (short)0;
    this.numberOfContacts = (short)0;
    this.caseName = "";
    this.caseSelected = false;
    this.b1FormsInitiated = new ArrayList<String>();
    this.b1FormsFilled = new ArrayList<String>();
    this.yellowUpdateStarted = false;
    this.step2Stats = new Step2Stats();
    this.yellowUpdateFinished = false;
  }

  public Step4(Step4 other) {
    this.contactFollower = other.contactFollower;
    this.numberOfB2Forms = other.numberOfB2Forms;
    this.numberOfContacts = other.numberOfContacts;
    this.caseName = other.caseName;
    this.caseSelected = other.caseSelected;
    this.b1FormsInitiated = Factories.arrayList(Factories.STRING).create(other.b1FormsInitiated);
    this.b1FormsFilled = Factories.arrayList(Factories.STRING).create(other.b1FormsFilled);
    this.yellowUpdateStarted = other.yellowUpdateStarted;
    this.step2Stats = Step2Stats.FACTORY.create(other.step2Stats);
    this.yellowUpdateFinished = other.yellowUpdateFinished;
  }

  /* Accessors and mutators */

  public String getContactFollower() {
    return contactFollower;
  }

  public void setContactFollower(String contactFollower) {
    this.contactFollower = Objects.requireNonNull(contactFollower);
  }

  public short getNumberOfB2Forms() {
    return numberOfB2Forms;
  }

  public void setNumberOfB2Forms(short numberOfB2Forms) {
    this.numberOfB2Forms = numberOfB2Forms;
  }

  public short getNumberOfContacts() {
    return numberOfContacts;
  }

  public void setNumberOfContacts(short numberOfContacts) {
    this.numberOfContacts = numberOfContacts;
  }

  public String getCaseName() {
    return caseName;
  }

  public void setCaseName(String caseName) {
    this.caseName = Objects.requireNonNull(caseName);
  }

  public boolean getCaseSelected() {
    return caseSelected;
  }

  public void setCaseSelected(boolean caseSelected) {
    this.caseSelected = caseSelected;
  }

  public ArrayList<String> getB1FormsInitiated() {
    return b1FormsInitiated;
  }

  public void setB1FormsInitiated(ArrayList<String> b1FormsInitiated) {
    this.b1FormsInitiated = Objects.requireNonNull(b1FormsInitiated);
  }

  public ArrayList<String> getB1FormsFilled() {
    return b1FormsFilled;
  }

  public void setB1FormsFilled(ArrayList<String> b1FormsFilled) {
    this.b1FormsFilled = Objects.requireNonNull(b1FormsFilled);
  }

  public boolean getYellowUpdateStarted() {
    return yellowUpdateStarted;
  }

  public void setYellowUpdateStarted(boolean yellowUpdateStarted) {
    this.yellowUpdateStarted = yellowUpdateStarted;
  }

  public Step2Stats getStep2Stats() {
    return step2Stats;
  }

  public void setStep2Stats(Step2Stats step2Stats) {
    this.step2Stats = Objects.requireNonNull(step2Stats);
  }

  public boolean getYellowUpdateFinished() {
    return yellowUpdateFinished;
  }

  public void setYellowUpdateFinished(boolean yellowUpdateFinished) {
    this.yellowUpdateFinished = yellowUpdateFinished;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Step4)) {
      return false;
    }
    Step4 other = (Step4) other0;
    return
      contactFollower.equals(other.contactFollower) &&
      numberOfB2Forms == other.numberOfB2Forms &&
      numberOfContacts == other.numberOfContacts &&
      caseName.equals(other.caseName) &&
      caseSelected == other.caseSelected &&
      b1FormsInitiated.equals(other.b1FormsInitiated) &&
      b1FormsFilled.equals(other.b1FormsFilled) &&
      yellowUpdateStarted == other.yellowUpdateStarted &&
      step2Stats.equals(other.step2Stats) &&
      yellowUpdateFinished == other.yellowUpdateFinished;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + contactFollower.hashCode();
    _result = _result * 37 + (int) numberOfB2Forms;
    _result = _result * 37 + (int) numberOfContacts;
    _result = _result * 37 + caseName.hashCode();
    _result = _result * 37 + (caseSelected ? 0 : 1);
    _result = _result * 37 + b1FormsInitiated.hashCode();
    _result = _result * 37 + b1FormsFilled.hashCode();
    _result = _result * 37 + (yellowUpdateStarted ? 0 : 1);
    _result = _result * 37 + step2Stats.hashCode();
    _result = _result * 37 + (yellowUpdateFinished ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String contactFollower;
    private Short numberOfB2Forms;
    private Short numberOfContacts;
    private String caseName;
    private Boolean caseSelected;
    private ArrayList<String> b1FormsInitiated;
    private ArrayList<String> b1FormsFilled;
    private Boolean yellowUpdateStarted;
    private Step2Stats step2Stats;
    private Boolean yellowUpdateFinished;

    public Builder() {
      this.contactFollower = null;
      this.numberOfB2Forms = null;
      this.numberOfContacts = null;
      this.caseName = null;
      this.caseSelected = null;
      this.b1FormsInitiated = null;
      this.b1FormsFilled = null;
      this.yellowUpdateStarted = null;
      this.step2Stats = null;
      this.yellowUpdateFinished = null;
    }

    public Builder setContactFollower(String contactFollower) {
      this.contactFollower = Objects.requireNonNull(contactFollower);
      return this;
    }

    public Builder setNumberOfB2Forms(Short numberOfB2Forms) {
      this.numberOfB2Forms = Objects.requireNonNull(numberOfB2Forms);
      return this;
    }

    public Builder setNumberOfContacts(Short numberOfContacts) {
      this.numberOfContacts = Objects.requireNonNull(numberOfContacts);
      return this;
    }

    public Builder setCaseName(String caseName) {
      this.caseName = Objects.requireNonNull(caseName);
      return this;
    }

    public Builder setCaseSelected(Boolean caseSelected) {
      this.caseSelected = Objects.requireNonNull(caseSelected);
      return this;
    }

    public Builder setB1FormsInitiated(ArrayList<String> b1FormsInitiated) {
      this.b1FormsInitiated = Objects.requireNonNull(b1FormsInitiated);
      return this;
    }

    public Builder setB1FormsFilled(ArrayList<String> b1FormsFilled) {
      this.b1FormsFilled = Objects.requireNonNull(b1FormsFilled);
      return this;
    }

    public Builder setYellowUpdateStarted(Boolean yellowUpdateStarted) {
      this.yellowUpdateStarted = Objects.requireNonNull(yellowUpdateStarted);
      return this;
    }

    public Builder setStep2Stats(Step2Stats step2Stats) {
      this.step2Stats = Objects.requireNonNull(step2Stats);
      return this;
    }

    public Builder setYellowUpdateFinished(Boolean yellowUpdateFinished) {
      this.yellowUpdateFinished = Objects.requireNonNull(yellowUpdateFinished);
      return this;
    }

    public Step4 create() {
      Builders.checkFieldInitialized("Step4", "contactFollower", contactFollower);
      Builders.checkFieldInitialized("Step4", "numberOfB2Forms", numberOfB2Forms);
      Builders.checkFieldInitialized("Step4", "numberOfContacts", numberOfContacts);
      Builders.checkFieldInitialized("Step4", "caseName", caseName);
      Builders.checkFieldInitialized("Step4", "caseSelected", caseSelected);
      Builders.checkFieldInitialized("Step4", "b1FormsInitiated", b1FormsInitiated);
      Builders.checkFieldInitialized("Step4", "b1FormsFilled", b1FormsFilled);
      Builders.checkFieldInitialized("Step4", "yellowUpdateStarted", yellowUpdateStarted);
      Builders.checkFieldInitialized("Step4", "step2Stats", step2Stats);
      Builders.checkFieldInitialized("Step4", "yellowUpdateFinished", yellowUpdateFinished);
      return new Step4(contactFollower, numberOfB2Forms, numberOfContacts, caseName, caseSelected, b1FormsInitiated, b1FormsFilled, yellowUpdateStarted, step2Stats, yellowUpdateFinished);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step4> FACTORY = new Factory<Step4>() {
    @Override
    public Step4 create() {
      return new Step4();
    }

    @Override
    public Step4 create(Step4 other) {
      return new Step4(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step4");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step4> jsonBinding() {
      return Step4.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step4> jsonBinding() {
    final Lazy<JsonBinding<String>> contactFollower = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Short>> numberOfB2Forms = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfContacts = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<String>> caseName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Boolean>> caseSelected = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<ArrayList<String>>> b1FormsInitiated = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<String>>> b1FormsFilled = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<Boolean>> yellowUpdateStarted = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Step2Stats>> step2Stats = new Lazy<>(() -> Step2Stats.jsonBinding());
    final Lazy<JsonBinding<Boolean>> yellowUpdateFinished = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step4> _factory = FACTORY;

    return new JsonBinding<Step4>() {
      @Override
      public Factory<Step4> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step4 _value) {
        JsonObject _result = new JsonObject();
        _result.add("contactFollower", contactFollower.get().toJson(_value.contactFollower));
        _result.add("numberOfB2Forms", numberOfB2Forms.get().toJson(_value.numberOfB2Forms));
        _result.add("numberOfContacts", numberOfContacts.get().toJson(_value.numberOfContacts));
        _result.add("caseName", caseName.get().toJson(_value.caseName));
        _result.add("caseSelected", caseSelected.get().toJson(_value.caseSelected));
        _result.add("b1FormsInitiated", b1FormsInitiated.get().toJson(_value.b1FormsInitiated));
        _result.add("b1FormsFilled", b1FormsFilled.get().toJson(_value.b1FormsFilled));
        _result.add("yellowUpdateStarted", yellowUpdateStarted.get().toJson(_value.yellowUpdateStarted));
        _result.add("step2Stats", step2Stats.get().toJson(_value.step2Stats));
        _result.add("yellowUpdateFinished", yellowUpdateFinished.get().toJson(_value.yellowUpdateFinished));
        return _result;
      }

      @Override
      public Step4 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step4(
          JsonBindings.fieldFromJson(_obj, "contactFollower", contactFollower.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfB2Forms", numberOfB2Forms.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfContacts", numberOfContacts.get()),
          JsonBindings.fieldFromJson(_obj, "caseName", caseName.get()),
          JsonBindings.fieldFromJson(_obj, "caseSelected", caseSelected.get()),
          JsonBindings.fieldFromJson(_obj, "b1FormsInitiated", b1FormsInitiated.get()),
          JsonBindings.fieldFromJson(_obj, "b1FormsFilled", b1FormsFilled.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateStarted", yellowUpdateStarted.get()),
          JsonBindings.fieldFromJson(_obj, "step2Stats", step2Stats.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateFinished", yellowUpdateFinished.get())
        );
      }
    };
  }
}
