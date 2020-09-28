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

public class CaseInvestigator {

  /* Members */

  private String id;
  private ArrayList<String> aForms;
  private ArrayList<String> aFormsStarted;
  private ArrayList<String> aFormsFinished;

  /* Constructors */

  public CaseInvestigator(String id, ArrayList<String> aForms, ArrayList<String> aFormsStarted, ArrayList<String> aFormsFinished) {
    this.id = Objects.requireNonNull(id);
    this.aForms = Objects.requireNonNull(aForms);
    this.aFormsStarted = Objects.requireNonNull(aFormsStarted);
    this.aFormsFinished = Objects.requireNonNull(aFormsFinished);
  }

  public CaseInvestigator() {
    this.id = "";
    this.aForms = new ArrayList<String>();
    this.aFormsStarted = new ArrayList<String>();
    this.aFormsFinished = new ArrayList<String>();
  }

  public CaseInvestigator(CaseInvestigator other) {
    this.id = other.id;
    this.aForms = Factories.arrayList(Factories.STRING).create(other.aForms);
    this.aFormsStarted = Factories.arrayList(Factories.STRING).create(other.aFormsStarted);
    this.aFormsFinished = Factories.arrayList(Factories.STRING).create(other.aFormsFinished);
  }

  /* Accessors and mutators */

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = Objects.requireNonNull(id);
  }

  public ArrayList<String> getAForms() {
    return aForms;
  }

  public void setAForms(ArrayList<String> aForms) {
    this.aForms = Objects.requireNonNull(aForms);
  }

  public ArrayList<String> getAFormsStarted() {
    return aFormsStarted;
  }

  public void setAFormsStarted(ArrayList<String> aFormsStarted) {
    this.aFormsStarted = Objects.requireNonNull(aFormsStarted);
  }

  public ArrayList<String> getAFormsFinished() {
    return aFormsFinished;
  }

  public void setAFormsFinished(ArrayList<String> aFormsFinished) {
    this.aFormsFinished = Objects.requireNonNull(aFormsFinished);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof CaseInvestigator)) {
      return false;
    }
    CaseInvestigator other = (CaseInvestigator) other0;
    return
      id.equals(other.id) &&
      aForms.equals(other.aForms) &&
      aFormsStarted.equals(other.aFormsStarted) &&
      aFormsFinished.equals(other.aFormsFinished);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + id.hashCode();
    _result = _result * 37 + aForms.hashCode();
    _result = _result * 37 + aFormsStarted.hashCode();
    _result = _result * 37 + aFormsFinished.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String id;
    private ArrayList<String> aForms;
    private ArrayList<String> aFormsStarted;
    private ArrayList<String> aFormsFinished;

    public Builder() {
      this.id = null;
      this.aForms = null;
      this.aFormsStarted = null;
      this.aFormsFinished = null;
    }

    public Builder setId(String id) {
      this.id = Objects.requireNonNull(id);
      return this;
    }

    public Builder setAForms(ArrayList<String> aForms) {
      this.aForms = Objects.requireNonNull(aForms);
      return this;
    }

    public Builder setAFormsStarted(ArrayList<String> aFormsStarted) {
      this.aFormsStarted = Objects.requireNonNull(aFormsStarted);
      return this;
    }

    public Builder setAFormsFinished(ArrayList<String> aFormsFinished) {
      this.aFormsFinished = Objects.requireNonNull(aFormsFinished);
      return this;
    }

    public CaseInvestigator create() {
      Builders.checkFieldInitialized("CaseInvestigator", "id", id);
      Builders.checkFieldInitialized("CaseInvestigator", "aForms", aForms);
      Builders.checkFieldInitialized("CaseInvestigator", "aFormsStarted", aFormsStarted);
      Builders.checkFieldInitialized("CaseInvestigator", "aFormsFinished", aFormsFinished);
      return new CaseInvestigator(id, aForms, aFormsStarted, aFormsFinished);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<CaseInvestigator> FACTORY = new Factory<CaseInvestigator>() {
    @Override
    public CaseInvestigator create() {
      return new CaseInvestigator();
    }

    @Override
    public CaseInvestigator create(CaseInvestigator other) {
      return new CaseInvestigator(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.roles", "CaseInvestigator");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<CaseInvestigator> jsonBinding() {
      return CaseInvestigator.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<CaseInvestigator> jsonBinding() {
    final Lazy<JsonBinding<String>> id = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<ArrayList<String>>> aForms = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<String>>> aFormsStarted = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Lazy<JsonBinding<ArrayList<String>>> aFormsFinished = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Factory<CaseInvestigator> _factory = FACTORY;

    return new JsonBinding<CaseInvestigator>() {
      @Override
      public Factory<CaseInvestigator> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(CaseInvestigator _value) {
        JsonObject _result = new JsonObject();
        _result.add("id", id.get().toJson(_value.id));
        _result.add("aForms", aForms.get().toJson(_value.aForms));
        _result.add("aFormsStarted", aFormsStarted.get().toJson(_value.aFormsStarted));
        _result.add("aFormsFinished", aFormsFinished.get().toJson(_value.aFormsFinished));
        return _result;
      }

      @Override
      public CaseInvestigator fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new CaseInvestigator(
          JsonBindings.fieldFromJson(_obj, "id", id.get()),
          JsonBindings.fieldFromJson(_obj, "aForms", aForms.get()),
          JsonBindings.fieldFromJson(_obj, "aFormsStarted", aFormsStarted.get()),
          JsonBindings.fieldFromJson(_obj, "aFormsFinished", aFormsFinished.get())
        );
      }
    };
  }
}
