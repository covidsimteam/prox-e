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
exports.ReturneeComponent = void 0;
const core_1 = require("@angular/core");
const ng2_smart_table_1 = require("ng2-smart-table");
const ngx_csv_parser_1 = require("ngx-csv-parser");
const settings_values_1 = require("../../../models/tabular/settings.values");
const returnee_table_service_1 = require("../../../services/components/returnee/returnee-table.service");
const returnee_service_1 = require("../../../services/db/returnee.service");
const messages_1 = require("../../../@core/data/messages");
// TODO refactor repeated codes in Returnee, PCR and RDT table component
// use Tabular service or higher order component or abstract component class
let ReturneeComponent = class ReturneeComponent {
    constructor(returneeTableService, returneeService, ngxCsvParser) {
        this.returneeTableService = returneeTableService;
        this.returneeService = returneeService;
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
        this.returneeTableService.getRows().subscribe((rows) => {
            this.source.load(rows);
        });
        this.returneeTableService.enableDBToTableSync(this.source);
    }
    initializeHeadersAndSettings() {
        this.returneeTableService.getColumns().subscribe((cols) => {
            var _a;
            this.columns = cols;
            const colsWithoutIdRev = Object.assign({}, cols);
            delete colsWithoutIdRev['_id'];
            delete colsWithoutIdRev['_rev'];
            if (cols['province']) {
                cols['province']['filter'] = (_a = this === null || this === void 0 ? void 0 : this.returneeTableService) === null || _a === void 0 ? void 0 : _a.prepareProvinceDropdown();
                cols['province']['editor'] = cols['province']['filter'];
            }
            this.settingsAndColumns = Object.assign(Object.assign({}, this.settingsAndColumns), { columns: colsWithoutIdRev || {} });
        });
    }
    // TODO in all 'Aggregates' tables, use dialog for errors e.g. no rowData matches constraints in above filter
    // https://akveo.github.io/nebular/docs/components/dialog/overview#nbdialogservice
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
                const headerLengthMatches = rowData.length === this.returneeService.headers.length - 2;
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
                this.uploadInstruction = messages_1.CSV_UPLOAD_CONFIRM;
                const rowObj = {};
                this.returneeService.headers.forEach((header, index) => {
                    rowObj[header[0]] =
                        index !== 0
                            ? this.returneeTableService.xTrim(rowData[index - 1])
                            : this.returneeTableService.prepareDocID(rowData[0], rowData[1], [rowData[2], rowData[3]]);
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
                this.returneeTableService.prepareDocID(row['province'], row['district']) === rowObj['_id']);
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
                this.returneeTableService.getCsvDataFile();
                return;
            }
            this.returneeService.addAll(this.rowsFromCsvFile.map(row => this.returneeTableService.prepareDoc(row)));
            // TODO show addAll progress using db EventEmitter's 'complete' event
            this.isFileLoaded = false;
            this.fileImportInput.nativeElement.value = '';
        }
        catch (error) {
            // TODO report the docs that failed to insert as a list under the file upload card
        }
    }
    onAddConfirm(event) {
        try {
            this.returneeTableService.saveTableRowAddition(event.newData);
            event.confirm.resolve();
        }
        catch (error) {
            event.confirm.reject();
        }
    }
    onEditConfirm(event) {
        try {
            this.returneeTableService.saveTableRowChanges(event.data, event.newData);
            event.confirm.resolve();
        }
        catch (error) {
            event.confirm.reject();
        }
    }
    // Potential use for floating map component showing district/municipality/ward preview
    // (userRowSelect)="onUserRowSelect($event)"
    // onUserRowSelect(event: any) {
    // }
    onDeleteConfirm(event) {
        if (window.confirm('Confirm Returnee record deletion:')) {
            this.returneeTableService.saveTableRowDeletion(event.data);
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
], ReturneeComponent.prototype, "fileImportInput", void 0);
ReturneeComponent = __decorate([
    core_1.Component({
        selector: 'ngx-returnee',
        templateUrl: './returnee.component.html',
        styleUrls: ['./returnee.component.scss'],
    }),
    __metadata("design:paramtypes", [returnee_table_service_1.ReturneeTableService,
        returnee_service_1.ReturneeService,
        ngx_csv_parser_1.NgxCsvParser])
], ReturneeComponent);
exports.ReturneeComponent = ReturneeComponent;
