import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoardsComponent } from './home-boards.component';

describe('HomeBoardsComponent', () => {
  let component: HomeBoardsComponent;
  let fixture: ComponentFixture<HomeBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
