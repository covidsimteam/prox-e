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

public class User {

  /* Members */

  private String email;
  private String fullName;

  /* Constructors */

  public User(String email, String fullName) {
    this.email = Objects.requireNonNull(email);
    this.fullName = Objects.requireNonNull(fullName);
  }

  public User() {
    this.email = "";
    this.fullName = "";
  }

  public User(User other) {
    this.email = other.email;
    this.fullName = other.fullName;
  }

  /* Accessors and mutators */

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = Objects.requireNonNull(email);
  }

  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = Objects.requireNonNull(fullName);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof User)) {
      return false;
    }
    User other = (User) other0;
    return
      email.equals(other.email) &&
      fullName.equals(other.fullName);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + email.hashCode();
    _result = _result * 37 + fullName.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String email;
    private String fullName;

    public Builder() {
      this.email = null;
      this.fullName = null;
    }

    public Builder setEmail(String email) {
      this.email = Objects.requireNonNull(email);
      return this;
    }

    public Builder setFullName(String fullName) {
      this.fullName = Objects.requireNonNull(fullName);
      return this;
    }

    public User create() {
      Builders.checkFieldInitialized("User", "email", email);
      Builders.checkFieldInitialized("User", "fullName", fullName);
      return new User(email, fullName);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<User> FACTORY = new Factory<User>() {
    @Override
    public User create() {
      return new User();
    }

    @Override
    public User create(User other) {
      return new User(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.model", "User");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<User> jsonBinding() {
      return User.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<User> jsonBinding() {
    final Lazy<JsonBinding<String>> email = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> fullName = new Lazy<>(() -> JsonBindings.STRING);
    final Factory<User> _factory = FACTORY;

    return new JsonBinding<User>() {
      @Override
      public Factory<User> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(User _value) {
        JsonObject _result = new JsonObject();
        _result.add("email", email.get().toJson(_value.email));
        _result.add("fullName", fullName.get().toJson(_value.fullName));
        return _result;
      }

      @Override
      public User fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new User(
          JsonBindings.fieldFromJson(_obj, "email", email.get()),
          JsonBindings.fieldFromJson(_obj, "fullName", fullName.get())
        );
      }
    };
  }
}
