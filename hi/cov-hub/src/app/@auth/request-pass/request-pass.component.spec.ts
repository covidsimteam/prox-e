import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestPassComponent } from './request-pass.component';


describe('RequestPassComponent', () => {
  let component: RequestPassComponent;
  let fixture: ComponentFixture<RequestPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
