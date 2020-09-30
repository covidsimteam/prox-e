import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAiUiComponent } from './med-ai-ui.component';

describe('MedAiUiComponent', () => {
  let component: MedAiUiComponent;
  let fixture: ComponentFixture<MedAiUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedAiUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAiUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
