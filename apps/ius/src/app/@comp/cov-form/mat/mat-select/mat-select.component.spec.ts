import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormSelectComponent } from './mat-select.component';

describe('MatFormSelectComponent', () => {
  let component: MatFormSelectComponent;
  let fixture: ComponentFixture<MatFormSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatFormSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
