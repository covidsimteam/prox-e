import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebTableSelectComponent } from './neb-select.component';

describe('NebTableSelectComponent', () => {
  let component: NebTableSelectComponent;
  let fixture: ComponentFixture<NebTableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebTableSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebTableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
