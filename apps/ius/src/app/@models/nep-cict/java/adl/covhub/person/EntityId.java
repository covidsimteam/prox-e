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

public class EntityId {

  /* Members */

  private double value;

  /* Constructors */

  public EntityId(double value) {
    this.value = value;
  }

  public EntityId() {
    this.value = 0.0;
  }

  public EntityId(EntityId other) {
    this.value = other.value;
  }

  /* Accessors and mutators */

  public double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof EntityId)) {
      return false;
    }
    EntityId other = (EntityId) other0;
    return
      value == other.value;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + Double.valueOf(value).hashCode();
    return _result;
  }

  /* Factory for construction of generic values */

  public static final Factory<EntityId> FACTORY = new Factory<EntityId>() {
    @Override
    public EntityId create() {
      return new EntityId();
    }

    @Override
    public EntityId create(EntityId other) {
      return new EntityId(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.person", "EntityId");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<EntityId> jsonBinding() {
      return EntityId.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<EntityId> jsonBinding() {
    final JsonBinding<Double> _binding = JsonBindings.DOUBLE;
    final Factory<EntityId> _factory = FACTORY;

    return new JsonBinding<EntityId>() {
      @Override
      public Factory<EntityId> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(EntityId _value) {
        return _binding.toJson(_value.value);
      }

      @Override
      public EntityId fromJson(JsonElement _json) {
        return new EntityId(_binding.fromJson(_json));
      }
    };
  }
}
