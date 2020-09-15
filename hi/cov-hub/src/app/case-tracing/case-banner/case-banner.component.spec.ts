import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseBannerComponent } from './case-banner.component';

describe('CaseBannerComponent', () => {
  let component: CaseBannerComponent;
  let fixture: ComponentFixture<CaseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
