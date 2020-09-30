import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBoardsComponent } from './role-boards.component';

describe('RoleBoardsComponent', () => {
  let component: RoleBoardsComponent;
  let fixture: ComponentFixture<RoleBoardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
