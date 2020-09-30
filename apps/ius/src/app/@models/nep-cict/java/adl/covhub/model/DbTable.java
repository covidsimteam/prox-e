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

public class DbTable {

  /* Members */

  private String tableName;
  private ArrayList<String> primaryKey;

  /* Constructors */

  public DbTable(String tableName, ArrayList<String> primaryKey) {
    this.tableName = Objects.requireNonNull(tableName);
    this.primaryKey = Objects.requireNonNull(primaryKey);
  }

  public DbTable() {
    this.tableName = "";
    this.primaryKey = new ArrayList<String>();
  }

  public DbTable(DbTable other) {
    this.tableName = other.tableName;
    this.primaryKey = Factories.arrayList(Factories.STRING).create(other.primaryKey);
  }

  /* Accessors and mutators */

  public String getTableName() {
    return tableName;
  }

  public void setTableName(String tableName) {
    this.tableName = Objects.requireNonNull(tableName);
  }

  public ArrayList<String> getPrimaryKey() {
    return primaryKey;
  }

  public void setPrimaryKey(ArrayList<String> primaryKey) {
    this.primaryKey = Objects.requireNonNull(primaryKey);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof DbTable)) {
      return false;
    }
    DbTable other = (DbTable) other0;
    return
      tableName.equals(other.tableName) &&
      primaryKey.equals(other.primaryKey);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + tableName.hashCode();
    _result = _result * 37 + primaryKey.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private String tableName;
    private ArrayList<String> primaryKey;

    public Builder() {
      this.tableName = null;
      this.primaryKey = null;
    }

    public Builder setTableName(String tableName) {
      this.tableName = Objects.requireNonNull(tableName);
      return this;
    }

    public Builder setPrimaryKey(ArrayList<String> primaryKey) {
      this.primaryKey = Objects.requireNonNull(primaryKey);
      return this;
    }

    public DbTable create() {
      Builders.checkFieldInitialized("DbTable", "tableName", tableName);
      Builders.checkFieldInitialized("DbTable", "primaryKey", primaryKey);
      return new DbTable(tableName, primaryKey);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<DbTable> FACTORY = new Factory<DbTable>() {
    @Override
    public DbTable create() {
      return new DbTable();
    }

    @Override
    public DbTable create(DbTable other) {
      return new DbTable(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.model", "DbTable");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<DbTable> jsonBinding() {
      return DbTable.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<DbTable> jsonBinding() {
    final Lazy<JsonBinding<String>> tableName = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<ArrayList<String>>> primaryKey = new Lazy<>(() -> JsonBindings.arrayList(JsonBindings.STRING));
    final Factory<DbTable> _factory = FACTORY;

    return new JsonBinding<DbTable>() {
      @Override
      public Factory<DbTable> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(DbTable _value) {
        JsonObject _result = new JsonObject();
        _result.add("tableName", tableName.get().toJson(_value.tableName));
        _result.add("primaryKey", primaryKey.get().toJson(_value.primaryKey));
        return _result;
      }

      @Override
      public DbTable fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new DbTable(
          JsonBindings.fieldFromJson(_obj, "tableName", tableName.get()),
          JsonBindings.fieldFromJson(_obj, "primaryKey", primaryKey.get())
        );
      }
    };
  }
}
