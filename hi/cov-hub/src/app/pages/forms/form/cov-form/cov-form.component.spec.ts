import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovFormComponent } from './cov-form.component';

describe('CovFormComponent', () => {
  let component: CovFormComponent;
  let fixture: ComponentFixture<CovFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
