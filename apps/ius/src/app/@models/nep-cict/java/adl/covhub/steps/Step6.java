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

public class Step6 {

  /* Members */

  private boolean positive;
  private short sevenDayCounter;
  private ArrayList<String> contacts;
  private boolean allNotified;

  /* Constructors */

  public Step6(boolean positive, short sevenDayCounter, ArrayList<String> contacts, boolean allNotified) {
    this.positive = positive;
    this.sevenDayCounter = sevenDayCounter;
    this.contacts = Objects.requireNonNull(contacts);
    this.allNotified = allNotified;
  }

  public Step6() {
    this.positive = false;
    this.sevenDayCounter = (short)0;
    this.contacts = new ArrayList<String>();
    this.allNotified = false;
  }

  public Step6(Step6 other) {
    this.positive = other.positive;
    this.sevenDayCounter = other.sevenDayCounter;
    this.contacts = Factories.arrayList(Factories.STRING).create(other.contacts);
    this.allNotified = other.allNotified;
  }

  /* Accessors and mutators */

  public boolean getPositive() {
    return positive;
  }

  public void setPositive(boolean positive) {
    this.positive = positive;
  }

  public short getSevenDayCounter() {
    return sevenDayCounter;
  }

  public void setSevenDayCounter(short sevenDayCounter) {
    this.sevenDayCounter = sevenDayCounter;
  }

  public ArrayList<String> getContacts() {
    return contacts;
  }

  public void setContacts(ArrayList<String> contacts) {
    this.contacts = Objects.requireNonNull(contacts);
  }

  public boolean getAllNotified() {
    return allNotified;
  }

  public void setAllNotified(boolean allNotified) {
    this.allNotified = allNotified;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Step6)) {
      return false;
    }
    Step6 other = (Step6) other0;
    return
      positive == other.positive &&
      sevenDayCounter == other.sevenDayCounter &&
      contacts.equals(other.contacts) &&
      allNotified == other.allNotified;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + (positive ? 0 : 1);
    _result = _result * 37 + (int) sevenDayCounter;
    _result = _result * 37 + contacts.hashCode();
    _result = _result * 37 + (allNotified ? 0 : 1);
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Boolean positive;
    private Short sevenDayCounter;
    private ArrayList<String> contacts;
    private Boolean allNotified;

    public Builder() {
      this.positive = null;
      this.sevenDayCounter = null;
      this.contacts = null;
      this.allNotified = null;
    }

    public Builder setPositive(Boolean positive) {
      this.positive = Objects.requireNonNull(positive);
      return this;
    }

    public Builder setSevenDayCounter(Short sevenDayCounter) {
      this.sevenDayCounter = Objects.requireNonNull(sevenDayCounter);
      return this;
    }

    public Builder setContacts(ArrayList<String> contacts) {
      this.contacts = Objects.requireNonNull(contacts);
      return this;
    }

    public Builder setAllNotified(Boolean allNotified) {
      this.allNotified = Objects.requireNonNull(allNotified);
      return this;
    }

    public Step6 create() {
      Builders.checkFieldInitialized("Step6", "positive", positive);
      Builders.checkFieldInitialized("Step6", "sevenDayCounter", sevenDayCounter);
      Builders.checkFieldInitialized("Step6", "contacts", contacts);
      Builders.checkFieldInitialized("Step6", "allNotified", allNotified);
      return new Step6(positive, sevenDayCounter, contacts, allNotified);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Step6> FACTORY = new Factory<Step6>() {
    @Override
    public Step6 create() {
      return new Step6();
    }

    @Override
    public Step6 create(Step6 other) {
      return new Step6(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.steps", "Step6");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Step6> jsonBinding() {
      return Step6.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Step6> jsonBinding() {
    final Lazy<JsonBinding<Boolean>> positive = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Lazy<JsonBinding<Short>> sevenDayCounter = new Lazy<>(() -> JsonBindings.INT16);
    final Lazy<JsonBinding<ArrayList<String>>> contacts = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<Boolean>> allNotified = new Lazy<>(() -> JsonBindings.BOOLEAN);
    final Factory<Step6> _factory = FACTORY;

    return new JsonBinding<Step6>() {
      @Override
      public Factory<Step6> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Step6 _value) {
        JsonObject _result = new JsonObject();
        _result.add("positive", positive.get().toJson(_value.positive));
        _result.add("sevenDayCounter", sevenDayCounter.get().toJson(_value.sevenDayCounter));
        _result.add("contacts", contacts.get().toJson(_value.contacts));
        _result.add("allNotified", allNotified.get().toJson(_value.allNotified));
        return _result;
      }

      @Override
      public Step6 fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Step6(
          JsonBindings.fieldFromJson(_obj, "positive", positive.get()),
          JsonBindings.fieldFromJson(_obj, "sevenDayCounter", sevenDayCounter.get()),
          JsonBindings.fieldFromJson(_obj, "contacts", contacts.get()),
          JsonBindings.fieldFromJson(_obj, "allNotified", allNotified.get())
        );
      }
    };
  }
}
