import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableSelectComponent } from './mat-select.component';

describe('MatTableSelectComponent', () => {
  let component: MatTableSelectComponent;
  let fixture: ComponentFixture<MatTableSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
