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

public class Coordinator {

  /* Members */

  private String id;
  private ArrayList<String> cases;
  private ArrayList<CaseInvestigator> investigators;

  /* Constructors */

  public Coordinator(String id, ArrayList<String> cases, ArrayList<CaseInvestigator> investigators) {
    this.id = Objects.requireNonNull(id);
    this.cases = Objects.requireNonNull(cases);
    this.investigators = Objects.requireNonNull(investigators);
  }

  public Coordinator() {
    this.id = "";
    this.cases = new ArrayList<String>();
    this.investigators = new ArrayList<CaseInvestigator>();
  }

  public Coordinator(Coordinator other) {
    this.id = other.id;
    this.cases = Factories.arrayList(Factories.STRING).create(other.cases);
    this.investigators = Factories.arrayList(CaseInvestigator.FACTORY).create(other.investigators);
  }

  /* Accessors and mutators */

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Objects.requireNonNull(id);
  }

  public ArrayList<String> getCases() {
    return cases;
  }

  public void setCases(ArrayList<String> cases) {
    this.cases = Objects.requireNonNull(cases);
  }

  public ArrayList<CaseInvestigator> getInvestigators() {
    return investigators;
  }

  public void setInvestigators(ArrayList<CaseInvestigator> investigators) {
    this.investigators = Objects.requireNonNull(investigators);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Coordinator)) {
      return false;
    }
    Coordinator other = (Coordinator) other0;
    return
      id.equals(other.id) &&
      cases.equals(other.cases) &&
      investigators.equals(other.investigators);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + id.hashCode();
    _result = _result * 37 + cases.hashCode();
    _result = _result * 37 + investigators.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String id;
    private ArrayList<String> cases;
    private ArrayList<CaseInvestigator> investigators;

    public Builder() {
      this.id = null;
      this.cases = null;
      this.investigators = null;
    }

    public Builder setId(String id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setCases(ArrayList<String> cases) {
      this.cases = Objects.requireNonNull(cases);
      return this;
    }

    public Builder setInvestigators(ArrayList<CaseInvestigator> investigators) {
      this.investigators = Objects.requireNonNull(investigators);
      return this;
    }

    public Coordinator create() {
      Builders.checkFieldInitialized("Coordinator", "id", id);
      Builders.checkFieldInitialized("Coordinator", "cases", cases);
      Builders.checkFieldInitialized("Coordinator", "investigators", investigators);
      return new Coordinator(id, cases, investigators);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Coordinator> FACTORY = new Factory<Coordinator>() {
    @Override
    public Coordinator create() {
      return new Coordinator();
    }

    @Override
    public Coordinator create(Coordinator other) {
      return new Coordinator(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.roles", "Coordinator");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Coordinator> jsonBinding() {
      return Coordinator.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Coordinator> jsonBinding() {
    final Lazy<JsonBinding<String>> id = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<ArrayList<String>>> cases = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<CaseInvestigator>>> investigators = new Lazy<>(() -> JsonBindings.arrayList(CaseInvestigator.jsonBinding()));
    final Factory<Coordinator> _factory = FACTORY;

    return new JsonBinding<Coordinator>() {
      @Override
      public Factory<Coordinator> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Coordinator _value) {
        JsonObject _result = new JsonObject();
        _result.add("id", id.get().toJson(_value.id));
        _result.add("cases", cases.get().toJson(_value.cases));
        _result.add("investigators", investigators.get().toJson(_value.investigators));
        return _result;
      }

      @Override
      public Coordinator fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Coordinator(
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "cases", cases.get()),
          JsonBindings.fieldFromJson(_obj, "investigators", investigators.get())
        );
      }
    };
  }
}
