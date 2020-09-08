import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConf, appConf } from '../../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [{ provide: AppConf, useValue: appConf }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([AppConf], () => {
    expect(component).toBeTruthy();
  }));
});
