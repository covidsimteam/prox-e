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

public class Step5 {

  /* Members */

  private String labPersonnel;
  private short sixDayCounter;
  private boolean labFormFilled;
  private boolean sampleCollected;
  private boolean printed;
  private boolean sentToLab;

  /* Constructors */

  public Step5(String labPersonnel, short sixDayCounter, boolean labFormFilled, boolean sampleCollected, boolean printed, boolean sentToLab) {
    this.labPersonnel = Objects.requireNonNull(labPersonnel);
    this.sixDayCounter = sixDayCounter;
    this.labFormFilled = labFormFilled;
    this.sampleCollected = sampleCollected;
    this.printed = printed;
    this.sentToLab = sentToLab;
  }

  public Step5() {
    this.labPersonnel = "";
    this.sixDayCounter = (short)0;
    this.labFormFilled = false;
    this.sampleCollected = false;
    this.printed = false;
    this.sentToLab = false;
  }

  public Step5(Step5 other) {
    this.labPersonnel = other.labPersonnel;
    this.sixDayCounter = other.sixDayCounter;
    this.labFormFilled = other.labFormFilled;
    this.sampleCollected = other.sampleCollected;
    this.printed = other.printed;
    this.sentToLab = other.sentToLab;
  }

  /* Accessors and mutators */

  public String getLabPersonnel() {
    return labPersonnel;
  }

  public void setLabPersonnel(String labPersonnel) {
    this.labPersonnel = Objects.requireNonNull(labPersonnel);
  }

  public short getSixDayCounter() {
    return sixDayCounter;
  }

  public void setSixDayCounter(short sixDayCounter) {
    this.sixDayCounter = sixDayCounter;
  }

  public boolean getLabFormFilled() {
    return labFormFilled;
  }

  public void setLabFormFilled(boolean labFormFilled) {
    this.labFormFilled = labFormFilled;
  }

  public boolean getSampleCollected() {
    return sampleCollected;
  }

  public void setSampleCollected(boolean sampleCollected) {
    this.sampleCollected = sampleCollected;
  }

  public boolean getPrinted() {
    return printed;
  }

  public void setPrinted(boolean printed) {
    this.printed = printed;
  }

  public boolean getSentToLab() {
    return sentToLab;
  }

  public void setSentToLab(boolean sentToLab) {
    this.sentToLab = sentToLab;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Step5)) {
      return false;
    }
    Step5 other = (Step5) other0;
    return
      labPersonnel.equals(other.labPersonnel) &&
      sixDayCounter == other.sixDayCounter &&
      labFormFilled == other.labFormFilled &&
      sampleCollected == other.sampleCollected &&
      printed == other.printed &&
      sentToLab == other.sentToLab;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + labPersonnel.hashCode();
    _result = _result * 37 + (int) sixDayCounter;
    _result = _result * 37 + (labFormFilled ? 0 : 1);
    _result = _result * 37 + (sampleCollected ? 0 : 1);
    _result = _result * 37 + (printed ? 0 : 1);
    _result = _result * 37 + (sentToLab ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String labPersonnel;
    private Short sixDayCounter;
    private Boolean labFormFilled;
    private Boolean sampleCollected;
    private Boolean printed;
    private Boolean sentToLab;

    public Builder() {
      this.labPersonnel = null;
      this.sixDayCounter = null;
      this.labFormFilled = null;
      this.sampleCollected = null;
      this.printed = null;
      this.sentToLab = null;
    }

    public Builder setLabPersonnel(String labPersonnel) {
      this.labPersonnel = Objects.requireNonNull(labPersonnel);
      return this;
    }

    public Builder setSixDayCounter(Short sixDayCounter) {
      this.sixDayCounter = Objects.requireNonNull(sixDayCounter);
      return this;
    }

    public Builder setLabFormFilled(Boolean labFormFilled) {
      this.labFormFilled = Objects.requireNonNull(labFormFilled);
      return this;
    }

    public Builder setSampleCollected(Boolean sampleCollected) {
      this.sampleCollected = Objects.requireNonNull(sampleCollected);
      return this;
    }

    public Builder setPrinted(Boolean printed) {
      this.printed = Objects.requireNonNull(printed);
      return this;
    }

    public Builder setSentToLab(Boolean sentToLab) {
      this.sentToLab = Objects.requireNonNull(sentToLab);
      return this;
    }

    public Step5 create() {
      Builders.checkFieldInitialized("Step5", "labPersonnel", labPersonnel);
      Builders.checkFieldInitialized("Step5", "sixDayCounter", sixDayCounter);
      Builders.checkFieldInitialized("Step5", "labFormFilled", labFormFilled);
      Builders.checkFieldInitialized("Step5", "sampleCollected", sampleCollected);
      Builders.checkFieldInitialized("Step5", "printed", printed);
      Builders.checkFieldInitialized("Step5", "sentToLab", sentToLab);
      return new Step5(labPersonnel, sixDayCounter, labFormFilled, sampleCollected, printed, sentToLab);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step5> FACTORY = new Factory<Step5>() {
    @Override
    public Step5 create() {
      return new Step5();
    }

    @Override
    public Step5 create(Step5 other) {
      return new Step5(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step5");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step5> jsonBinding() {
      return Step5.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step5> jsonBinding() {
    final Lazy<JsonBinding<String>> labPersonnel = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<Short>> sixDayCounter = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<Boolean>> labFormFilled = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> sampleCollected = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> printed = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Boolean>> sentToLab = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step5> _factory = FACTORY;

    return new JsonBinding<Step5>() {
      @Override
      public Factory<Step5> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step5 _value) {
        JsonObject _result = new JsonObject();
        _result.add("labPersonnel", labPersonnel.get().toJson(_value.labPersonnel));
        _result.add("sixDayCounter", sixDayCounter.get().toJson(_value.sixDayCounter));
        _result.add("labFormFilled", labFormFilled.get().toJson(_value.labFormFilled));
        _result.add("sampleCollected", sampleCollected.get().toJson(_value.sampleCollected));
        _result.add("printed", printed.get().toJson(_value.printed));
        _result.add("sentToLab", sentToLab.get().toJson(_value.sentToLab));
        return _result;
      }

      @Override
      public Step5 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step5(
          JsonBindings.fieldFromJson(_obj, "labPersonnel", labPersonnel.get()),
          JsonBindings.fieldFromJson(_obj, "sixDayCounter", sixDayCounter.get()),
          JsonBindings.fieldFromJson(_obj, "labFormFilled", labFormFilled.get()),
          JsonBindings.fieldFromJson(_obj, "sampleCollected", sampleCollected.get()),
          JsonBindings.fieldFromJson(_obj, "printed", printed.get()),
          JsonBindings.fieldFromJson(_obj, "sentToLab", sentToLab.get())
        );
      }
    };
  }
}
