import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReportingComponent } from './sample-reporting.component';

describe('SampleReportingComponent', () => {
  let component: SampleReportingComponent;
  let fixture: ComponentFixture<SampleReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
