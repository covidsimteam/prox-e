import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdtTestRecordComponent } from './rdt-test-record.component';

describe('RdtTestRecordComponent', () => {
  let component: RdtTestRecordComponent;
  let fixture: ComponentFixture<RdtTestRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdtTestRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdtTestRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
