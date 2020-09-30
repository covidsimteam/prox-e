/* @generated from adl module covhub.model */

package adl.covhub.model;

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

public class Address {

  /* Members */

  private int id;
  private ArrayList<String> details;

  /* Constructors */

  public Address(int id, ArrayList<String> details) {
    this.id = id;
    this.details = Objects.requireNonNull(details);
  }

  public Address() {
    this.id = 0;
    this.details = new ArrayList<String>();
  }

  public Address(Address other) {
    this.id = other.id;
    this.details = Factories.arrayList(Factories.STRING).create(other.details);
  }

  /* Accessors and mutators */

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public ArrayList<String> getDetails() {
    return details;
  }

  public void setDetails(ArrayList<String> details) {
    this.details = Objects.requireNonNull(details);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Address)) {
      return false;
    }
    Address other = (Address) other0;
    return
      id == other.id &&
      details.equals(other.details);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + id;
    _result = _result * 37 + details.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Integer id;
    private ArrayList<String> details;

    public Builder() {
      this.id = null;
      this.details = null;
    }

    public Builder setId(Integer id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setDetails(ArrayList<String> details) {
      this.details = Objects.requireNonNull(details);
      return this;
    }

    public Address create() {
      Builders.checkFieldInitialized("Address", "id", id);
      Builders.checkFieldInitialized("Address", "details", details);
      return new Address(id, details);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Address> FACTORY = new Factory<Address>() {
    @Override
    public Address create() {
      return new Address();
    }

    @Override
    public Address create(Address other) {
      return new Address(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.model", "Address");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Address> jsonBinding() {
      return Address.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Address> jsonBinding() {
    final Lazy<JsonBinding<Integer>> id = new Lazy<>(() -> JsonBindings.INT32);
    final Lazy<JsonBinding<ArrayList<String>>> details = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Factory<Address> _factory = FACTORY;

    return new JsonBinding<Address>() {
      @Override
      public Factory<Address> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Address _value) {
        JsonObject _result = new JsonObject();
        _result.add("id", id.get().toJson(_value.id));
        _result.add("details", details.get().toJson(_value.details));
        return _result;
      }

      @Override
      public Address fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Address(
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "details", details.get())
        );
      }
    };
  }
}
