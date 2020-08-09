import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { from, Observable } from 'rxjs';
import { SCHEMA_VER } from '../../../@core/data/pschema:pcrs:v8';

import { PcrService } from '../../db/pcr.service';
import { TabularService } from '../tabular/tabular.service';
import { PCRTupleRev } from '../../../models/db/table-headers.model';
import { PSchemaDoc } from '../../../models/db/schema/pschema.model';

@Injectable({
  providedIn: 'root',
})
export class PcrTableService extends TabularService {

  constructor(private pcrService: PcrService) {
    super();
  }

  protected getTableHeaders(): Observable<string[][]> {
    return from(this.pcrService.getTableHeaders());
  }

  protected async getJsonData(): Promise<{}[]> {
    try {
      const tableHeaders = await this.pcrService.getTableHeaders();
      const rowsData = await this.pcrService.getAllDistricts();
      return rowsData.map((item: PCRTupleRev) => {
        const columnObj = {};
        tableHeaders.forEach((header, index) => {
          columnObj[header[0]] = item[index];
        });
        return columnObj;
      });
    } catch (error) {
      throw Error('Unable to fetch PCR tests data');
    }
  }

  protected async getCsvData(): Promise<string> {
    try {
      const tableHeaders = await this.pcrService.getTableHeaders();
      const rowsData = await this.pcrService.getAllDistricts();

      const csvFileContent = [];
      // add header
      csvFileContent.push(
        tableHeaders
          .map(headerAndType => headerAndType[0])
          .slice(1, tableHeaders.length - 1)
          .join(','));

      // add rows
      rowsData.forEach((rowItem: PCRTupleRev) => {
        csvFileContent.push(
          rowItem
            .slice(1, tableHeaders.length - 1)
            .join(','));
      });

      return csvFileContent.join('\n');
    } catch (error) {
      throw Error('Unable to fetch PCR tests data');
    }
  }

  async getCsvDataFile() {
    const data = await this.getCsvData();
    const blob = new Blob([data], { type: 'text/csv' });

    const tempAnchor = document.createElement('a');
    tempAnchor.href = window.URL.createObjectURL(blob);
    tempAnchor.download = 'pcr-test-cov-data-hub.csv';
    document.body.appendChild(tempAnchor);
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
  }

  enableDBToTableSync(source: LocalDataSource) {
    super.enableDBToTableSyncTabular(source, this.pcrService);
  }

  prepareDoc(newRow: any, removeRev = false): PSchemaDoc {
    return super.prepareDocTabular(newRow, SCHEMA_VER, this.pcrService, removeRev);
  }

  saveTableRowChanges(oldRow: any, newRow: any) {
    super.saveTableRowChangesTabular(oldRow, newRow, SCHEMA_VER, this.pcrService);
  }

  saveTableRowAddition(newRow: any) {
    super.saveTableRowAdditionTabular(newRow, SCHEMA_VER, this.pcrService);
  }

  saveTableRowDeletion(deletedRow: any) {
    super.saveTableRowDeletionTabular(deletedRow, SCHEMA_VER, this.pcrService);
  }

}
