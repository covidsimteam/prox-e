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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryOrdersMapComponent = void 0;
const core_1 = require("@angular/core");
const L = __importStar(require("leaflet"));
const country_orders_map_service_1 = require("./country-orders-map.service");
const theme_1 = require("@nebular/theme");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let CountryOrdersMapComponent = class CountryOrdersMapComponent {
    constructor(ecMapService, theme) {
        this.ecMapService = ecMapService;
        this.theme = theme;
        this.select = new core_1.EventEmitter();
        this.layers = [];
        this.alive = true;
        this.options = {
            zoom: 2,
            minZoom: 2,
            maxZoom: 6,
            zoomControl: false,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
            maxBounds: new L.LatLngBounds(new L.LatLng(-89.98155760646617, -180), new L.LatLng(89.99346179538875, 180)),
            maxBoundsViscosity: 1.0,
        };
        rxjs_1.combineLatest([
            this.ecMapService.getCords(),
            this.theme.getJsTheme(),
        ])
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(([cords, config]) => {
            this.currentTheme = config.variables.countryOrders;
            this.layers = [this.createGeoJsonLayer(cords)];
            this.selectFeature(this.findFeatureLayerByCountryId(this.countryId));
        });
    }
    mapReady(map) {
        map.addControl(L.control.zoom({ position: 'bottomright' }));
        // fix the map fully displaying, existing leaflet bag
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
    }
    createGeoJsonLayer(cords) {
        return L.geoJSON(cords, {
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
    onEachFeature(feature, layer) {
        layer.on({
            mouseover: (e) => this.highlightFeature(e.target),
            mouseout: (e) => this.moveout(e.target),
            click: (e) => this.selectFeature(e.target),
        });
    }
    highlightFeature(featureLayer) {
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
    moveout(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(featureLayer);
            // When countries have common border we should highlight selected country once again
            this.highlightFeature(this.selectedCountry);
        }
    }
    resetHighlight(featureLayer) {
        if (featureLayer) {
            const geoJsonLayer = this.layers[0];
            geoJsonLayer.resetStyle(featureLayer);
        }
    }
    selectFeature(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(this.selectedCountry);
            this.highlightFeature(featureLayer);
            this.selectedCountry = featureLayer;
            this.select.emit(featureLayer.feature.properties.name);
        }
    }
    findFeatureLayerByCountryId(id) {
        const layers = this.layers[0].getLayers();
        const featureLayer = layers.find(item => {
            return item.feature.id === id;
        });
        return featureLayer ? featureLayer : null;
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CountryOrdersMapComponent.prototype, "countryId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CountryOrdersMapComponent.prototype, "select", void 0);
CountryOrdersMapComponent = __decorate([
    core_1.Component({
        selector: 'ngx-country-orders-map',
        styleUrls: ['./country-orders-map.component.scss'],
        template: `
    <div leaflet [leafletOptions]="options" [leafletLayers]="layers" (leafletMapReady)="mapReady($event)"></div>
  `,
    }),
    __metadata("design:paramtypes", [country_orders_map_service_1.CountryOrdersMapService,
        theme_1.NbThemeService])
], CountryOrdersMapComponent);
exports.CountryOrdersMapComponent = CountryOrdersMapComponent;
