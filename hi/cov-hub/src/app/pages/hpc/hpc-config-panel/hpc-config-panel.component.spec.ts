import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpcConfigPanelComponent } from './hpc-config-panel.component';

describe('HpcConfigPanelComponent', () => {
  let component: HpcConfigPanelComponent;
  let fixture: ComponentFixture<HpcConfigPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpcConfigPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpcConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
