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

public class Step2 {

  /* Members */

  private String caseName;
  private boolean caseSelected;
  private boolean aFormInitiated;
  private boolean aFormFilled;
  private boolean yellowUpdateStarted;
  private StepStats stepStats;
  private boolean yellowUpdateFinished;

  /* Constructors */

  public Step2(String caseName, boolean caseSelected, boolean aFormInitiated, boolean aFormFilled, boolean yellowUpdateStarted, StepStats stepStats, boolean yellowUpdateFinished) {
    this.caseName = Objects.requireNonNull(caseName);
    this.caseSelected = caseSelected;
    this.aFormInitiated = aFormInitiated;
    this.aFormFilled = aFormFilled;
    this.yellowUpdateStarted = yellowUpdateStarted;
    this.stepStats = Objects.requireNonNull(stepStats);
    this.yellowUpdateFinished = yellowUpdateFinished;
  }

  public Step2() {
    this.caseName = "";
    this.caseSelected = false;
    this.aFormInitiated = false;
    this.aFormFilled = false;
    this.yellowUpdateStarted = false;
    this.stepStats = new StepStats();
    this.yellowUpdateFinished = false;
  }

  public Step2(Step2 other) {
    this.caseName = other.caseName;
    this.caseSelected = other.caseSelected;
    this.aFormInitiated = other.aFormInitiated;
    this.aFormFilled = other.aFormFilled;
    this.yellowUpdateStarted = other.yellowUpdateStarted;
    this.stepStats = StepStats.FACTORY.create(other.stepStats);
    this.yellowUpdateFinished = other.yellowUpdateFinished;
  }

  /* Accessors and mutators */

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

  public boolean getAFormInitiated() {
    return aFormInitiated;
  }

  public void setAFormInitiated(boolean aFormInitiated) {
    this.aFormInitiated = aFormInitiated;
  }

  public boolean getAFormFilled() {
    return aFormFilled;
  }

  public void setAFormFilled(boolean aFormFilled) {
    this.aFormFilled = aFormFilled;
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
    if (!(other0 instanceof Step2)) {
      return false;
    }
    Step2 other = (Step2) other0;
    return
      caseName.equals(other.caseName) &&
      caseSelected == other.caseSelected &&
      aFormInitiated == other.aFormInitiated &&
      aFormFilled == other.aFormFilled &&
      yellowUpdateStarted == other.yellowUpdateStarted &&
      stepStats.equals(other.stepStats) &&
      yellowUpdateFinished == other.yellowUpdateFinished;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + caseName.hashCode();
    _result = _result * 37 + (caseSelected ? 0 : 1);
    _result = _result * 37 + (aFormInitiated ? 0 : 1);
    _result = _result * 37 + (aFormFilled ? 0 : 1);
    _result = _result * 37 + (yellowUpdateStarted ? 0 : 1);
    _result = _result * 37 + stepStats.hashCode();
    _result = _result * 37 + (yellowUpdateFinished ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String caseName;
    private Boolean caseSelected;
    private Boolean aFormInitiated;
    private Boolean aFormFilled;
    private Boolean yellowUpdateStarted;
    private StepStats stepStats;
    private Boolean yellowUpdateFinished;

    public Builder() {
      this.caseName = null;
      this.caseSelected = null;
      this.aFormInitiated = null;
      this.aFormFilled = null;
      this.yellowUpdateStarted = null;
      this.stepStats = null;
      this.yellowUpdateFinished = null;
    }

    public Builder setCaseName(String caseName) {
      this.caseName = Objects.requireNonNull(caseName);
      return this;
    }

    public Builder setCaseSelected(Boolean caseSelected) {
      this.caseSelected = Objects.requireNonNull(caseSelected);
      return this;
    }

    public Builder setAFormInitiated(Boolean aFormInitiated) {
      this.aFormInitiated = Objects.requireNonNull(aFormInitiated);
      return this;
    }

    public Builder setAFormFilled(Boolean aFormFilled) {
      this.aFormFilled = Objects.requireNonNull(aFormFilled);
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

    public Step2 create() {
      Builders.checkFieldInitialized("Step2", "caseName", caseName);
      Builders.checkFieldInitialized("Step2", "caseSelected", caseSelected);
      Builders.checkFieldInitialized("Step2", "aFormInitiated", aFormInitiated);
      Builders.checkFieldInitialized("Step2", "aFormFilled", aFormFilled);
      Builders.checkFieldInitialized("Step2", "yellowUpdateStarted", yellowUpdateStarted);
      Builders.checkFieldInitialized("Step2", "stepStats", stepStats);
      Builders.checkFieldInitialized("Step2", "yellowUpdateFinished", yellowUpdateFinished);
      return new Step2(caseName, caseSelected, aFormInitiated, aFormFilled, yellowUpdateStarted, stepStats, yellowUpdateFinished);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step2> FACTORY = new Factory<Step2>() {
    @Override
    public Step2 create() {
      return new Step2();
    }

    @Override
    public Step2 create(Step2 other) {
      return new Step2(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step2");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step2> jsonBinding() {
      return Step2.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step2> jsonBinding() {
    final Lazy<JsonBinding<String>> caseName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Boolean>> caseSelected = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> aFormInitiated = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> aFormFilled = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> yellowUpdateStarted = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<StepStats>> stepStats = new Lazy<>(() -> StepStats.jsonBinding());
    final Lazy<JsonBinding<Boolean>> yellowUpdateFinished = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step2> _factory = FACTORY;

    return new JsonBinding<Step2>() {
      @Override
      public Factory<Step2> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step2 _value) {
        JsonObject _result = new JsonObject();
        _result.add("caseName", caseName.get().toJson(_value.caseName));
        _result.add("caseSelected", caseSelected.get().toJson(_value.caseSelected));
        _result.add("aFormInitiated", aFormInitiated.get().toJson(_value.aFormInitiated));
        _result.add("aFormFilled", aFormFilled.get().toJson(_value.aFormFilled));
        _result.add("yellowUpdateStarted", yellowUpdateStarted.get().toJson(_value.yellowUpdateStarted));
        _result.add("stepStats", stepStats.get().toJson(_value.stepStats));
        _result.add("yellowUpdateFinished", yellowUpdateFinished.get().toJson(_value.yellowUpdateFinished));
        return _result;
      }

      @Override
      public Step2 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step2(
          JsonBindings.fieldFromJson(_obj, "caseName", caseName.get()),
          JsonBindings.fieldFromJson(_obj, "caseSelected", caseSelected.get()),
          JsonBindings.fieldFromJson(_obj, "aFormInitiated", aFormInitiated.get()),
          JsonBindings.fieldFromJson(_obj, "aFormFilled", aFormFilled.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateStarted", yellowUpdateStarted.get()),
          JsonBindings.fieldFromJson(_obj, "stepStats", stepStats.get()),
          JsonBindings.fieldFromJson(_obj, "yellowUpdateFinished", yellowUpdateFinished.get())
        );
      }
    };
  }
}
