import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstellarComponent } from './interstellar.component';

describe('InterstellarComponent', () => {
  let component: InterstellarComponent;
  let fixture: ComponentFixture<InterstellarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstellarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
