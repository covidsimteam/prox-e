import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomRecordComponent } from './symptom-record.component';

describe('SymptomRecordComponent', () => {
  let component: SymptomRecordComponent;
  let fixture: ComponentFixture<SymptomRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
