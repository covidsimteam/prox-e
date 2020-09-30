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

public class Information {

  /* Members */

  private Coordinates caseCoordinates;
  private String reportingInstitution;
  private String nameOfCase;
  private String phoneNumber;
  private String province;
  private String district;
  private String municipality;
  private String wardNumber;
  private String tole;
  private String caseInvestigator;
  private CaseState caseState;

  /* Constructors */

  public Information(Coordinates caseCoordinates, String reportingInstitution, String nameOfCase, String phoneNumber, String province, String district, String municipality, String wardNumber, String tole, String caseInvestigator, CaseState caseState) {
    this.caseCoordinates = Objects.requireNonNull(caseCoordinates);
    this.reportingInstitution = Objects.requireNonNull(reportingInstitution);
    this.nameOfCase = Objects.requireNonNull(nameOfCase);
    this.phoneNumber = Objects.requireNonNull(phoneNumber);
    this.province = Objects.requireNonNull(province);
    this.district = Objects.requireNonNull(district);
    this.municipality = Objects.requireNonNull(municipality);
    this.wardNumber = Objects.requireNonNull(wardNumber);
    this.tole = Objects.requireNonNull(tole);
    this.caseInvestigator = Objects.requireNonNull(caseInvestigator);
    this.caseState = Objects.requireNonNull(caseState);
  }

  public Information() {
    this.caseCoordinates = new Coordinates();
    this.reportingInstitution = "";
    this.nameOfCase = "";
    this.phoneNumber = "";
    this.province = "";
    this.district = "";
    this.municipality = "";
    this.wardNumber = "";
    this.tole = "";
    this.caseInvestigator = "";
    this.caseState = new CaseState();
  }

  public Information(Information other) {
    this.caseCoordinates = Coordinates.FACTORY.create(other.caseCoordinates);
    this.reportingInstitution = other.reportingInstitution;
    this.nameOfCase = other.nameOfCase;
    this.phoneNumber = other.phoneNumber;
    this.province = other.province;
    this.district = other.district;
    this.municipality = other.municipality;
    this.wardNumber = other.wardNumber;
    this.tole = other.tole;
    this.caseInvestigator = other.caseInvestigator;
    this.caseState = CaseState.FACTORY.create(other.caseState);
  }

  /* Accessors and mutators */

  public Coordinates getCaseCoordinates() {
    return caseCoordinates;
  }

  public void setCaseCoordinates(Coordinates caseCoordinates) {
    this.caseCoordinates = Objects.requireNonNull(caseCoordinates);
  }

  public String getReportingInstitution() {
    return reportingInstitution;
  }

  public void setReportingInstitution(String reportingInstitution) {
    this.reportingInstitution = Objects.requireNonNull(reportingInstitution);
  }

  public String getNameOfCase() {
    return nameOfCase;
  }

  public void setNameOfCase(String nameOfCase) {
    this.nameOfCase = Objects.requireNonNull(nameOfCase);
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = Objects.requireNonNull(phoneNumber);
  }

  public String getProvince() {
    return province;
  }

  public void setProvince(String province) {
    this.province = Objects.requireNonNull(province);
  }

  public String getDistrict() {
    return district;
  }

  public void setDistrict(String district) {
    this.district = Objects.requireNonNull(district);
  }

  public String getMunicipality() {
    return municipality;
  }

  public void setMunicipality(String municipality) {
    this.municipality = Objects.requireNonNull(municipality);
  }

  public String getWardNumber() {
    return wardNumber;
  }

  public void setWardNumber(String wardNumber) {
    this.wardNumber = Objects.requireNonNull(wardNumber);
  }

  public String getTole() {
    return tole;
  }

  public void setTole(String tole) {
    this.tole = Objects.requireNonNull(tole);
  }

  public String getCaseInvestigator() {
    return caseInvestigator;
  }

  public void setCaseInvestigator(String caseInvestigator) {
    this.caseInvestigator = Objects.requireNonNull(caseInvestigator);
  }

  public CaseState getCaseState() {
    return caseState;
  }

  public void setCaseState(CaseState caseState) {
    this.caseState = Objects.requireNonNull(caseState);
  }

  /* Object level helpers */

  @Override
  public boolean equals(Object other0) {
    if (!(other0 instanceof Information)) {
      return false;
    }
    Information other = (Information) other0;
    return
      caseCoordinates.equals(other.caseCoordinates) &&
      reportingInstitution.equals(other.reportingInstitution) &&
      nameOfCase.equals(other.nameOfCase) &&
      phoneNumber.equals(other.phoneNumber) &&
      province.equals(other.province) &&
      district.equals(other.district) &&
      municipality.equals(other.municipality) &&
      wardNumber.equals(other.wardNumber) &&
      tole.equals(other.tole) &&
      caseInvestigator.equals(other.caseInvestigator) &&
      caseState.equals(other.caseState);
  }

  @Override
  public int hashCode() {
    int _result = 1;
    _result = _result * 37 + caseCoordinates.hashCode();
    _result = _result * 37 + reportingInstitution.hashCode();
    _result = _result * 37 + nameOfCase.hashCode();
    _result = _result * 37 + phoneNumber.hashCode();
    _result = _result * 37 + province.hashCode();
    _result = _result * 37 + district.hashCode();
    _result = _result * 37 + municipality.hashCode();
    _result = _result * 37 + wardNumber.hashCode();
    _result = _result * 37 + tole.hashCode();
    _result = _result * 37 + caseInvestigator.hashCode();
    _result = _result * 37 + caseState.hashCode();
    return _result;
  }

  /* Builder */

  public static class Builder {
    private Coordinates caseCoordinates;
    private String reportingInstitution;
    private String nameOfCase;
    private String phoneNumber;
    private String province;
    private String district;
    private String municipality;
    private String wardNumber;
    private String tole;
    private String caseInvestigator;
    private CaseState caseState;

    public Builder() {
      this.caseCoordinates = null;
      this.reportingInstitution = null;
      this.nameOfCase = null;
      this.phoneNumber = null;
      this.province = null;
      this.district = null;
      this.municipality = null;
      this.wardNumber = null;
      this.tole = null;
      this.caseInvestigator = null;
      this.caseState = null;
    }

    public Builder setCaseCoordinates(Coordinates caseCoordinates) {
      this.caseCoordinates = Objects.requireNonNull(caseCoordinates);
      return this;
    }

    public Builder setReportingInstitution(String reportingInstitution) {
      this.reportingInstitution = Objects.requireNonNull(reportingInstitution);
      return this;
    }

    public Builder setNameOfCase(String nameOfCase) {
      this.nameOfCase = Objects.requireNonNull(nameOfCase);
      return this;
    }

    public Builder setPhoneNumber(String phoneNumber) {
      this.phoneNumber = Objects.requireNonNull(phoneNumber);
      return this;
    }

    public Builder setProvince(String province) {
      this.province = Objects.requireNonNull(province);
      return this;
    }

    public Builder setDistrict(String district) {
      this.district = Objects.requireNonNull(district);
      return this;
    }

    public Builder setMunicipality(String municipality) {
      this.municipality = Objects.requireNonNull(municipality);
      return this;
    }

    public Builder setWardNumber(String wardNumber) {
      this.wardNumber = Objects.requireNonNull(wardNumber);
      return this;
    }

    public Builder setTole(String tole) {
      this.tole = Objects.requireNonNull(tole);
      return this;
    }

    public Builder setCaseInvestigator(String caseInvestigator) {
      this.caseInvestigator = Objects.requireNonNull(caseInvestigator);
      return this;
    }

    public Builder setCaseState(CaseState caseState) {
      this.caseState = Objects.requireNonNull(caseState);
      return this;
    }

    public Information create() {
      Builders.checkFieldInitialized("Information", "caseCoordinates", caseCoordinates);
      Builders.checkFieldInitialized("Information", "reportingInstitution", reportingInstitution);
      Builders.checkFieldInitialized("Information", "nameOfCase", nameOfCase);
      Builders.checkFieldInitialized("Information", "phoneNumber", phoneNumber);
      Builders.checkFieldInitialized("Information", "province", province);
      Builders.checkFieldInitialized("Information", "district", district);
      Builders.checkFieldInitialized("Information", "municipality", municipality);
      Builders.checkFieldInitialized("Information", "wardNumber", wardNumber);
      Builders.checkFieldInitialized("Information", "tole", tole);
      Builders.checkFieldInitialized("Information", "caseInvestigator", caseInvestigator);
      Builders.checkFieldInitialized("Information", "caseState", caseState);
      return new Information(caseCoordinates, reportingInstitution, nameOfCase, phoneNumber, province, district, municipality, wardNumber, tole, caseInvestigator, caseState);
    }
  }

  /* Factory for construction of generic values */

  public static final Factory<Information> FACTORY = new Factory<Information>() {
    @Override
    public Information create() {
      return new Information();
    }

    @Override
    public Information create(Information other) {
      return new Information(other);
    }

    @Override
    public TypeExpr typeExpr() {
      ScopedName scopedName = new ScopedName("covhub.cases", "Information");
      ArrayList<TypeExpr> params = new ArrayList<>();
      return new TypeExpr(TypeRef.reference(scopedName), params);
    }
    @Override
    public JsonBinding<Information> jsonBinding() {
      return Information.jsonBinding();
    }
  };

  /* Json serialization */

  public static JsonBinding<Information> jsonBinding() {
    final Lazy<JsonBinding<Coordinates>> caseCoordinates = new Lazy<>(() -> Coordinates.jsonBinding());
    final Lazy<JsonBinding<String>> reportingInstitution = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> nameOfCase = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> phoneNumber = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> province = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> district = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> municipality = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> wardNumber = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> tole = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<String>> caseInvestigator = new Lazy<>(() -> JsonBindings.STRING);
    final Lazy<JsonBinding<CaseState>> caseState = new Lazy<>(() -> CaseState.jsonBinding());
    final Factory<Information> _factory = FACTORY;

    return new JsonBinding<Information>() {
      @Override
      public Factory<Information> factory() {
        return _factory;
      }

      @Override
      public JsonElement toJson(Information _value) {
        JsonObject _result = new JsonObject();
        _result.add("caseCoordinates", caseCoordinates.get().toJson(_value.caseCoordinates));
        _result.add("reportingInstitution", reportingInstitution.get().toJson(_value.reportingInstitution));
        _result.add("nameOfCase", nameOfCase.get().toJson(_value.nameOfCase));
        _result.add("phoneNumber", phoneNumber.get().toJson(_value.phoneNumber));
        _result.add("province", province.get().toJson(_value.province));
        _result.add("district", district.get().toJson(_value.district));
        _result.add("municipality", municipality.get().toJson(_value.municipality));
        _result.add("wardNumber", wardNumber.get().toJson(_value.wardNumber));
        _result.add("tole", tole.get().toJson(_value.tole));
        _result.add("caseInvestigator", caseInvestigator.get().toJson(_value.caseInvestigator));
        _result.add("caseState", caseState.get().toJson(_value.caseState));
        return _result;
      }

      @Override
      public Information fromJson(JsonElement _json) {
        JsonObject _obj = JsonBindings.objectFromJson(_json);
        return new Information(
          JsonBindings.fieldFromJson(_obj, "caseCoordinates", caseCoordinates.get()),
          JsonBindings.fieldFromJson(_obj, "reportingInstitution", reportingInstitution.get()),
          JsonBindings.fieldFromJson(_obj, "nameOfCase", nameOfCase.get()),
          JsonBindings.fieldFromJson(_obj, "phoneNumber", phoneNumber.get()),
          JsonBindings.fieldFromJson(_obj, "province", province.get()),
          JsonBindings.fieldFromJson(_obj, "district", district.get()),
          JsonBindings.fieldFromJson(_obj, "municipality", municipality.get()),
          JsonBindings.fieldFromJson(_obj, "wardNumber", wardNumber.get()),
          JsonBindings.fieldFromJson(_obj, "tole", tole.get()),
          JsonBindings.fieldFromJson(_obj, "caseInvestigator", caseInvestigator.get()),
          JsonBindings.fieldFromJson(_obj, "caseState", caseState.get())
        );
      }
    };
  }
}
