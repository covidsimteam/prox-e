import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import * as L from 'leaflet';

import { CountryOrdersMapService } from './country-orders-map.service';
import { NbThemeService } from '@nebular/theme';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'ngx-country-orders-map',
  styleUrls: ['./country-orders-map.component.scss'],
  template: `
    <div leaflet [leafletOptions]="options" [leafletLayers]="layers" (leafletMapReady)="mapReady($event)"></div>
  `,
})
export class CountryOrdersMapComponent implements OnDestroy {

  @Input() countryId: string;

  @Output() select: EventEmitter<any> = new EventEmitter();

  layers: any = [];
  currentTheme: any;
  alive = true;
  selectedCountry: any;

  options = {
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    zoomControl: false,
    center: L.latLng({lat: 38.991709, lng: -76.886109}),
    maxBounds: new L.LatLngBounds(
      new L.LatLng(-89.98155760646617, -180),
      new L.LatLng(89.99346179538875, 180),
    ),
    maxBoundsViscosity: 1.0,
  };

  constructor(private ecMapService: CountryOrdersMapService,
              private theme: NbThemeService) {

    combineLatest([
      this.ecMapService.getCords(),
      this.theme.getJsTheme(),
    ])
      .pipe(takeWhile(() => this.alive))
      .subscribe(([cords, config]: [any, any]) => {
        this.currentTheme = config.variables.countryOrders;
        this.layers = [this.createGeoJsonLayer(cords)];
        this.selectFeature(this.findFeatureLayerByCountryId(this.countryId));
      });
  }

  mapReady(map: L.Map) {
    map.addControl(L.control.zoom({position: 'bottomright'}));

    // fix the map fully displaying, existing leaflet bag
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }

  private createGeoJsonLayer(cords: any) {
    return L.geoJSON(
      cords as any,
      {
        style: () => ({
          weight: this.currentTheme.countryBorderWidth,
          fillColor: this.currentTheme.countryFillColor,
          fillOpacity: 1,
          color: this.currentTheme.countryBorderColor,
          opacity: 1,
        }),
        onEachFeature: (f, l) => {
          this.onEachFeature(f, l);
        },
      });
  }

  private onEachFeature(_: any, layer: any) {
    layer.on({
      mouseover: (e: any) => this.highlightFeature(e.target),
      mouseout: (e: any) => this.moveout(e.target),
      click: (e: any) => this.selectFeature(e.target),
    });
  }

  private highlightFeature(featureLayer: any) {
    if (featureLayer) {
      featureLayer.setStyle({
        weight: this.currentTheme.hoveredCountryBorderWidth,
        fillColor: this.currentTheme.hoveredCountryFillColor,
        color: this.currentTheme.hoveredCountryBorderColor,
      });

      if (!L.Browser.ie && !L.Browser.opera12 && !L.Browser.edge) {
        featureLayer.bringToFront();
      }
    }
  }

  private moveout(featureLayer: any) {
    if (featureLayer !== this.selectedCountry) {
      this.resetHighlight(featureLayer);

      // When countries have common border we should highlight selected country once again
      this.highlightFeature(this.selectedCountry);
    }
  }

  private resetHighlight(featureLayer: any) {
    if (featureLayer) {
      const geoJsonLayer: any = this.layers[0];

      geoJsonLayer.resetStyle(featureLayer);
    }
  }

  private selectFeature(featureLayer: any) {
    if (featureLayer !== this.selectedCountry) {
      this.resetHighlight(this.selectedCountry);
      this.highlightFeature(featureLayer);
      this.selectedCountry = featureLayer;
      this.select.emit(featureLayer.feature.properties.name);
    }
  }

  private findFeatureLayerByCountryId(id: any) {
    const layers: any = this.layers[0];
    const featureLayer = layers?.getLayers().find((item: any) => {
      return item?.feature?.id === id;
    });

    return featureLayer ? featureLayer : null;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
