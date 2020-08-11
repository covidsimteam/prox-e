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
exports.MapUtilsService = void 0;
const core_1 = require("@angular/core");
const L = __importStar(require("leaflet"));
let MapUtilsService = class MapUtilsService {
    constructor() {
        this.attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        this.attributionWM = '© <a href="https://www.openstreetmap.org/copyright">Wikimedia Map</a> contributors';
        this.tileLayerPng = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.tileLayerWMPng = 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
        this.tileLayerOptions = {
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
        this.openStreetMaps = L.tileLayer(this.tileLayerPng, this.tileLayerOptions);
        this.wikimediaMaps = L.tileLayer(this.tileLayerWMPng, Object.assign(Object.assign({}, this.tileLayerOptions), { attribution: this.attributionWM }));
        this.fullscreenControl_ = L.control.fullscreen({
            position: 'topleft',
            title: 'Enter Fullscreen',
            titleCancel: 'Exit Fullscreen',
            content: '',
            forceSeparateButton: true,
            forcePseudoFullscreen: true,
            fullscreenElement: false,
        });
        this.layersControl_ = {
            baseLayers: {
                'OpenStreet Maps': this.openStreetMaps,
                'Wikimedia Maps': this.wikimediaMaps,
            },
        };
    }
    get fullScreenControl() {
        return this.fullscreenControl_;
    }
    get baseLayers() {
        return Object.assign({}, this.layersControl_);
    }
    getDefaultMarker(pointOfInaccessibility) {
        return L.marker({ lng: pointOfInaccessibility[0], lat: pointOfInaccessibility[1] }, {
            icon: L.icon({
                iconSize: [26, 42],
                iconAnchor: [13, 42],
                iconUrl: 'assets/img/markers/marker-icon.png',
                iconRetinaUrl: 'assets/img/markers/marker-icon-2x.png',
                shadowUrl: 'assets/img/markers/marker-shadow.png',
            }),
        });
    }
};
MapUtilsService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [])
], MapUtilsService);
exports.MapUtilsService = MapUtilsService;
