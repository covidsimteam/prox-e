"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const spatial_service_1 = require("../../db/spatial.service");
let RegionService = class RegionService {
    constructor(spatialService) {
        this.spatialService = spatialService;
    }
    getAndCache(key) {
        return rxjs_1.from(this.spatialService.get(key)).pipe(operators_1.tap(async (res) => {
            var _a, _b, _c;
            try {
                await ((_b = (_a = this === null || this === void 0 ? void 0 : this.spatialService) === null || _a === void 0 ? void 0 : _a.instance()) === null || _b === void 0 ? void 0 : _b.get(res['_id']));
            }
            catch (error) {
                res ? delete res['_rev'] : rxjs_1.noop;
                await ((_c = this.spatialService.instance()) === null || _c === void 0 ? void 0 : _c.put(res));
            }
        }));
    }
    getCacheDistrictWiseCensus() {
        return this.getAndCache('district_stats_2011');
    }
    getCacheDistrictHealthStats() {
        return this.getAndCache('district_health_stats');
    }
    getCacheAreaWards(area) {
        return this.getAndCache(`wards_${area}`);
    }
    getCacheAreaStats(area) {
        return this.getAndCache(`${area}_stats`);
    }
};
RegionService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [spatial_service_1.SpatialService])
], RegionService);
exports.RegionService = RegionService;
