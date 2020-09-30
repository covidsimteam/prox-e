import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAssetComponent } from './exchange-asset.component';

describe('ExchangeAssetComponent', () => {
  let component: ExchangeAssetComponent;
  let fixture: ComponentFixture<ExchangeAssetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
