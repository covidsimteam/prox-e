/* @generated from adl module covhub.person */

package adl.covhub.person;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.adl.runtime.Factories;
import org.adl.runtime.Factory;
import org.adl.runtime.JsonBinding;
import org.adl.runtime.JsonBindings;
import org.adl.runtime.sys.adlast.ScopedName;
import org.adl.runtime.sys.adlast.TypeExpr;
import org.adl.runtime.sys.adlast.TypeRef;
import java.util.ArrayList;
import java.util.Objects;

public class UserId {

  /* Members */

  private String value;

  /* Constructors */

  public UserId(String value) {
    this.value = Objects.requireNonNull(value);
  }

  public UserId() {
    this.value = "";
  }

  public UserId(UserId other) {
    this.value = other.value;
  }

  /* Accessors and mutators */

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = Objects.requireNonNull(value);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof UserId)) {
      return false;
    }
    UserId other = (UserId) other0;
    return
      value.equals(other.value);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + value.hashCode();
    return _result;
  }

  /* Factory for construction of generic values */

  public static final Factory<UserId> FACTORY = new Factory<UserId>() {
    @Override
    public UserId create() {
      return new UserId();
    }

    @Override
    public UserId create(UserId other) {
      return new UserId(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.person", "UserId");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<UserId> jsonBinding() {
      return UserId.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<UserId> jsonBinding() {
    final JsonBinding<String> _binding = JsonBindings.STRING;
    final Factory<UserId> _factory = FACTORY;

    return new JsonBinding<UserId>() {
      @Override
      public Factory<UserId> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(UserId _value) {
        return _binding.toJson(_value.value);
      }

      @Override
      public UserId fromJson(JsonElement _json) {
        return new UserId(_binding.fromJson(_json));
      }
    };
  }
}
