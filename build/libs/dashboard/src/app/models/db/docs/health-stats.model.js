"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthStats = void 0;
var HealthStats;
(function (HealthStats) {
    function isDistrictHealthStats(properties) {
        return properties._id === 'district_health_stats';
    }
    HealthStats.isDistrictHealthStats = isDistrictHealthStats;
})(HealthStats = exports.HealthStats || (exports.HealthStats = {}));
