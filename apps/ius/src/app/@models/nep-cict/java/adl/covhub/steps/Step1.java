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

public class Step1 {

  /* Members */

  private boolean coordinatorInitiated;
  private boolean coordinatorSubmitted;
  private boolean yellowCellsInititated;
  private ArrayList<Boolean> yellowCellsUpdated;
  private ArrayList<Boolean> yellowCellsFilled;
  private boolean caseInvestigatorAssigned;
  private boolean oneDayReached;
  private boolean twoDaysReached;

  /* Constructors */

  public Step1(boolean coordinatorInitiated, boolean coordinatorSubmitted, boolean yellowCellsInititated, ArrayList<Boolean> yellowCellsUpdated, ArrayList<Boolean> yellowCellsFilled, boolean caseInvestigatorAssigned, boolean oneDayReached, boolean twoDaysReached) {
    this.coordinatorInitiated = coordinatorInitiated;
    this.coordinatorSubmitted = coordinatorSubmitted;
    this.yellowCellsInititated = yellowCellsInititated;
    this.yellowCellsUpdated = Objects.requireNonNull(yellowCellsUpdated);
    this.yellowCellsFilled = Objects.requireNonNull(yellowCellsFilled);
    this.caseInvestigatorAssigned = caseInvestigatorAssigned;
    this.oneDayReached = oneDayReached;
    this.twoDaysReached = twoDaysReached;
  }

  public Step1() {
    this.coordinatorInitiated = false;
    this.coordinatorSubmitted = false;
    this.yellowCellsInititated = false;
    this.yellowCellsUpdated = new ArrayList<Boolean>();
    this.yellowCellsFilled = new ArrayList<Boolean>();
    this.caseInvestigatorAssigned = false;
    this.oneDayReached = false;
    this.twoDaysReached = false;
  }

  public Step1(Step1 other) {
    this.coordinatorInitiated = other.coordinatorInitiated;
    this.coordinatorSubmitted = other.coordinatorSubmitted;
    this.yellowCellsInititated = other.yellowCellsInititated;
    this.yellowCellsUpdated = Factories.arrayList(Factories.BOOLEAN).create(other.yellowCellsUpdated);
    this.yellowCellsFilled = Factories.arrayList(Factories.BOOLEAN).create(other.yellowCellsFilled);
    this.caseInvestigatorAssigned = other.caseInvestigatorAssigned;
    this.oneDayReached = other.oneDayReached;
    this.twoDaysReached = other.twoDaysReached;
  }

  /* Accessors and mutators */

  public boolean getCoordinatorInitiated() {
    return coordinatorInitiated;
  }

  public void setCoordinatorInitiated(boolean coordinatorInitiated) {
    this.coordinatorInitiated = coordinatorInitiated;
  }

  public boolean getCoordinatorSubmitted() {
    return coordinatorSubmitted;
  }

  public void setCoordinatorSubmitted(boolean coordinatorSubmitted) {
    this.coordinatorSubmitted = coordinatorSubmitted;
  }

  public boolean getYellowCellsInititated() {
    return yellowCellsInititated;
  }

  public void setYellowCellsInititated(boolean yellowCellsInititated) {
    this.yellowCellsInititated = yellowCellsInititated;
  }

  public ArrayList<Boolean> getYellowCellsUpdated() {
    return yellowCellsUpdated;
  }

  public void setYellowCellsUpdated(ArrayList<Boolean> yellowCellsUpdated) {
    this.yellowCellsUpdated = Objects.requireNonNull(yellowCellsUpdated);
  }

  public ArrayList<Boolean> getYellowCellsFilled() {
    return yellowCellsFilled;
  }

  public void setYellowCellsFilled(ArrayList<Boolean> yellowCellsFilled) {
    this.yellowCellsFilled = Objects.requireNonNull(yellowCellsFilled);
  }

  public boolean getCaseInvestigatorAssigned() {
    return caseInvestigatorAssigned;
  }

  public void setCaseInvestigatorAssigned(boolean caseInvestigatorAssigned) {
    this.caseInvestigatorAssigned = caseInvestigatorAssigned;
  }

  public boolean getOneDayReached() {
    return oneDayReached;
  }

  public void setOneDayReached(boolean oneDayReached) {
    this.oneDayReached = oneDayReached;
  }

  public boolean getTwoDaysReached() {
    return twoDaysReached;
  }

  public void setTwoDaysReached(boolean twoDaysReached) {
    this.twoDaysReached = twoDaysReached;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Step1)) {
      return false;
    }
    Step1 other = (Step1) other0;
    return
      coordinatorInitiated == other.coordinatorInitiated &&
      coordinatorSubmitted == other.coordinatorSubmitted &&
      yellowCellsInititated == other.yellowCellsInititated &&
      yellowCellsUpdated.equals(other.yellowCellsUpdated) &&
      yellowCellsFilled.equals(other.yellowCellsFilled) &&
      caseInvestigatorAssigned == other.caseInvestigatorAssigned &&
      oneDayReached == other.oneDayReached &&
      twoDaysReached == other.twoDaysReached;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + (coordinatorInitiated ? 0 : 1);
    _result = _result * 37 + (coordinatorSubmitted ? 0 : 1);
    _result = _result * 37 + (yellowCellsInititated ? 0 : 1);
    _result = _result * 37 + yellowCellsUpdated.hashCode();
    _result = _result * 37 + yellowCellsFilled.hashCode();
    _result = _result * 37 + (caseInvestigatorAssigned ? 0 : 1);
    _result = _result * 37 + (oneDayReached ? 0 : 1);
    _result = _result * 37 + (twoDaysReached ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Boolean coordinatorInitiated;
    private Boolean coordinatorSubmitted;
    private Boolean yellowCellsInititated;
    private ArrayList<Boolean> yellowCellsUpdated;
    private ArrayList<Boolean> yellowCellsFilled;
    private Boolean caseInvestigatorAssigned;
    private Boolean oneDayReached;
    private Boolean twoDaysReached;

    public Builder() {
      this.coordinatorInitiated = null;
      this.coordinatorSubmitted = null;
      this.yellowCellsInititated = null;
      this.yellowCellsUpdated = null;
      this.yellowCellsFilled = null;
      this.caseInvestigatorAssigned = null;
      this.oneDayReached = null;
      this.twoDaysReached = null;
    }

    public Builder setCoordinatorInitiated(Boolean coordinatorInitiated) {
      this.coordinatorInitiated = Objects.requireNonNull(coordinatorInitiated);
      return this;
    }

    public Builder setCoordinatorSubmitted(Boolean coordinatorSubmitted) {
      this.coordinatorSubmitted = Objects.requireNonNull(coordinatorSubmitted);
      return this;
    }

    public Builder setYellowCellsInititated(Boolean yellowCellsInititated) {
      this.yellowCellsInititated = Objects.requireNonNull(yellowCellsInititated);
      return this;
    }

    public Builder setYellowCellsUpdated(ArrayList<Boolean> yellowCellsUpdated) {
      this.yellowCellsUpdated = Objects.requireNonNull(yellowCellsUpdated);
      return this;
    }

    public Builder setYellowCellsFilled(ArrayList<Boolean> yellowCellsFilled) {
      this.yellowCellsFilled = Objects.requireNonNull(yellowCellsFilled);
      return this;
    }

    public Builder setCaseInvestigatorAssigned(Boolean caseInvestigatorAssigned) {
      this.caseInvestigatorAssigned = Objects.requireNonNull(caseInvestigatorAssigned);
      return this;
    }

    public Builder setOneDayReached(Boolean oneDayReached) {
      this.oneDayReached = Objects.requireNonNull(oneDayReached);
      return this;
    }

    public Builder setTwoDaysReached(Boolean twoDaysReached) {
      this.twoDaysReached = Objects.requireNonNull(twoDaysReached);
      return this;
    }

    public Step1 create() {
      Builders.checkFieldInitialized("Step1", "coordinatorInitiated", coordinatorInitiated);
      Builders.checkFieldInitialized("Step1", "coordinatorSubmitted", coordinatorSubmitted);
      Builders.checkFieldInitialized("Step1", "yellowCellsInititated", yellowCellsInititated);
      Builders.checkFieldInitialized("Step1", "yellowCellsUpdated", yellowCellsUpdated);
      Builders.checkFieldInitialized("Step1", "yellowCellsFilled", yellowCellsFilled);
      Builders.checkFieldInitialized("Step1", "caseInvestigatorAssigned", caseInvestigatorAssigned);
      Builders.checkFieldInitialized("Step1", "oneDayReached", oneDayReached);
      Builders.checkFieldInitialized("Step1", "twoDaysReached", twoDaysReached);
      return new Step1(coordinatorInitiated, coordinatorSubmitted, yellowCellsInititated, yellowCellsUpdated, yellowCellsFilled, caseInvestigatorAssigned, oneDayReached, twoDaysReached);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step1> FACTORY = new Factory<Step1>() {
    @Override
    public Step1 create() {
      return new Step1();
    }

    @Override
    public Step1 create(Step1 other) {
      return new Step1(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step1");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step1> jsonBinding() {
      return Step1.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step1> jsonBinding() {
    final Lazy<JsonBinding<Boolean>> coordinatorInitiated = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> coordinatorSubmitted = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> yellowCellsInititated = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<ArrayList<Boolean>>> yellowCellsUpdated = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.BOOLEAN));
    final Lazy<JsonBinding<ArrayList<Boolean>>> yellowCellsFilled = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.BOOLEAN));
    final Lazy<JsonBinding<Boolean>> caseInvestigatorAssigned = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> oneDayReached = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> twoDaysReached = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step1> _factory = FACTORY;

    return new JsonBinding<Step1>() {
      @Override
      public Factory<Step1> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step1 _value) {
        JsonObject _result = new JsonObject();
        _result.add("coordinatorInitiated", coordinatorInitiated.get().toJson(_value.coordinatorInitiated));
        _result.add("coordinatorSubmitted", coordinatorSubmitted.get().toJson(_value.coordinatorSubmitted));
        _result.add("yellowCellsInititated", yellowCellsInititated.get().toJson(_value.yellowCellsInititated));
        _result.add("yellowCellsUpdated", yellowCellsUpdated.get().toJson(_value.yellowCellsUpdated));
        _result.add("yellowCellsFilled", yellowCellsFilled.get().toJson(_value.yellowCellsFilled));
        _result.add("caseInvestigatorAssigned", caseInvestigatorAssigned.get().toJson(_value.caseInvestigatorAssigned));
        _result.add("oneDayReached", oneDayReached.get().toJson(_value.oneDayReached));
        _result.add("twoDaysReached", twoDaysReached.get().toJson(_value.twoDaysReached));
        return _result;
      }

      @Override
      public Step1 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step1(
          JsonBindings.fieldFromJson(_obj, "coordinatorInitiated", coordinatorInitiated.get()),
          JsonBindings.fieldFromJson(_obj, "coordinatorSubmitted", coordinatorSubmitted.get()),
          JsonBindings.fieldFromJson(_obj, "yellowCellsInititated", yellowCellsInititated.get()),
          JsonBindings.fieldFromJson(_obj, "yellowCellsUpdated", yellowCellsUpdated.get()),
          JsonBindings.fieldFromJson(_obj, "yellowCellsFilled", yellowCellsFilled.get()),
          JsonBindings.fieldFromJson(_obj, "caseInvestigatorAssigned", caseInvestigatorAssigned.get()),
          JsonBindings.fieldFromJson(_obj, "oneDayReached", oneDayReached.get()),
          JsonBindings.fieldFromJson(_obj, "twoDaysReached", twoDaysReached.get())
        );
      }
    };
  }
}
