import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldSysComponent } from './fold-sys.component';

describe('FoldSysComponent', () => {
  let component: FoldSysComponent;
  let fixture: ComponentFixture<FoldSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldSysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
