/* @generated from adl module covhub.cases */

package adl.covhub.cases;

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

public class Coordinates {

  /* Members */

  private double xLat;
  private double yLng;
  private double zAlt;
  private double time;

  /* Constructors */

  public Coordinates(double xLat, double yLng, double zAlt, double time) {
    this.xLat = xLat;
    this.yLng = yLng;
    this.zAlt = zAlt;
    this.time = time;
  }

  public Coordinates() {
    this.xLat = 0.0;
    this.yLng = 0.0;
    this.zAlt = 0.0;
    this.time = 0.0;
  }

  public Coordinates(Coordinates other) {
    this.xLat = other.xLat;
    this.yLng = other.yLng;
    this.zAlt = other.zAlt;
    this.time = other.time;
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

  public double getZAlt() {
    return zAlt;
  }

  public void setZAlt(double zAlt) {
    this.zAlt = zAlt;
  }

  public double getTime() {
    return time;
  }

  public void setTime(double time) {
    this.time = time;
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Coordinates)) {
      return false;
    }
    Coordinates other = (Coordinates) other0;
    return
      xLat == other.xLat &&
      yLng == other.yLng &&
      zAlt == other.zAlt &&
      time == other.time;
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + Double.valueOf(xLat).hashCode();
    _result = _result * 37 + Double.valueOf(yLng).hashCode();
    _result = _result * 37 + Double.valueOf(zAlt).hashCode();
    _result = _result * 37 + Double.valueOf(time).hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Double xLat;
    private Double yLng;
    private Double zAlt;
    private Double time;

    public Builder() {
      this.xLat = null;
      this.yLng = null;
      this.zAlt = null;
      this.time = null;
    }

    public Builder setXLat(Double xLat) {
      this.xLat = Objects.requireNonNull(xLat);
      return this;
    }

    public Builder setYLng(Double yLng) {
      this.yLng = Objects.requireNonNull(yLng);
      return this;
    }

    public Builder setZAlt(Double zAlt) {
      this.zAlt = Objects.requireNonNull(zAlt);
      return this;
    }

    public Builder setTime(Double time) {
      this.time = Objects.requireNonNull(time);
      return this;
    }

    public Coordinates create() {
      Builders.checkFieldInitialized("Coordinates", "xLat", xLat);
      Builders.checkFieldInitialized("Coordinates", "yLng", yLng);
      Builders.checkFieldInitialized("Coordinates", "zAlt", zAlt);
      Builders.checkFieldInitialized("Coordinates", "time", time);
      return new Coordinates(xLat, yLng, zAlt, time);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Coordinates> FACTORY = new Factory<Coordinates>() {
    @Override
    public Coordinates create() {
      return new Coordinates();
    }

    @Override
    public Coordinates create(Coordinates other) {
      return new Coordinates(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.cases", "Coordinates");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Coordinates> jsonBinding() {
      return Coordinates.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Coordinates> jsonBinding() {
    final Lazy<JsonBinding<Double>> xLat = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Lazy<JsonBinding<Double>> yLng = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Lazy<JsonBinding<Double>> zAlt = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Lazy<JsonBinding<Double>> time = new Lazy<>(() -> JsonBindings.DOUBLE);
    final Factory<Coordinates> _factory = FACTORY;

    return new JsonBinding<Coordinates>() {
      @Override
      public Factory<Coordinates> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Coordinates _value) {
        JsonObject _result = new JsonObject();
        _result.add("xLat", xLat.get().toJson(_value.xLat));
        _result.add("yLng", yLng.get().toJson(_value.yLng));
        _result.add("zAlt", zAlt.get().toJson(_value.zAlt));
        _result.add("time", time.get().toJson(_value.time));
        return _result;
      }

      @Override
      public Coordinates fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Coordinates(
          JsonBindings.fieldFromJson(_obj, "xLat", xLat.get()),
          JsonBindings.fieldFromJson(_obj, "yLng", yLng.get()),
          JsonBindings.fieldFromJson(_obj, "zAlt", zAlt.get()),
          JsonBindings.fieldFromJson(_obj, "time", time.get())
        );
      }
    };
  }
}
