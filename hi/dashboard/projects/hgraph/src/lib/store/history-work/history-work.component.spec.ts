import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWorkComponent } from './history-work.component';

describe('HistoryWorkComponent', () => {
  let component: HistoryWorkComponent;
  let fixture: ComponentFixture<HistoryWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
