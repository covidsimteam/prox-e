import { LocalDataSource } from 'ng2-smart-table';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataTableService, ExistingDoc, isReturneeService } from '../../../models/domain.model';
import { Column, ColumnDetails } from '../../../models/tabular/column.model';
import { TABTuple } from '../../../models/db/table-headers.model';
import { PSchemaDoc } from '../../../models/db/schema/pschema.model';

export abstract class TabularService {

  constructor() { }

  protected abstract getTableHeaders(): Observable<string[][]>;
  protected abstract async getJsonData(): Promise<{}[]>;

  getRows(): Observable<{}[]> {
    return from(this.getJsonData());
  }

  getColumns(): Observable<{}> {
    return this.getTableHeaders().pipe(
      map((headers: string[][]) => {
        return headers.map((header: string[]) => {
          const tableHeaderDetails: ColumnDetails = {
            type: header[1],
            title: header[0].toUpperCase(),
          };
          return { [header[0]]: tableHeaderDetails };
        });
      }),
      map((headerObjArr: Column[]) => {
        const tempCols = {};
        headerObjArr.forEach((col) => {
          const key = Object.keys(col)[0];
          const val = Object.values(col)[0];
          tempCols[key] = val;
        });
        return tempCols;
      }),
    );
  }

  protected enableDBToTableSyncTabular(source: LocalDataSource, service: DataTableService) {
    service.getChangeListener().subscribe((emitted: any) => {
      if (emitted && emitted.change && emitted.change.docs) {
        emitted.change.docs.forEach((doc: any) => {
          if (doc._deleted) {
            this.findAndRemoveFromTable(doc._id, source);
          } else {
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

  protected prepareNewTableRowTabular(fields: TABTuple, docRev: string, service: DataTableService) {
    const newDoc = {};
    service.headers
      .map(headerAndTypeArr => headerAndTypeArr[0])
      .forEach((header, index) => {
        newDoc[header] = index < fields.length ? fields[index] : docRev;
      });
    return newDoc;
  }

  xTrim(str: string): string {
    return str ? str.trim() : str;
  }

  xTrimWithLCase(str: string | number, toLowerCase = true): string {
    if (str && typeof str === 'string') {
      const trimmed = str.trim().replace(/ /g, '_');
      return toLowerCase ? trimmed.toLowerCase() : trimmed;
    }
  }

  protected prepareDocTabular(newRow: any, schemaVersion: string, service: DataTableService, removeRev = false) {
    const schemaDoc: PSchemaDoc = {
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
    schemaDoc._id = schemaDoc.fields[0] = isReturneeService(service) ?
      this.prepareDocID(schemaDoc.fields[1], schemaDoc.fields[2], [schemaDoc.fields[3], schemaDoc.fields[4]]) :
      this.prepareDocID(schemaDoc.fields[1], schemaDoc.fields[2]);

    if (!schemaDoc._rev || removeRev) delete schemaDoc._rev;

    return schemaDoc;
  }

  prepareDocID(province: string, district: string, more: string[] = null) {
    const t = this.xTrimWithLCase;
    return more ?
      `province:${t(province)}:district:${t(district)}:municipality:${t(more[0])}:ward:${t(more[1])}` :
      `province:${t(province)}:district:${t(district)}`;
  }

  protected saveTableRowChangesTabular(oldRow: any, newRow: any, schemaVer: string, service: DataTableService) {
    if (oldRow.province !== newRow.province || oldRow.district !== newRow.district) {
      // delete old row data as _id is compounded using district and province
      service.delete(this.prepareDocTabular(oldRow, schemaVer, service) as ExistingDoc);
      service.create(this.prepareDocTabular(newRow, schemaVer, service, true) as ExistingDoc);
      return;
    }
    service.update(this.prepareDocTabular(newRow, schemaVer, service) as ExistingDoc);
  }

  protected saveTableRowAdditionTabular(newRow: any, schemaVer: string, service: DataTableService) {
    service.create(this.prepareDocTabular(newRow, schemaVer, service) as ExistingDoc);
  }

  protected saveTableRowDeletionTabular(deletedRow: any, schemaVer: string, service: DataTableService) {
    service.delete(this.prepareDocTabular(deletedRow, schemaVer, service) as ExistingDoc);
  }

  protected findAndRemoveFromTable(docId: string, source: LocalDataSource) {
    source.getAll().then((elements: []) => {
      // FIXME this will not scale well for large table sizes. Large size is not expected for current use cases.
      const rowsToDelete = elements.filter(row => {
        const id =  docId.split(':').length > 4 ?
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
          { value: 'Province 1', title: 'Province 1'},
          { value: 'Province 2', title: 'Province 2'},
          { value: 'Bagmati', title: 'Bagmati'},
          { value: 'Gandaki', title: 'Gandaki'},
          { value: 'Province 5', title: 'Province 5'},
          { value: 'Karnali', title: 'Karnali'},
          { value: 'Sudurpashchim', title: 'Sudurpashchim'},
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
