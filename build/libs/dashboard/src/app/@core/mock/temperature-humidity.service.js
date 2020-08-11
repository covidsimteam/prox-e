"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureHumidityService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const temperature_humidity_1 = require("../data/temperature-humidity");
let TemperatureHumidityService = class TemperatureHumidityService extends temperature_humidity_1.TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    getTemperatureData() {
        return rxjs_1.of(this.temperatureDate);
    }
    getHumidityData() {
        return rxjs_1.of(this.humidityDate);
    }
};
TemperatureHumidityService = __decorate([
    core_1.Injectable()
], TemperatureHumidityService);
exports.TemperatureHumidityService = TemperatureHumidityService;
