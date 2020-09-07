import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdtComponent } from './rdt.component';

describe('PcrComponent', () => {
  let component: RdtComponent;
  let fixture: ComponentFixture<RdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdtComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
