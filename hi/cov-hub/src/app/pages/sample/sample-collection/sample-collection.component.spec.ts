import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCollectionComponent } from './sample-collection.component';

describe('SampleCollectionComponent', () => {
  let component: SampleCollectionComponent;
  let fixture: ComponentFixture<SampleCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
