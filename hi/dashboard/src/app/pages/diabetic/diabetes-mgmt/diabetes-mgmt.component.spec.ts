import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesMgmtComponent } from './diabetes-mgmt.component';

describe('DiabetesMgmtComponent', () => {
  let component: DiabetesMgmtComponent;
  let fixture: ComponentFixture<DiabetesMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabetesMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
