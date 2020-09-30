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

public class Step3 {

  /* Members */

  private String contactTracer;
  private short numberOfB1Forms;
  private short numberOfContacts;
  private String caseName;
  private boolean caseSelected;
  private ArrayList<String> b1FormsInitiated;
  private ArrayList<String> b1FormsFilled;
  private boolean yellowUpdateStarted;
  private StepStats stepStats;
  private boolean yellowUpdateFinished;

  /* Constructors */

  public Step3(String contactTracer, short numberOfB1Forms, short numberOfContacts, String caseName, boolean caseSelected, ArrayList<String> b1FormsInitiated, ArrayList<String> b1FormsFilled, boolean yellowUpdateStarted, StepStats stepStats, boolean yellowUpdateFinished) {
    this.contactTracer = Objects.requireNonNull(contactTracer);
    this.numberOfB1Forms = numberOfB1Forms;
    this.numberOfContacts = numberOfContacts;
    this.caseName = Objects.requireNonNull(caseName);
    this.caseSelected = caseSelected;
    this.b1FormsInitiated = Objects.requireNonNull(b1FormsInitiated);
    this.b1FormsFilled = Objects.requireNonNull(b1FormsFilled);
    this.yellowUpdateStarted = yellowUpdateStarted;
    this.stepStats = Objects.requireNonNull(stepStats);
    this.yellowUpdateFinished = yellowUpdateFinished;
  }

  public Step3() {
    this.contactTracer = "";
    this.numberOfB1Forms = (short)0;
    this.numberOfContacts = (short)0;
    this.caseName = "";
    this.caseSelected = false;
    this.b1FormsInitiated = new ArrayList<String>();
    this.b1FormsFilled = new ArrayList<String>();
    this.yellowUpdateStarted = false;
    this.stepStats = new StepStats();
    this.yellowUpdateFinished = false;
  }

  public Step3(Step3 other) {
    this.contactTracer = other.contactTracer;
    this.numberOfB1Forms = other.numberOfB1Forms;
    this.numberOfContacts = other.numberOfContacts;
    this.caseName = other.caseName;
    this.caseSelected = other.caseSelected;
    this.b1FormsInitiated = Factories.arrayList(Factories.STRING).create(other.b1FormsInitiated);
    this.b1FormsFilled = Factories.arrayList(Factories.STRING).create(other.b1FormsFilled);
    this.yellowUpdateStarted = other.yellowUpdateStarted;
    this.stepStats = StepStats.FACTORY.create(other.stepStats);
    this.yellowUpdateFinished = other.yellowUpdateFinished;
  }

  /* Accessors and mutators */

  public String getContactTracer() {
    return contactTracer;
  }

  public void setContactTracer(String contactTracer) {
    this.contactTracer = Objects.requireNonNull(contactTracer);
  }

  public short getNumberOfB1Forms() {
    return numberOfB1Forms;
  }

  public void setNumberOfB1Forms(short numberOfB1Forms) {
    this.numberOfB1Forms = numberOfB1Forms;
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

  public StepStats getStepStats() {
    return stepStats;
  }

  public void setStepStats(StepStats stepStats) {
    this.stepStats = Objects.requireNonNull(stepStats);
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
    if (!(other0 instanceof Step3)) {
      return false;
    }
    Step3 other = (Step3) other0;
    return
      contactTracer.equals(other.contactTracer) &&
      numberOfB1Forms == other.numberOfB1Forms &&
      numberOfContacts == other.numberOfContacts &&
      caseName.equals(other.caseName) &&
      caseSelected == other.caseSelected &&
      b1FormsInitiated.equals(other.b1FormsInitiated) &&
      b1FormsFilled.equals(other.b1FormsFilled) &&
      yellowUpdateStarted == other.yellowUpdateStarted &&
      stepStats.equals(other.stepStats) &&
      yellowUpdateFinished == other.yellowUpdateFinished;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + contactTracer.hashCode();
    _result = _result * 37 + (int) numberOfB1Forms;
    _result = _result * 37 + (int) numberOfContacts;
    _result = _result * 37 + caseName.hashCode();
    _result = _result * 37 + (caseSelected ? 0 : 1);
    _result = _result * 37 + b1FormsInitiated.hashCode();
    _result = _result * 37 + b1FormsFilled.hashCode();
    _result = _result * 37 + (yellowUpdateStarted ? 0 : 1);
    _result = _result * 37 + stepStats.hashCode();
    _result = _result * 37 + (yellowUpdateFinished ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String contactTracer;
    private Short numberOfB1Forms;
    private Short numberOfContacts;
    private String caseName;
    private Boolean caseSelected;
    private ArrayList<String> b1FormsInitiated;
    private ArrayList<String> b1FormsFilled;
    private Boolean yellowUpdateStarted;
    private StepStats stepStats;
    private Boolean yellowUpdateFinished;

    public Builder() {
      this.contactTracer = null;
      this.numberOfB1Forms = null;
      this.numberOfContacts = null;
      this.caseName = null;
      this.caseSelected = null;
      this.b1FormsInitiated = null;
      this.b1FormsFilled = null;
      this.yellowUpdateStarted = null;
      this.stepStats = null;
      this.yellowUpdateFinished = null;
    }

    public Builder setContactTracer(String contactTracer) {
      this.contactTracer = Objects.requireNonNull(contactTracer);
      return this;
    }

    public Builder setNumberOfB1Forms(Short numberOfB1Forms) {
      this.numberOfB1Forms = Objects.requireNonNull(numberOfB1Forms);
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

    public Builder setStepStats(StepStats stepStats) {
      this.stepStats = Objects.requireNonNull(stepStats);
      return this;
    }

    public Builder setYellowUpdateFinished(Boolean yellowUpdateFinished) {
      this.yellowUpdateFinished = Objects.requireNonNull(yellowUpdateFinished);
      return this;
    }

    public Step3 create() {
      Builders.checkFieldInitialized("Step3", "contactTracer", contactTracer);
      Builders.checkFieldInitialized("Step3", "numberOfB1Forms", numberOfB1Forms);
      Builders.checkFieldInitialized("Step3", "numberOfContacts", numberOfContacts);
      Builders.checkFieldInitialized("Step3", "caseName", caseName);
      Builders.checkFieldInitialized("Step3", "caseSelected", caseSelected);
      Builders.checkFieldInitialized("Step3", "b1FormsInitiated", b1FormsInitiated);
      Builders.checkFieldInitialized("Step3", "b1FormsFilled", b1FormsFilled);
      Builders.checkFieldInitialized("Step3", "yellowUpdateStarted", yellowUpdateStarted);
      Builders.checkFieldInitialized("Step3", "stepStats", stepStats);
      Builders.checkFieldInitialized("Step3", "yellowUpdateFinished", yellowUpdateFinished);
      return new Step3(contactTracer, numberOfB1Forms, numberOfContacts, caseName, caseSelected, b1FormsInitiated, b1FormsFilled, yellowUpdateStarted, stepStats, yellowUpdateFinished);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step3> FACTORY = new Factory<Step3>() {
    @Override
    public Step3 create() {
      return new Step3();
    }

    @Override
    public Step3 create(Step3 other) {
      return new Step3(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step3");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step3> jsonBinding() {
      return Step3.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step3> jsonBinding() {
    final Lazy<JsonBinding<String>> contactTracer = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Short>> numberOfB1Forms = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Short>> numberOfContacts = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<String>> caseName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Boolean>> caseSelected = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<ArrayList<String>>> b1FormsInitiated = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<String>>> b1FormsFilled = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<Boolean>> yellowUpdateStarted = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<StepStats>> stepStats = new Lazy<>(() -> StepStats.jsonBinding());
    final Lazy<JsonBinding<Boolean>> yellowUpdateFinished = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step3> _factory = FACTORY;

    return new JsonBinding<Step3>() {
      @Override
      public Factory<Step3> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step3 _value) {
        JsonObject _result = new JsonObject();
        _result.add("contactTracer", contactTracer.get().toJson(_value.contactTracer));
        _result.add("numberOfB1Forms", numberOfB1Forms.get().toJson(_value.numberOfB1Forms));
        _result.add("numberOfContacts", numberOfContacts.get().toJson(_value.numberOfContacts));
        _result.add("caseName", caseName.get().toJson(_value.caseName));
        _result.add("caseSelected", caseSelected.get().toJson(_value.caseSelected));
        _result.add("b1FormsInitiated", b1FormsInitiated.get().toJson(_value.b1FormsInitiated));
        _result.add("b1FormsFilled", b1FormsFilled.get().toJson(_value.b1FormsFilled));
        _result.add("yellowUpdateStarted", yellowUpdateStarted.get().toJson(_value.yellowUpdateStarted));
        _result.add("stepStats", stepStats.get().toJson(_value.stepStats));
        _result.add("yellowUpdateFinished", yellowUpdateFinished.get().toJson(_value.yellowUpdateFinished));
        return _result;
      }

      @Override
      public Step3 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step3(
          JsonBindings.fieldFromJson(_obj, "contactTracer", contactTracer.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfB1Forms", numberOfB1Forms.get()),
          JsonBindings.fieldFromJson(_obj, "numberOfContacts", numberOfContacts.get()),
          JsonBindings.fieldFromJson(_obj, "caseName", caseName.get()),
          JsonBindings.fieldFromJson(_obj, "caseSelected", caseSelected.get()),
          JsonBindings.fieldFromJson(_obj, "b1FormsInitiated", b1FormsInitiated.get()),
          JsonBindings.fieldFromJson(_obj, "b1FormsFilled", b1FormsFilled.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateStarted", yellowUpdateStarted.get()),
          JsonBindings.fieldFromJson(_obj, "stepStats", stepStats.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateFinished", yellowUpdateFinished.get())
        );
      }
    };
  }
}
