import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSchemaFormComponent } from './example-schema-form.component';

describe('ExampleSchemaFormComponent', () => {
  let component: ExampleSchemaFormComponent;
  let fixture: ComponentFixture<ExampleSchemaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSchemaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
