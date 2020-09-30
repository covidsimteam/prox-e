import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormRadioComponent } from './mat-radio.component';

describe('MatFormRadioComponent', () => {
  let component: MatFormRadioComponent;
  let fixture: ComponentFixture<MatFormRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
