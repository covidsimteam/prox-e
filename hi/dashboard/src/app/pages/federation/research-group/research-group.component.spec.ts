import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchGroupComponent } from './research-group.component';

describe('ResearchGroupComponent', () => {
  let component: ResearchGroupComponent;
  let fixture: ComponentFixture<ResearchGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
