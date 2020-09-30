import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebFormSelectComponent } from './neb-select.component';

describe('NebFormSelectComponent', () => {
  let component: NebFormSelectComponent;
  let fixture: ComponentFixture<NebFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebFormSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
