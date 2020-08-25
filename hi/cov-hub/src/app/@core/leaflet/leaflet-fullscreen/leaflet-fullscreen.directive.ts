import { Directive, OnInit, Input, Output, OnDestroy, NgZone, EventEmitter } from '@angular/core';
import { LeafletDirective, LeafletDirectiveWrapper, LeafletUtil } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import 'leaflet.fullscreen';

@Directive({
  selector: '[ngxLeafletFullscreen]',
})
export class LeafletFullscreenDirective implements OnInit, OnDestroy {

  leafletDirective: LeafletDirectiveWrapper;
  fullscreenControl: L.Control.Fullscreen;

  @Input()
  leafletFullscreenOptions: L.Control.FullscreenOptions;

  @Output()
  leafletFullscreenReady = new EventEmitter<L.Control.Fullscreen>();
  @Output()
  leafletFullscreenEntered = new EventEmitter<L.LeafletEvent>();
  @Output()
  leafletFullscreenExited = new EventEmitter<L.LeafletEvent>();

  constructor(leafletDirective: LeafletDirective, private zone: NgZone) {
    this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
  }

  ngOnInit(): void {
    this.leafletDirective.init();
    const map = this.leafletDirective.getMap();

    this.leafletFullscreenOptions = this.initializeFullscreenOptions(this.leafletFullscreenOptions);

    this.fullscreenControl = L.control.fullscreen(this.leafletFullscreenOptions);

    map.addControl(this.fullscreenControl);

    map.on('enterFullscreen', (e: any) => LeafletUtil.handleEvent(this.zone, this.leafletFullscreenEntered, e));
    map.on('exitFullscreen', (e: any) => LeafletUtil.handleEvent(this.zone, this.leafletFullscreenExited, e));

    this.leafletFullscreenReady.emit(this.fullscreenControl);
  }

  ngOnDestroy(): void {
    this.leafletDirective.getMap().removeControl(this.fullscreenControl);
  }

  public getFullscreenControl() {
    return this.fullscreenControl;
  }

  private initializeFullscreenOptions(options: L.Control.FullscreenOptions) {
    if (!options) {
      options = {};
    }

    return options;
  }
}
