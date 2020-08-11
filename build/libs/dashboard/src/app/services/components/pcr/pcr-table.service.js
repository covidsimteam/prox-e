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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcrTableService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const pschema_pcrs_v8_1 = require("../../../@core/data/pschema:pcrs:v8");
const pcr_service_1 = require("../../db/pcr.service");
const tabular_service_1 = require("../tabular/tabular.service");
let PcrTableService = class PcrTableService extends tabular_service_1.TabularService {
    constructor(pcrService) {
        super();
        this.pcrService = pcrService;
    }
    getTableHeaders() {
        return rxjs_1.from(this.pcrService.getTableHeaders());
    }
    getJsonData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tableHeaders = yield this.pcrService.getTableHeaders();
                const rowsData = yield this.pcrService.getAllDistricts();
                return rowsData.map((item) => {
                    const columnObj = {};
                    tableHeaders.forEach((header, index) => {
                        columnObj[header[0]] = item[index];
                    });
                    return columnObj;
                });
            }
            catch (error) {
                throw Error('Unable to fetch PCR tests data');
            }
        });
    }
    getCsvData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tableHeaders = yield this.pcrService.getTableHeaders();
                const rowsData = yield this.pcrService.getAllDistricts();
                const csvFileContent = [];
                // add header
                csvFileContent.push(tableHeaders
                    .map(headerAndType => headerAndType[0])
                    .slice(1, tableHeaders.length - 1)
                    .join(','));
                // add rows
                rowsData.forEach((rowItem) => {
                    csvFileContent.push(rowItem
                        .slice(1, tableHeaders.length - 1)
                        .join(','));
                });
                return csvFileContent.join('\n');
            }
            catch (error) {
                throw Error('Unable to fetch PCR tests data');
            }
        });
    }
    getCsvDataFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getCsvData();
            const blob = new Blob([data], { type: 'text/csv' });
            const tempAnchor = document.createElement('a');
            tempAnchor.href = window.URL.createObjectURL(blob);
            tempAnchor.download = 'pcr-test-cov-data-hub.csv';
            document.body.appendChild(tempAnchor);
            tempAnchor.click();
            document.body.removeChild(tempAnchor);
        });
    }
    enableDBToTableSync(source) {
        super.enableDBToTableSyncTabular(source, this.pcrService);
    }
    prepareDoc(newRow, removeRev = false) {
        return super.prepareDocTabular(newRow, pschema_pcrs_v8_1.SCHEMA_VER, this.pcrService, removeRev);
    }
    saveTableRowChanges(oldRow, newRow) {
        super.saveTableRowChangesTabular(oldRow, newRow, pschema_pcrs_v8_1.SCHEMA_VER, this.pcrService);
    }
    saveTableRowAddition(newRow) {
        super.saveTableRowAdditionTabular(newRow, pschema_pcrs_v8_1.SCHEMA_VER, this.pcrService);
    }
    saveTableRowDeletion(deletedRow) {
        super.saveTableRowDeletionTabular(deletedRow, pschema_pcrs_v8_1.SCHEMA_VER, this.pcrService);
    }
};
PcrTableService = __decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [pcr_service_1.PcrService])
], PcrTableService);
exports.PcrTableService = PcrTableService;
