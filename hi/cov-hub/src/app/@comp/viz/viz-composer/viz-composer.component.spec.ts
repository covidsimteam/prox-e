import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizComposerComponent } from './viz-composer.component';

describe('VizComposerComponent', () => {
  let component: VizComposerComponent;
  let fixture: ComponentFixture<VizComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizComposerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
