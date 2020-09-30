import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizWizardComponent } from './viz-wizard.component';

describe('VizWizardComponent', () => {
  let component: VizWizardComponent;
  let fixture: ComponentFixture<VizWizardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VizWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
