import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReturneeLocationDetailsComponent } from './returnee-location-details.component';

describe('ReturneeLocationDetailsComponent', () => {
  let component: ReturneeLocationDetailsComponent;
  let fixture: ComponentFixture<ReturneeLocationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturneeLocationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturneeLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
