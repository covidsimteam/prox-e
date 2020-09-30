/* @generated from adl module covhub.roles */

package adl.covhub.roles;

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

public class ContactTracer {

  /* Members */

  private String id;
  private ArrayList<String> b1Forms;

  /* Constructors */

  public ContactTracer(String id, ArrayList<String> b1Forms) {
    this.id = Objects.requireNonNull(id);
    this.b1Forms = Objects.requireNonNull(b1Forms);
  }

  public ContactTracer() {
    this.id = "";
    this.b1Forms = new ArrayList<String>();
  }

  public ContactTracer(ContactTracer other) {
    this.id = other.id;
    this.b1Forms = Factories.arrayList(Factories.STRING).create(other.b1Forms);
  }

  /* Accessors and mutators */

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Objects.requireNonNull(id);
  }

  public ArrayList<String> getB1Forms() {
    return b1Forms;
  }

  public void setB1Forms(ArrayList<String> b1Forms) {
    this.b1Forms = Objects.requireNonNull(b1Forms);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof ContactTracer)) {
      return false;
    }
    ContactTracer other = (ContactTracer) other0;
    return
      id.equals(other.id) &&
      b1Forms.equals(other.b1Forms);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + id.hashCode();
    _result = _result * 37 + b1Forms.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String id;
    private ArrayList<String> b1Forms;

    public Builder() {
      this.id = null;
      this.b1Forms = null;
    }

    public Builder setId(String id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setB1Forms(ArrayList<String> b1Forms) {
      this.b1Forms = Objects.requireNonNull(b1Forms);
      return this;
    }

    public ContactTracer create() {
      Builders.checkFieldInitialized("ContactTracer", "id", id);
      Builders.checkFieldInitialized("ContactTracer", "b1Forms", b1Forms);
      return new ContactTracer(id, b1Forms);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<ContactTracer> FACTORY = new Factory<ContactTracer>() {
    @Override
    public ContactTracer create() {
      return new ContactTracer();
    }

    @Override
    public ContactTracer create(ContactTracer other) {
      return new ContactTracer(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.roles", "ContactTracer");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<ContactTracer> jsonBinding() {
      return ContactTracer.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<ContactTracer> jsonBinding() {
    final Lazy<JsonBinding<String>> id = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<ArrayList<String>>> b1Forms = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Factory<ContactTracer> _factory = FACTORY;

    return new JsonBinding<ContactTracer>() {
      @Override
      public Factory<ContactTracer> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(ContactTracer _value) {
        JsonObject _result = new JsonObject();
        _result.add("id", id.get().toJson(_value.id));
        _result.add("b1Forms", b1Forms.get().toJson(_value.b1Forms));
        return _result;
      }

      @Override
      public ContactTracer fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new ContactTracer(
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "b1Forms", b1Forms.get())
        );
      }
    };
  }
}
