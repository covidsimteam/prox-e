"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Census2011 = void 0;
var Census2011;
(function (Census2011) {
    function isDistrictCensus(properties) {
        return properties._id === 'district_stats_2011';
    }
    Census2011.isDistrictCensus = isDistrictCensus;
})(Census2011 = exports.Census2011 || (exports.Census2011 = {}));
