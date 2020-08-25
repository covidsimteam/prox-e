import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HgraphComponent } from './hgraph.component';

describe('HgraphComponent', () => {
  let component: HgraphComponent;
  let fixture: ComponentFixture<HgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
