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

public class ContactFollowup {

  /* Members */

  private String id;
  private ArrayList<String> b2Forms;

  /* Constructors */

  public ContactFollowup(String id, ArrayList<String> b2Forms) {
    this.id = Objects.requireNonNull(id);
    this.b2Forms = Objects.requireNonNull(b2Forms);
  }

  public ContactFollowup() {
    this.id = "";
    this.b2Forms = new ArrayList<String>();
  }

  public ContactFollowup(ContactFollowup other) {
    this.id = other.id;
    this.b2Forms = Factories.arrayList(Factories.STRING).create(other.b2Forms);
  }

  /* Accessors and mutators */

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Objects.requireNonNull(id);
  }

  public ArrayList<String> getB2Forms() {
    return b2Forms;
  }

  public void setB2Forms(ArrayList<String> b2Forms) {
    this.b2Forms = Objects.requireNonNull(b2Forms);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof ContactFollowup)) {
      return false;
    }
    ContactFollowup other = (ContactFollowup) other0;
    return
      id.equals(other.id) &&
      b2Forms.equals(other.b2Forms);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + id.hashCode();
    _result = _result * 37 + b2Forms.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String id;
    private ArrayList<String> b2Forms;

    public Builder() {
      this.id = null;
      this.b2Forms = null;
    }

    public Builder setId(String id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setB2Forms(ArrayList<String> b2Forms) {
      this.b2Forms = Objects.requireNonNull(b2Forms);
      return this;
    }

    public ContactFollowup create() {
      Builders.checkFieldInitialized("ContactFollowup", "id", id);
      Builders.checkFieldInitialized("ContactFollowup", "b2Forms", b2Forms);
      return new ContactFollowup(id, b2Forms);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<ContactFollowup> FACTORY = new Factory<ContactFollowup>() {
    @Override
    public ContactFollowup create() {
      return new ContactFollowup();
    }

    @Override
    public ContactFollowup create(ContactFollowup other) {
      return new ContactFollowup(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.roles", "ContactFollowup");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<ContactFollowup> jsonBinding() {
      return ContactFollowup.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<ContactFollowup> jsonBinding() {
    final Lazy<JsonBinding<String>> id = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<ArrayList<String>>> b2Forms = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Factory<ContactFollowup> _factory = FACTORY;

    return new JsonBinding<ContactFollowup>() {
      @Override
      public Factory<ContactFollowup> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(ContactFollowup _value) {
        JsonObject _result = new JsonObject();
        _result.add("id", id.get().toJson(_value.id));
        _result.add("b2Forms", b2Forms.get().toJson(_value.b2Forms));
        return _result;
      }

      @Override
      public ContactFollowup fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new ContactFollowup(
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "b2Forms", b2Forms.get())
        );
      }
    };
  }
}
