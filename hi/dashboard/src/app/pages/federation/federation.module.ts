import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district/district.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { ProvinceComponent } from './province/province.component';
import { WardComponent } from './ward/ward.component';
import { LabComponent } from './lab/lab.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ResearchGroupComponent } from './research-group/research-group.component';
import { ResearchCompanyComponent } from './research-company/research-company.component';
import { MunicipalAdminComponent } from './municipality/municipal-admin/municipal-admin.component';
import { MunicipalAdminReturneeComponent } from './municipality/municipal-admin-returnee/municipal-admin-returnee.component';
import { MunicipalAdminReturneeVizComponent } from './municipality/municipal-admin-returnee-viz/municipal-admin-returnee-viz.component';
import { MunicipalAdminReturneeEditComponent } from './municipality/municipal-admin-returnee-edit/municipal-admin-returnee-edit.component';
import { MunicipalAdminReturneePcrComponent } from './municipality/municipal-admin-returnee-pcr/municipal-admin-returnee-pcr.component';



@NgModule({
  declarations: [DistrictComponent, MunicipalityComponent, ProvinceComponent, WardComponent, LabComponent, HospitalComponent, ResearchGroupComponent, ResearchCompanyComponent, MunicipalAdminComponent, MunicipalAdminReturneeComponent, MunicipalAdminReturneeVizComponent, MunicipalAdminReturneeEditComponent, MunicipalAdminReturneePcrComponent],
  imports: [
    CommonModule
  ]
})
export class FederationModule { }
