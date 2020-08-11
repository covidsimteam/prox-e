"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabularService = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const domain_model_1 = require("../../../models/domain.model");
class TabularService {
    constructor() { }
    getRows() {
        return rxjs_1.from(this.getJsonData());
    }
    getColumns() {
        return this.getTableHeaders().pipe(operators_1.map((headers) => {
            return headers.map((header) => {
                const tableHeaderDetails = {
                    type: header[1],
                    title: header[0].toUpperCase(),
                };
                return { [header[0]]: tableHeaderDetails };
            });
        }), operators_1.map((headerObjArr) => {
            const tempCols = {};
            headerObjArr.forEach((col) => {
                const key = Object.keys(col)[0];
                const val = Object.values(col)[0];
                tempCols[key] = val;
            });
            return tempCols;
        }));
    }
    enableDBToTableSyncTabular(source, service) {
        service.getChangeListener().subscribe((emitted) => {
            if (emitted && emitted.change && emitted.change.docs) {
                emitted.change.docs.forEach((doc) => {
                    if (doc._deleted) {
                        this.findAndRemoveFromTable(doc._id, source);
                    }
                    else {
                        if (doc.fields && doc.fields.length) {
                            const newRow = this.prepareNewTableRowTabular(doc.fields, doc._rev, service);
                            this.findAndRemoveFromTable(doc._id, source);
                            source.prepend(newRow);
                        }
                    }
                });
            }
        });
    }
    prepareNewTableRowTabular(fields, docRev, service) {
        const newDoc = {};
        service.headers
            .map(headerAndTypeArr => headerAndTypeArr[0])
            .forEach((header, index) => {
            newDoc[header] = index < (fields === null || fields === void 0 ? void 0 : fields.length) ? fields[index] : docRev;
        });
        return newDoc;
    }
    xTrim(str) {
        return str ? str.trim() : str;
    }
    xTrimWithLCase(str, toLowerCase = true) {
        if (str && typeof str === 'string') {
            const trimmed = str.trim().replace(/ /g, '_');
            return toLowerCase ? trimmed.toLowerCase() : trimmed;
        }
        return '' + str;
    }
    prepareDocTabular(newRow, schemaVersion, service, removeRev = false) {
        const schemaDoc = {
            _id: newRow._id,
            _rev: newRow._rev,
            pschema: schemaVersion,
            fields: [],
        };
        // newest _rev is fetched again before updating db if using PouchDBServce->update or delete method
        // but not when using PouchDBServce->create or addAll method.
        service.headers.map(headerAndType => headerAndType[0]).forEach((header) => {
            schemaDoc.fields.push(newRow[header]);
        });
        // TODO update this iif schema changes to not having province and district first in the row
        schemaDoc._id = schemaDoc.fields[0] = domain_model_1.isReturneeService(service) ?
            this.prepareDocID(schemaDoc.fields[1], schemaDoc.fields[2], [schemaDoc.fields[3], schemaDoc.fields[4]]) :
            this.prepareDocID(schemaDoc.fields[1], schemaDoc.fields[2]);
        if (!schemaDoc._rev || removeRev)
            delete schemaDoc._rev;
        return schemaDoc;
    }
    prepareDocID(province, district, more = ['']) {
        const t = this.xTrimWithLCase;
        return more ?
            `province:${t(province)}:district:${t(district)}:municipality:${t(more[0])}:ward:${t(more[1])}` :
            `province:${t(province)}:district:${t(district)}`;
    }
    saveTableRowChangesTabular(oldRow, newRow, schemaVer, service) {
        if (oldRow.province !== newRow.province || oldRow.district !== newRow.district) {
            // delete old row data as _id is compounded using district and province
            service.delete(this.prepareDocTabular(oldRow, schemaVer, service));
            service.create(this.prepareDocTabular(newRow, schemaVer, service, true));
            return;
        }
        service.update(this.prepareDocTabular(newRow, schemaVer, service));
    }
    saveTableRowAdditionTabular(newRow, schemaVer, service) {
        service.create(this.prepareDocTabular(newRow, schemaVer, service));
    }
    saveTableRowDeletionTabular(deletedRow, schemaVer, service) {
        service.delete(this.prepareDocTabular(deletedRow, schemaVer, service));
    }
    findAndRemoveFromTable(docId, source) {
        source.getAll().then((elements) => {
            // FIXME this will not scale well for large table sizes. Large size is not expected for current use cases.
            const rowsToDelete = elements.filter(row => {
                const id = docId.split(':').length > 4 ?
                    this.prepareDocID(row['province'], row['district'], [row['municipality'], row['ward']]) :
                    this.prepareDocID(row['province'], row['district']);
                return row['_id'] === docId || id === docId;
            });
            rowsToDelete.forEach(rowToDelete => source.remove(rowToDelete));
        })
            .catch(err => {
            console.error('Deletion from table err', err);
        });
    }
    prepareProvinceDropdown() {
        const dropdown = {
            type: 'list',
            config: {
                selectText: 'Filter by Province',
                list: [
                    { value: 'Province 1', title: 'Province 1' },
                    { value: 'Province 2', title: 'Province 2' },
                    { value: 'Bagmati', title: 'Bagmati' },
                    { value: 'Gandaki', title: 'Gandaki' },
                    { value: 'Province 5', title: 'Province 5' },
                    { value: 'Karnali', title: 'Karnali' },
                    { value: 'Sudurpashchim', title: 'Sudurpashchim' },
                ],
            },
        };
        return dropdown;
    }
    // TODO add class to columns province and district, listen to changes on province and populate districts based on that
    prepareDistrictAutocomplete() {
        const completer = {
            type: 'completer',
            config: {
                completer: {
                    data: [
                        'Kanchanpur',
                        'Kailali',
                        'Darchula',
                        'Doti',
                        'Dadeldhura',
                        'Bajhang',
                        'Bajura',
                        'Baitadi',
                        'Achham',
                        'Rukum_w',
                        'Salyan',
                        'Mugu',
                        'Kalikot',
                        'Jumla',
                        'Jajarkot',
                        'Humla',
                        'Dolpa',
                        'Dailekh',
                        'Surkhet',
                        'Pyuthan',
                        'Palpa',
                        'Nawalparasi_w',
                        'Kapilbastu',
                        'Gulmi',
                        'Dang',
                        'Bardiya',
                        'Rupandehi',
                        'Banke',
                        'Rukum_e',
                        'Arghakhanchi',
                        'Rolpa',
                        'Parbat',
                        'Nawalparasi_e',
                        'Myagdi',
                        'Mustang',
                        'Manang',
                        'Lamjung',
                        'Kaski',
                        'Gorkha',
                        'Tanahu',
                        'Baglung',
                        'Syangja',
                        'Nuwakot',
                        'Makawanpur',
                        'Lalitpur',
                        'Kabhrepalanchok',
                        'Kathmandu',
                        'Dolakha',
                        'Dhading',
                        'Chitawan',
                        'Bhaktapur',
                        'Ramechhap',
                        'Rasuwa',
                        'Sindhuli',
                        'Sindhupalchok',
                        'Siraha',
                        'Sarlahi',
                        'Saptari',
                        'Rautahat',
                        'Parsa',
                        'Mahottari',
                        'Dhanusha',
                        'Bara',
                        'Sankhuwasabha',
                        'Panchthar',
                        'Morang',
                        'Okhaldhunga',
                        'Khotang',
                        'Jhapa',
                        'Terhathum',
                        'Udayapur',
                        'Ilam',
                        'Taplejung',
                        'Dhankuta',
                        'Sunsari',
                        'Bhojpur',
                        'Solukhumbu',
                    ],
                },
            },
        };
        return completer;
    }
}
exports.TabularService = TabularService;
