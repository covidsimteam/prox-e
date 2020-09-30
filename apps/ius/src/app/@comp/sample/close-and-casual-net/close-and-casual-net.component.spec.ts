import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAndCasualNetComponent } from './close-and-casual-net.component';

describe('CloseAndCasualNetComponent', () => {
  let component: CloseAndCasualNetComponent;
  let fixture: ComponentFixture<CloseAndCasualNetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseAndCasualNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAndCasualNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
