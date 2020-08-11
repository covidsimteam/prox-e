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
exports.PcrComponent = void 0;
const core_1 = require("@angular/core");
const ng2_smart_table_1 = require("ng2-smart-table");
const ngx_csv_parser_1 = require("ngx-csv-parser");
const settings_values_1 = require("../../../models/tabular/settings.values");
const pcr_table_service_1 = require("../../../services/components/pcr/pcr-table.service");
const pcr_service_1 = require("../../../services/db/pcr.service");
const messages_1 = require("../../../@core/data/messages");
let PcrComponent = class PcrComponent {
    constructor(pcrTableService, pcrService, ngxCsvParser) {
        this.pcrTableService = pcrTableService;
        this.pcrService = pcrService;
        this.ngxCsvParser = ngxCsvParser;
        this.settingsAndColumns = settings_values_1.settings;
        this.isFileLoaded = false;
        this.uploadInstruction = messages_1.CSV_UPLOAD_INSTR;
        this.source = new ng2_smart_table_1.LocalDataSource();
        this.rowsFromCsvFile = [];
        this.rowsReplacedByCsvFile = [];
    }
    ngOnInit() {
        this.initializeHeadersAndSettings();
        // table contents init
        this.pcrTableService.getRows().subscribe((rows) => {
            this.source.load(rows);
        });
        this.pcrTableService.enableDBToTableSync(this.source);
    }
    initializeHeadersAndSettings() {
        this.pcrTableService.getColumns().subscribe((cols) => {
            this.columns = cols;
            const colsWithoutIdRev = Object.assign({}, cols);
            delete colsWithoutIdRev['_id'];
            delete colsWithoutIdRev['_rev'];
            if (cols['province']) {
                cols['province']['filter'] = this.pcrTableService.prepareProvinceDropdown();
                cols['province']['editor'] = cols['province']['filter'];
            }
            this.settingsAndColumns = Object.assign(Object.assign({}, this.settingsAndColumns), { columns: colsWithoutIdRev || {} });
        });
    }
    csvUploadListener(event) {
        const files = event.srcElement.files;
        this.isFileLoaded = files ? true : false;
        this.ngxCsvParser
            .parse(files[0], { header: false, delimiter: ',' })
            .subscribe((result) => {
            this.rowsFromCsvFile = result
                .slice(1)
                .filter((rowData) => {
                // -2 since db headers contain _id and _rev fields as well
                const headerLengthMatches = rowData.length === this.pcrService.headers.length - 2;
                if (!headerLengthMatches) {
                    this.resetFileUploader();
                    this.uploadInstruction = messages_1.CSV_UPLOAD_INSTR_ERR;
                }
                const isNotEmptyRow = rowData
                    .map((column) => column.length)
                    .reduce((total, colLength) => total + colLength) !== 0;
                return headerLengthMatches && isNotEmptyRow;
            })
                .map((rowData) => {
                // db headers contain _id and _rev fields as well
                const rowObj = {};
                this.uploadInstruction = messages_1.CSV_UPLOAD_CONFIRM;
                this.pcrService.headers.forEach((header, index) => {
                    rowObj[header[0]] =
                        index !== 0
                            ? this.pcrTableService.xTrim(rowData[index - 1])
                            : this.pcrTableService.prepareDocID(rowData[0], rowData[1]);
                });
                this.csvRowAndExistingRowMerger(rowObj);
                return rowObj;
            });
        }, (_) => {
            window.alert('Please upload a valid comma separated file with ');
        });
    }
    csvRowAndExistingRowMerger(rowObj) {
        this.source.getAll().then((elements) => {
            const rowsToDelete = elements.filter((row) => row['_id'] === rowObj['_id'] ||
                this.pcrTableService.prepareDocID(row['province'], row['district']) === rowObj['_id']);
            this.rowsReplacedByCsvFile = [
                ...this.rowsReplacedByCsvFile,
                ...rowsToDelete,
            ];
            rowsToDelete.forEach((rowToDelete) => this.source.remove(rowToDelete));
            this.source.prepend(rowObj);
        });
    }
    resetFileUploader() {
        this.fileImportInput.nativeElement.value = '';
        this.isFileLoaded = false;
    }
    resetHandler($event) {
        $event.preventDefault();
        this.resetFileUploader();
        this.uploadInstruction = messages_1.CSV_UPLOAD_INSTR;
        this.rowsFromCsvFile.forEach((row) => this.source.remove(row));
        this.rowsReplacedByCsvFile.forEach((row) => this.source.prepend(row));
    }
    uploadDownloadHandler($event) {
        $event.preventDefault();
        this.uploadInstruction = messages_1.CSV_UPLOAD_INSTR;
        try {
            if (!this.isFileLoaded) {
                this.pcrTableService.getCsvDataFile();
                return;
            }
            this.pcrService.addAll(this.rowsFromCsvFile.map((row) => this.pcrTableService.prepareDoc(row)));
            this.isFileLoaded = false;
            this.fileImportInput.nativeElement.value = '';
        }
        catch (error) {
            // TODO report the docs that failed to insert as a list under the file upload card
        }
    }
    onAddConfirm(event) {
        try {
            this.pcrTableService.saveTableRowAddition(event.newData);
            event.confirm.resolve();
        }
        catch (error) {
            event.confirm.reject();
        }
    }
    onEditConfirm(event) {
        try {
            this.pcrTableService.saveTableRowChanges(event.data, event.newData);
            event.confirm.resolve();
        }
        catch (error) {
            event.confirm.reject();
        }
    }
    // Potential use for floating map component showing district preview
    // (userRowSelect)="onUserRowSelect($event)"
    // onUserRowSelect(event: any) {
    // }
    onDeleteConfirm(event) {
        if (window.confirm('Confirm PCR test record deletion:')) {
            this.pcrTableService.saveTableRowDeletion(event.data);
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
};
__decorate([
    core_1.ViewChild('fileImportInput'),
    __metadata("design:type", core_1.ElementRef)
], PcrComponent.prototype, "fileImportInput", void 0);
PcrComponent = __decorate([
    core_1.Component({
        selector: 'ngx-pcr',
        templateUrl: './pcr.component.html',
        styleUrls: ['./pcr.component.scss'],
    }),
    __metadata("design:paramtypes", [pcr_table_service_1.PcrTableService,
        pcr_service_1.PcrService,
        ngx_csv_parser_1.NgxCsvParser])
], PcrComponent);
exports.PcrComponent = PcrComponent;
