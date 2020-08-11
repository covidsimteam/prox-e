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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NationComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
const L = __importStar(require("leaflet"));
require("leaflet.markercluster");
const polylabel_1 = __importDefault(require("polylabel"));
const rxjs_1 = require("rxjs");
require("style-loader!leaflet/dist/leaflet.css");
const map_utils_service_1 = require("../../../services/components/map/map-utils.service");
const region_service_1 = require("../../../services/components/map/region.service");
const returnee_service_1 = require("../../../services/db/returnee.service");
const health_stats_model_1 = require("../../../models/db/docs/health-stats.model");
const census_model_1 = require("../../../models/db/docs/census.model");
let NationComponent = class NationComponent {
    constructor(mapUtilsService, regionService, returneeService, themeService) {
        this.mapUtilsService = mapUtilsService;
        this.regionService = regionService;
        this.returneeService = returneeService;
        this.themeService = themeService;
        this.title = 'National Covid Map';
        this.mapLayerDistrict = {
            bucket: 'gov_districts',
            label: 'Districts',
        };
        this.mapLayerProvince = {
            bucket: 'gov_provinces',
            label: 'Provinces',
        };
        this.mapLayerRoads = {
            bucket: 'roads_major',
            label: 'Major Roads',
        };
        this.districtNameValPairsSero = [];
        this.districtNameValPairsRatio = [];
        this.districtPcrDataSets = [{
                label: '',
                data: [],
                backgroundColor: ''
            }, {
                label: '',
                data: [],
                backgroundColor: ''
            }];
        this.quadDataCounter = new rxjs_1.BehaviorSubject(0);
        this.loading = true;
        this.mapReady = new rxjs_1.BehaviorSubject(false);
        this.options = {
            layers: [this.mapUtilsService.openStreetMaps],
            zoom: 7,
            crs: L.CRS.EPSG3857,
            center: L.latLng({ lat: 27.700769, lng: 85.30014 }),
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
            style: {
                'color': '#33A8FF',
                'weight': 4,
                'opacity': 0.65
            }
        };
        this.readyToRenderChart = false;
        this.themeSubscription = this.themeService.getJsTheme()
            .subscribe(config => {
            var _a, _b;
            this.districtPcrDataSets = [Object.assign(Object.assign({}, this.districtPcrDataSets[0]), { backgroundColor: theme_1.NbColorHelper.hexToRgbA((_a = config === null || config === void 0 ? void 0 : config.variables) === null || _a === void 0 ? void 0 : _a.primaryLight, 0.8) }), Object.assign(Object.assign({}, this.districtPcrDataSets[1]), { backgroundColor: theme_1.NbColorHelper.hexToRgbA((_b = config === null || config === void 0 ? void 0 : config.variables) === null || _b === void 0 ? void 0 : _b.infoLight, 0.8) })];
        });
    }
    ngOnInit() {
        this.layersControl = Object.assign(Object.assign({}, this.mapUtilsService.baseLayers), { overlays: {} });
        this.fetchLabelFeatures();
        this.receiveAndSetStats();
    }
    fetchLabelFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setLayerFromBucket(this.mapLayerDistrict);
            this.setLayerFromBucket(this.mapLayerProvince, {
                'color': '#043EB9',
                'weight': 5,
                'opacity': 0.65
            });
            this.setLayerFromBucket(this.mapLayerRoads, {
                'color': '#2E70E4',
                'weight': 3,
                'opacity': 0.65
            });
        });
    }
    setLayerFromBucket(layer, style) {
        this.regionService
            .getAndCache(layer.bucket)
            .subscribe((featureCollection) => {
            this.layersControl.overlays[layer.label] = L.geoJSON(featureCollection, { style: style });
            if (layer.bucket === this.mapLayerDistrict.bucket) {
                this.districtsGeoJson = featureCollection;
                this.layersControl.overlays['Districts'] = L.geoJSON(featureCollection, this.geoJsonLayerOptions);
                this.raiseQuadDataCount();
            }
        });
    }
    raiseQuadDataCount() {
        this.quadDataCounter.next(this.quadDataCounter.getValue() + 1);
    }
    receiveAndSetStats() {
        return __awaiter(this, void 0, void 0, function* () {
            rxjs_1.merge(this.regionService.getCacheDistrictHealthStats(), this.regionService.getCacheDistrictWiseCensus(), rxjs_1.from(this.returneeService.getAllWards())).subscribe((stats) => {
                if (health_stats_model_1.HealthStats.isDistrictHealthStats(stats)) {
                    this.districtsHealthStats = stats;
                    this.raiseQuadDataCount();
                }
                else if (census_model_1.Census2011.isDistrictCensus(stats)) {
                    this.districtPopulation = stats;
                    this.raiseQuadDataCount();
                }
                else {
                    this.returneeStats = stats;
                    this.raiseQuadDataCount();
                }
            });
            // wait for all 5 data sets to be received first
            this.quadDataCounter.subscribe((count) => {
                if (count === 4)
                    this.setStats();
            });
        });
    }
    findByNameFromReturneeStats(districtName) {
        return this.returneeStats.find((stat) => districtName.toLowerCase().startsWith(stat[2].toLowerCase()));
    }
    findByNameFromCensusStats(districtName) {
        var _a, _b;
        return (_b = (_a = this.districtPopulation) === null || _a === void 0 ? void 0 : _a.values) === null || _b === void 0 ? void 0 : _b.find((value) => { var _a, _b; return (_a = districtName === null || districtName === void 0 ? void 0 : districtName.toLowerCase()) === null || _a === void 0 ? void 0 : _a.startsWith((_b = value === null || value === void 0 ? void 0 : value.district) === null || _b === void 0 ? void 0 : _b.toLowerCase()); });
    }
    setStats() {
        this.markerClusterGroup = L.markerClusterGroup();
        this.featureGroup = L.featureGroup();
        this.featureGroup.addLayer(this.markerClusterGroup);
        this.districtsHealthStats.values.forEach((stats) => {
            const foundDistrict = this.districtsGeoJson.features.find((feature) => stats.district.toUpperCase().startsWith(feature.properties.FIRST_DIST)); // TODO change to DDGN comparison
            if (!foundDistrict)
                return;
            const pointOfInaccessibility = polylabel_1.default(foundDistrict.geometry.coordinates);
            const poiLabelMarker = this.mapUtilsService.getDefaultMarker(pointOfInaccessibility);
            this.setPopup(poiLabelMarker, stats);
            this.markerClusterGroup.addLayer(poiLabelMarker);
        });
        this.layersControl.overlays['Stats'] = this.markerClusterGroup;
        this.sortAndAddSetRankingChartData();
        this.readyToRenderChart = true;
        this.mapReady.subscribe((ready) => {
            if (ready) {
                this.featureGroup.addTo(this.map);
                this.loading = false;
            }
        });
    }
    sortAndAddSetRankingChartData() {
        const sortFunc = (a, b) => b[1] - a[1]; // highest to lowest
        const mapLabelFunc = (val) => val[0];
        const mapDataFunc = (val) => val[1];
        this.districtNameValPairsSero.sort(sortFunc);
        this.districtNameValPairsRatio.sort(sortFunc);
        this.districtNamesSero = this.districtNameValPairsSero.map(mapLabelFunc);
        this.districtPcrDataSets[0].data = this.districtNameValPairsSero.map(mapDataFunc);
        this.districtNamesRatio = this.districtNameValPairsRatio.map(mapLabelFunc);
        this.districtPcrDataSets[1].data = this.districtNameValPairsRatio.map(mapDataFunc);
    }
    appendSeroRankingChartData(districtName, proSero) {
        this.districtNameValPairsSero.push([districtName, proSero]);
    }
    appendRatioRankingChartData(districtName, pcrRatio) {
        this.districtNameValPairsRatio.push([districtName, pcrRatio]);
    }
    setPopup(poiMarker, datum) {
        const returneeInfo = this.findByNameFromReturneeStats(datum.district);
        const censusInfo = this.findByNameFromCensusStats(datum.district);
        // this array is based on the returnee v8 schema, FIX ME create an object with keys instead
        const returneeTotal = returneeInfo ? returneeInfo[5] : 0;
        const populationTotal = censusInfo ? censusInfo.total : 100000;
        // TODO get all district population in the database to remove a need for a default population
        const pcrTotal = datum.total_swab_collection;
        const rdtTotal = datum.total_rdt_tests;
        const pcrNegatives = datum.negatives;
        const rdtNegatives = datum.negatives_1;
        const returneeOverPop = (returneeTotal / populationTotal).toFixed(4);
        const rdtCoverageOverPop = (rdtTotal / populationTotal).toFixed(4);
        const rdtPositiveOverTests = ((rdtTotal - rdtNegatives) / rdtTotal).toFixed(4);
        const pcrCoverageOverPop = (pcrTotal / populationTotal).toFixed(4);
        const pcrPositiveOverTestsNum = (pcrTotal - pcrNegatives) / pcrTotal;
        const pcrPositiveOverTests = pcrPositiveOverTestsNum.toFixed(4);
        const positiveSeroPrevalenceNum = (pcrTotal - pcrNegatives) / populationTotal;
        const positiveSeroPrevalence = positiveSeroPrevalenceNum.toFixed(4);
        if (positiveSeroPrevalenceNum !== 0 &&
            !Number.isNaN(positiveSeroPrevalenceNum)) {
            this.appendSeroRankingChartData(datum.district, positiveSeroPrevalenceNum * 100);
        }
        if (pcrPositiveOverTestsNum !== 0 &&
            !Number.isNaN(pcrPositiveOverTestsNum)) {
            this.appendRatioRankingChartData(datum.district, pcrPositiveOverTestsNum * 100);
        }
        const popup = L.popup({ maxWidth: 100 });
        const popupHtml = `
      <div>
      <style type="text/css">
        .tg  {border-collapse:collapse;border-spacing:0;}
        .tg td {
          border-color:black;
          border-style:solid;
          border-width:1px;
          font-family:Arial, sans-serif;
          font-size:12px;
          overflow:hidden;
          padding:10px 8px;
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
            <th class="tg-y698" colspan="3">${datum.district}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0pky" colspan="2">+ve Sero Prev.</td>
            <td class="tg-0pky" colspan="3">${positiveSeroPrevalence}</td>
          </tr>
          <tr>
            <td class="tg-y698" colspan="2">PCR coverage</td>
            <td class="tg-y698" colspan="3">${pcrCoverageOverPop}</td>
          </tr>
          <tr>
            <td class="tg-0pky" colspan="2">PCR +ve ratio</td>
            <td class="tg-0pky" colspan="3">${pcrPositiveOverTests}</td>
          </tr>
          <tr>
            <td class="tg-y698" colspan="2">RDT coverage</td>
            <td class="tg-y698" colspan="3">${rdtCoverageOverPop}</td>
          </tr>
          <tr>
            <td class="tg-0pky" colspan="2">RDT +ve ratio</td>
            <td class="tg-0pky" colspan="3">${rdtPositiveOverTests}</td>
          </tr>
          <tr>
            <td class="tg-0pky" colspan="2">Returnee ratio</td>
            <td class="tg-0pky" colspan="3">${returneeOverPop}</td>
          </tr>
          <tr>
            <td class="tg-266k" colspan="2">Returnee</td>
            <td class="tg-266k">Test</td>
            <td class="tg-266k">PCR</td>
            <td class="tg-266k">RDT</td>
          </tr>
          <tr>
            <td class="tg-pidv">Isolated</td>
            <td class="tg-pidv">${datum.isolated_total}</td>
            <td class="tg-x5oc">Positive</td>
            <td class="tg-x5oc">${datum.total_positives}</td>
            <td class="tg-x5oc">${datum.positives}</td>
          </tr>
          <tr>
            <td class="tg-pidv">Quarantined</td>
            <td class="tg-pidv">${datum.quarantined_total}</td>
            <td class="tg-0cjc">Negative</td>
            <td class="tg-0cjc">${pcrNegatives}</td>
            <td class="tg-0cjc">${rdtNegatives}</td>
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
    ngOnDestroy() {
        this.map.remove();
        this.themeSubscription.unsubscribe();
    }
    onMapReady(currentMap) {
        this.map = currentMap;
        this.mapUtilsService.fullScreenControl.addTo(this.map);
        this.mapReady.next(true);
        setTimeout(() => {
            this.map.invalidateSize();
        }, 0);
    }
};
NationComponent = __decorate([
    core_1.Component({
        selector: 'ngx-leaflet',
        styleUrls: ['./nation.component.scss'],
        templateUrl: './nation.component.html',
    }),
    __metadata("design:paramtypes", [map_utils_service_1.MapUtilsService,
        region_service_1.RegionService,
        returnee_service_1.ReturneeService,
        theme_1.NbThemeService])
], NationComponent);
exports.NationComponent = NationComponent;
