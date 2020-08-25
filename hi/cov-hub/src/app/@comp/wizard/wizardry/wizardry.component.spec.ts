import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardryComponent } from './wizardry.component';

describe('WizardryComponent', () => {
  let component: WizardryComponent;
  let fixture: ComponentFixture<WizardryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
