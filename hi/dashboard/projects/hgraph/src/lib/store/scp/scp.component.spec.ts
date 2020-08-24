import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScpComponent } from './scp.component';

describe('ScpComponent', () => {
  let component: ScpComponent;
  let fixture: ComponentFixture<ScpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
