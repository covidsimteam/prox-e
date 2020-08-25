import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCompanyComponent } from './research-company.component';

describe('ResearchCompanyComponent', () => {
  let component: ResearchCompanyComponent;
  let fixture: ComponentFixture<ResearchCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
