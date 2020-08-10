import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import polylabel from 'polylabel';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Area, Feature, FeatureCollection, WardProperties } from '../../../models/domain.model';
import { RegionService } from '../../../services/components/map/region.service';
import { MapUtilsService } from '../../../services/components/map/map-utils.service';


const defaultAreaKey = 'kathmandu_valley';

@Component({
  selector: 'ngx-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit, OnDestroy {
  region: string;
  type: string;

  loading = true;

  private componentAlive = true;

  private map: L.Map;
  private mapReady: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  layersControl: any;

  options = {
    layers: [this.mapUtilsService.openStreetMaps],
    zoom: 12,
    crs: L.CRS.EPSG3857,
    center: L.latLng({ lat: 27.700769, lng: 85.33014 }),
    zoomControl: true,
    preferCanvas: false,
  };

  private geoJsonLayerOptions = {
    onEachFeature: (_: any, layer: L.Layer) => {
      const thisMap = this.map;
      layer.on({
        click: (e) => {
          thisMap.fitBounds(e.target.getBounds());
        },
      });
    },
  };

  private stats: Area.Stats;
  private wards: FeatureCollection<WardProperties>;
  private wardDataReceived: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private featureGroup: L.FeatureGroup;
  private markerClusterGroup: L.MarkerClusterGroup;

  private isAlive = () => this.componentAlive;

  constructor(
    private route: ActivatedRoute,
    private regionService: RegionService,
    private mapUtilsService: MapUtilsService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeWhile(this.isAlive)).subscribe((params: ParamMap) => {
      this.region = params.get('name') ? params.get('name').replace(/_/g, ' ') : 'Kathmandu Valley';
      this.type = params.get('type') || 'returnees';
    });
    this.layersControl = {...this.mapUtilsService.baseLayers, overlays: {}};
    this.receiveAndSetWards();
    this.receiveAndSetStats();
  }

  private receiveAndSetWards() {
    this.getWards().subscribe((wards: FeatureCollection<WardProperties>) => {
      this.wards = wards;
      this.layersControl.overlays['Wards'] = L.geoJSON(wards as any, this.geoJsonLayerOptions);
      this.wardDataReceived.next(true);
    });
  }

  private receiveAndSetStats() {
    this.getStats().subscribe((stats: Area.Stats) => {
      this.stats = stats;
      this.wardDataReceived.subscribe(received => {
        if (received) this.setStats();
      });
    });
  }

  private setStats() {
    this.markerClusterGroup = L.markerClusterGroup();
    this.featureGroup = L.featureGroup();
    this.featureGroup.addLayer(this.markerClusterGroup);
    this.stats.data.forEach(datum => {
      const foundFeature = this.wards.features.find(feature => datum.DDGNWW === feature.properties.DDGNWW);
      const pointOfInaccessibility = polylabel(foundFeature.geometry.coordinates) as [number, number];
      const poiLabelMarker = this.mapUtilsService.getDefaultMarker(pointOfInaccessibility);
      this.setPopup(poiLabelMarker, datum, foundFeature);
      this.markerClusterGroup.addLayer(poiLabelMarker);
    });
    this.layersControl.overlays['Stats'] = this.markerClusterGroup;
    this.mapReady.subscribe(ready => {
      if (ready) {
        this.featureGroup.addTo(this.map);
        this.loading = false;
      }
    });
  }



  get regionKey() {
    return this.region ? this.region.trim().replace(/ /g, '_').toLowerCase() : null;
  }

  private getWards(): Observable<FeatureCollection<WardProperties>> {
    return this.regionService.getCacheAreaWards(this.regionKey || defaultAreaKey);
  }

  private getStats(): Observable<Area.Stats> {
    return this.regionService.getCacheAreaStats(this.regionKey || defaultAreaKey);
  }

  ngOnDestroy(): void {
    this.componentAlive = false;
    this.map.remove();
  }

  onMapReady(currentMap: L.Map) {
    this.map = currentMap;
    this.mapUtilsService.fullScreenControl.addTo(this.map);
    this.mapReady.next(true);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  // Do not use angular component to replace this
  private setPopup(poiMarker: L.Marker, datum: Area.Datum, feature: Feature<WardProperties>) {
    const popup = L.popup({ maxWidth: 100 });
    const returneeTotal = datum.Returnee.Quarantined + datum.Returnee.Not_Quarantined;
    const pcrTotal = datum.PCR.Positive + datum.PCR.Negative;
    const rdtTotal = datum.RDT.Positive + datum.RDT.Negative;

    const popupHtml = `
      <div>
      <style type="text/css">
        .tg  {border-collapse:collapse;border-spacing:0;}
        .tg td {
          border-color:black;
          border-style:solid;
          border-width:1px;
          font-family:Arial, sans-serif;
          font-size:14px;
          overflow:hidden;
          padding:10px 5px;
          word-break:normal;
        }
        .tg th {
          border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
          font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;
        }
        .tg .tg-x5oc{background-color:#fe996b;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-0cjc{background-color:#67fd9a;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-266k{background-color:#9b9b9b;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-d52n{background-color:#32cb00;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-7od5{background-color:#9aff99;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-tw5s{background-color:#fe0000;border-color:inherit;text-align:left;vertical-align:top}
        .tg .tg-pidv{background-color:#ffce93;border-color:inherit;text-align:left;vertical-align:top}
      </style>
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-y698" colspan="2">District</th>
            <th class="tg-y698" colspan="3">${feature.properties.DISTRICT}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0pky" colspan="2">Palika</td>
            <td class="tg-0pky" colspan="3">${feature.properties.GaPa_NaPa}</td>
          </tr>
          <tr>
            <td class="tg-y698" colspan="2">Ward No</td>
            <td class="tg-y698" colspan="3">${feature.properties.NEW_WARD_N}</td>
          </tr>
          <tr>
            <td class="tg-266k" colspan="2">Returnee</td>
            <td class="tg-266k">Test</td>
            <td class="tg-266k">PCR</td>
            <td class="tg-266k">RDT</td>
          </tr>
          <tr>
            <td class="tg-pidv">Isolated</td>
            <td class="tg-pidv">${datum.Returnee.Not_Quarantined}</td>
            <td class="tg-x5oc">Positive</td>
            <td class="tg-x5oc">${datum.PCR.Positive}</td>
            <td class="tg-x5oc">${datum.RDT.Positive}</td>
          </tr>
          <tr>
            <td class="tg-pidv">Quarantined</td>
            <td class="tg-pidv">${datum.Returnee.Quarantined}</td>
            <td class="tg-0cjc">Negative</td>
            <td class="tg-0cjc">${datum.PCR.Negative}</td>
            <td class="tg-0cjc">${datum.RDT.Negative}</td>
          </tr>
          <tr>
            <td class="tg-y698">Total</td>
            <td class="tg-y698">${returneeTotal}</td>
            <td class="tg-y698"> </td>
            <td class="tg-y698">${pcrTotal}</td>
            <td class="tg-y698">${rdtTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>`;

    popup.setContent(popupHtml);
    poiMarker.bindPopup(popup);

  }
}
