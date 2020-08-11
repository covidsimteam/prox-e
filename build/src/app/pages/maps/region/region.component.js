"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const L = __importStar(require("leaflet"));
require("leaflet.markercluster");
const polylabel_1 = __importDefault(require("polylabel"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const region_service_1 = require("../../../services/components/map/region.service");
const map_utils_service_1 = require("../../../services/components/map/map-utils.service");
const defaultAreaKey = 'kathmandu_valley';
let RegionComponent = class RegionComponent {
    constructor(route, regionService, mapUtilsService) {
        this.route = route;
        this.regionService = regionService;
        this.mapUtilsService = mapUtilsService;
        this.region = 'Kathmandu Valley';
        this.loading = true;
        this.componentAlive = true;
        this.mapReady = new rxjs_1.BehaviorSubject(false);
        this.options = {
            layers: [this.mapUtilsService.openStreetMaps],
            zoom: 12,
            crs: L.CRS.EPSG3857,
            center: L.latLng({ lat: 27.700769, lng: 85.33014 }),
            zoomControl: true,
            preferCanvas: false,
        };
        this.geoJsonLayerOptions = {
            onEachFeature: (_, layer) => {
                const thisMap = this.map;
                layer.on({
                    click: (e) => {
                        thisMap.fitBounds(e.target.getBounds());
                    },
                });
            },
        };
        this.wardDataReceived = new rxjs_1.BehaviorSubject(false);
        this.isAlive = () => this.componentAlive;
    }
    ngOnInit() {
        this.route.paramMap.pipe(operators_1.takeWhile(this.isAlive)).subscribe((params) => {
            const paramName = params === null || params === void 0 ? void 0 : params.get('name');
            this.region = (paramName === null || paramName === void 0 ? void 0 : paramName.replace(/_/g, ' ')) || this.region;
            this.type = (params === null || params === void 0 ? void 0 : params.get('type')) || 'returnees';
        });
        this.layersControl = Object.assign(Object.assign({}, this.mapUtilsService.baseLayers), { overlays: {} });
        this.receiveAndSetWards();
        this.receiveAndSetStats();
    }
    receiveAndSetWards() {
        this.getWards().subscribe((wards) => {
            this.wards = wards;
            this.layersControl.overlays['Wards'] = L.geoJSON(wards, this.geoJsonLayerOptions);
            this.wardDataReceived.next(true);
        });
    }
    receiveAndSetStats() {
        this.getStats().subscribe((stats) => {
            this.stats = stats;
            this.wardDataReceived.subscribe(received => {
                if (received)
                    this.setStats();
            });
        });
    }
    setStats() {
        this.markerClusterGroup = L.markerClusterGroup();
        this.featureGroup = L.featureGroup();
        this.featureGroup.addLayer(this.markerClusterGroup);
        this.stats.data.forEach(datum => {
            var _a, _b, _c, _d, _e;
            const foundFeature = (_b = (_a = this.wards) === null || _a === void 0 ? void 0 : _a.features) === null || _b === void 0 ? void 0 : _b.find(feature => { var _a; return (datum === null || datum === void 0 ? void 0 : datum.DDGNWW) === ((_a = feature === null || feature === void 0 ? void 0 : feature.properties) === null || _a === void 0 ? void 0 : _a.DDGNWW); });
            if (!foundFeature && !(foundFeature === null || foundFeature === void 0 ? void 0 : foundFeature.geometry))
                return;
            const pointOfInaccessibility = polylabel_1.default((_c = foundFeature === null || foundFeature === void 0 ? void 0 : foundFeature.geometry) === null || _c === void 0 ? void 0 : _c.coordinates);
            const poiLabelMarker = (_d = this.mapUtilsService) === null || _d === void 0 ? void 0 : _d.getDefaultMarker(pointOfInaccessibility);
            this.setPopup(poiLabelMarker, datum, foundFeature);
            (_e = this.markerClusterGroup) === null || _e === void 0 ? void 0 : _e.addLayer(poiLabelMarker);
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
    getWards() {
        return this.regionService.getCacheAreaWards(this.regionKey || defaultAreaKey);
    }
    getStats() {
        return this.regionService.getCacheAreaStats(this.regionKey || defaultAreaKey);
    }
    ngOnDestroy() {
        this.componentAlive = false;
        this.map.remove();
    }
    onMapReady(currentMap) {
        this.map = currentMap;
        this.mapUtilsService.fullScreenControl.addTo(this.map);
        this.mapReady.next(true);
        setTimeout(() => {
            this.map.invalidateSize();
        }, 0);
    }
    // Do not use angular component to replace this
    setPopup(poiMarker, datum, feature) {
        var _a, _b, _c;
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
            <th class="tg-y698" colspan="3">${(_a = feature === null || feature === void 0 ? void 0 : feature.properties) === null || _a === void 0 ? void 0 : _a.DISTRICT}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0pky" colspan="2">Palika</td>
            <td class="tg-0pky" colspan="3">${(_b = feature === null || feature === void 0 ? void 0 : feature.properties) === null || _b === void 0 ? void 0 : _b.GaPa_NaPa}</td>
          </tr>
          <tr>
            <td class="tg-y698" colspan="2">Ward No</td>
            <td class="tg-y698" colspan="3">${(_c = feature === null || feature === void 0 ? void 0 : feature.properties) === null || _c === void 0 ? void 0 : _c.NEW_WARD_N}</td>
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
};
RegionComponent = __decorate([
    core_1.Component({
        selector: 'ngx-region',
        templateUrl: './region.component.html',
        styleUrls: ['./region.component.scss'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        region_service_1.RegionService,
        map_utils_service_1.MapUtilsService])
], RegionComponent);
exports.RegionComponent = RegionComponent;
