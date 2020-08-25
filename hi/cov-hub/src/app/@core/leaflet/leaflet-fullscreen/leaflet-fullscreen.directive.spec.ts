import { LeafletFullscreenDirective } from './leaflet-fullscreen.directive';
import { Component } from '@angular/core';
import { LeafletDirective, LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  template: '<div></div>',
})
class TestComponent { }

describe('LeafletFullscreenDirective', async () => {
  let leafletDirective: LeafletDirective;
  let directive: LeafletFullscreenDirective;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletFullscreenDirective,
        TestComponent,
      ],
      imports: [
        LeafletModule,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    leafletDirective = new LeafletDirective(fixture.elementRef, fixture?.ngZone);
    directive = new LeafletFullscreenDirective(leafletDirective, fixture?.ngZone);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should return the control', () => {
    expect(directive.getFullscreenControl).toBeTruthy();
  });
});
