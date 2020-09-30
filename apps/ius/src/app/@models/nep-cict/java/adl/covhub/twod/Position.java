/* @generated from adl module covhub.twod */

package adl.covhub.twod;

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

public class Position {

  /* Members */

  private double xLat;
  private double yLng;

  /* Constructors */

  public Position(double xLat, double yLng) {
    this.xLat = xLat;
    this.yLng = yLng;
  }

  public Position() {
    this.xLat = 0.0;
    this.yLng = 0.0;
  }

  public Position(Position other) {
    this.xLat = other.xLat;
    this.yLng = other.yLng;
  }

  /* Accessors and mutators */

  public double getXLat() {
    return xLat;
  }

  public void setXLat(double xLat) {
    this.xLat = xLat;
  }

  public double getYLng() {
    return yLng;
  }

  public void setYLng(double yLng) {
    this.yLng = yLng;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Position)) {
      return false;
    }
    Position other = (Position) other0;
    return
      xLat == other.xLat &&
      yLng == other.yLng;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + Double.valueOf(xLat).hashCode();
    _result = _result * 37 + Double.valueOf(yLng).hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Double xLat;
    private Double yLng;

    public Builder() {
      this.xLat = null;
      this.yLng = null;
    }

    public Builder setXLat(Double xLat) {
      this.xLat = Objects.requireNonNull(xLat);
      return this;
    }

    public Builder setYLng(Double yLng) {
      this.yLng = Objects.requireNonNull(yLng);
      return this;
    }

    public Position create() {
      Builders.checkFieldInitialized("Position", "xLat", xLat);
      Builders.checkFieldInitialized("Position", "yLng", yLng);
      return new Position(xLat, yLng);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Position> FACTORY = new Factory<Position>() {
    @Override
    public Position create() {
      return new Position();
    }

    @Override
    public Position create(Position other) {
      return new Position(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.twod", "Position");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Position> jsonBinding() {
      return Position.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Position> jsonBinding() {
    final Lazy<JsonBinding<Double>> xLat = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Lazy<JsonBinding<Double>> yLng = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Factory<Position> _factory = FACTORY;

    return new JsonBinding<Position>() {
      @Override
      public Factory<Position> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Position _value) {
        JsonObject _result = new JsonObject();
        _result.add("xLat", xLat.get().toJson(_value.xLat));
        _result.add("yLng", yLng.get().toJson(_value.yLng));
        return _result;
      }

      @Override
      public Position fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Position(
          JsonBindings.fieldFromJson(_obj, "xLat", xLat.get()),
          JsonBindings.fieldFromJson(_obj, "yLng", yLng.get())
        );
      }
    };
  }
}
