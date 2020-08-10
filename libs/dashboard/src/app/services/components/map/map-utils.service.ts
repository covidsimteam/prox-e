import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapUtilsService {

  constructor() { }

  private readonly attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  private readonly attributionWM = '© <a href="https://www.openstreetmap.org/copyright">Wikimedia Map</a> contributors';
  private readonly tileLayerPng = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  private readonly tileLayerWMPng = 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

  private readonly tileLayerOptions = {
    attribution: this.attribution,
    detectRetina: false,
    maxNativeZoom: 18,
    maxZoom: 18,
    minZoom: 0,
    noWrap: false,
    opacity: 1,
    subdomains: 'abc',
    tms: false,
  };

  readonly openStreetMaps = L.tileLayer(
    this.tileLayerPng,
    this.tileLayerOptions,
    );

  readonly wikimediaMaps = L.tileLayer(
    this.tileLayerWMPng,
    {
      ...this.tileLayerOptions,
      attribution: this.attributionWM,
    });

  private readonly fullscreenControl_ = L.control.fullscreen({
      position: 'topleft',
      title: 'Enter Fullscreen',
      titleCancel: 'Exit Fullscreen',
      content: null,
      forceSeparateButton: true,
      forcePseudoFullscreen: true,
      fullscreenElement: false,
    });

  private readonly layersControl_ = {
    baseLayers: {
      'OpenStreet Maps': this.openStreetMaps,
      'Wikimedia Maps': this.wikimediaMaps,
    },
  };

  get fullScreenControl() {
    return this.fullscreenControl_;
  }

  get baseLayers() {
    return { ...this.layersControl_ };
  }

  getDefaultMarker(pointOfInaccessibility: [number, number]) {
    return L.marker({ lng: pointOfInaccessibility[0], lat: pointOfInaccessibility[1] }, {
      icon: L.icon({
        iconSize: [ 26, 42 ],
        iconAnchor: [ 13, 42 ],
        iconUrl: 'assets/img/markers/marker-icon.png',
        iconRetinaUrl: 'assets/img/markers/marker-icon-2x.png',
        shadowUrl: 'assets/img/markers/marker-shadow.png',
      }),
    });
  }
}
