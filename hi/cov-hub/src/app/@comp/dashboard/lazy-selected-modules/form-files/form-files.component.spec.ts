import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilesComponent } from './form-files.component';

describe('FormFilesComponent', () => {
  let component: FormFilesComponent;
  let fixture: ComponentFixture<FormFilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
