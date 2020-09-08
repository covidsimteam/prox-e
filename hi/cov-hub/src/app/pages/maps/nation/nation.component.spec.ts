import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { NationComponent } from './nation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConf, appConf } from '../../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NationComponent', () => {
  let component: NationComponent;
  let fixture: ComponentFixture<NationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [{ provide: AppConf, useValue: appConf }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([AppConf], () => {
    expect(component).toBeTruthy();
  }));
});
