import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcrTestRecordComponent } from './pcr-test-record.component';

describe('PcrTestRecordComponent', () => {
  let component: PcrTestRecordComponent;
  let fixture: ComponentFixture<PcrTestRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcrTestRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcrTestRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
