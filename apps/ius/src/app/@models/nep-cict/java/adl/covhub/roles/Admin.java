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

public class Admin {

  /* Members */

  private String domain;
  private String id;
  private String key;

  /* Constructors */

  public Admin(String domain, String id, String key) {
    this.domain = Objects.requireNonNull(domain);
    this.id = Objects.requireNonNull(id);
    this.key = Objects.requireNonNull(key);
  }

  public Admin() {
    this.domain = "";
    this.id = "";
    this.key = "";
  }

  public Admin(Admin other) {
    this.domain = other.domain;
    this.id = other.id;
    this.key = other.key;
  }

  /* Accessors and mutators */

  public String getDomain() {
    return domain;
  }

  public void setDomain(String domain) {
    this.domain = Objects.requireNonNull(domain);
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Objects.requireNonNull(id);
  }

  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = Objects.requireNonNull(key);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Admin)) {
      return false;
    }
    Admin other = (Admin) other0;
    return
      domain.equals(other.domain) &&
      id.equals(other.id) &&
      key.equals(other.key);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + domain.hashCode();
    _result = _result * 37 + id.hashCode();
    _result = _result * 37 + key.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String domain;
    private String id;
    private String key;

    public Builder() {
      this.domain = null;
      this.id = null;
      this.key = null;
    }

    public Builder setDomain(String domain) {
      this.domain = Objects.requireNonNull(domain);
      return this;
    }

    public Builder setId(String id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setKey(String key) {
      this.key = Objects.requireNonNull(key);
      return this;
    }

    public Admin create() {
      Builders.checkFieldInitialized("Admin", "domain", domain);
      Builders.checkFieldInitialized("Admin", "id", id);
      Builders.checkFieldInitialized("Admin", "key", key);
      return new Admin(domain, id, key);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Admin> FACTORY = new Factory<Admin>() {
    @Override
    public Admin create() {
      return new Admin();
    }

    @Override
    public Admin create(Admin other) {
      return new Admin(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.roles", "Admin");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Admin> jsonBinding() {
      return Admin.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Admin> jsonBinding() {
    final Lazy<JsonBinding<String>> domain = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> id = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> key = new Lazy<>(() -> JsonBindings.STRING);
    final Factory<Admin> _factory = FACTORY;

    return new JsonBinding<Admin>() {
      @Override
      public Factory<Admin> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Admin _value) {
        JsonObject _result = new JsonObject();
        _result.add("domain", domain.get().toJson(_value.domain));
        _result.add("id", id.get().toJson(_value.id));
        _result.add("key", key.get().toJson(_value.key));
        return _result;
      }

      @Override
      public Admin fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Admin(
          JsonBindings.fieldFromJson(_obj, "domain", domain.get()),
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "key", key.get())
        );
      }
    };
  }
}
