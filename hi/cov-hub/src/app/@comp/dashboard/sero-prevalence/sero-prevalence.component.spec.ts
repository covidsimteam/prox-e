import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeroPrevalenceComponent } from './sero-prevalence.component';

describe('SeroPrevalenceComponent', () => {
  let component: SeroPrevalenceComponent;
  let fixture: ComponentFixture<SeroPrevalenceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeroPrevalenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeroPrevalenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
