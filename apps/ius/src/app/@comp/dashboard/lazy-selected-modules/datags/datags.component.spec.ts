import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagsComponent } from './datags.component';

describe('DatagsComponent', () => {
  let component: DatagsComponent;
  let fixture: ComponentFixture<DatagsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
