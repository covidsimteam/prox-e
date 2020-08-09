import { Injectable } from '@angular/core';
import { ReturneeService } from '../../db/returnee.service';
import { Observable, from } from 'rxjs';

import { LocalDataSource } from 'ng2-smart-table';
import { TabularService } from '../tabular/tabular.service';
import { SCHEMA_VER } from '../../../@core/data/pschema:returnees:v8';
import { RETTupleRev } from '../../../models/db/table-headers.model';
import { PSchemaDoc } from '../../../models/db/schema/pschema.model';

@Injectable({
  providedIn: 'root',
})
export class ReturneeTableService extends TabularService {

  constructor(private returneeService: ReturneeService) {
    super();
  }

  protected getTableHeaders(): Observable<string[][]> {
    return from(this.returneeService.getTableHeaders());
  }

  protected async getJsonData(): Promise<{}[]> {
    try {
      const tableHeaders = await this.returneeService.getTableHeaders();
      const rowsData = await this.returneeService.getAllWards();
      return rowsData.map((item: RETTupleRev) => {
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
      const tableHeaders = await this.returneeService.getTableHeaders();
      const rowsData = await this.returneeService.getAllWards();

      const csvFileContent = [];
      // add header
      csvFileContent.push(
        tableHeaders
          .map(headerAndType => headerAndType[0])
          .slice(1, tableHeaders.length - 1)
          .join(','));

      // add rows
      rowsData.forEach((rowItem: RETTupleRev) => {
        csvFileContent.push(
          rowItem
            .slice(1, tableHeaders.length - 1)
            .join(','));
      });

      return csvFileContent.join('\n');
    } catch (error) {
      throw Error('Unable to fetch Returnee data');
    }
  }

  async getCsvDataFile() {
    const data = await this.getCsvData();
    const blob = new Blob([data], { type: 'text/csv' });

    const tempAnchor = document.createElement('a');
    tempAnchor.href = window.URL.createObjectURL(blob);
    tempAnchor.download = 'returnee-cov-data-hub.csv';
    document.body.appendChild(tempAnchor);
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
  }

  enableDBToTableSync(source: LocalDataSource) {
    super.enableDBToTableSyncTabular(source, this.returneeService);
  }

  prepareDoc(newRow: any, removeRev = false): PSchemaDoc {
    return super.prepareDocTabular(newRow, SCHEMA_VER, this.returneeService, removeRev);
  }

  saveTableRowChanges(oldRow: any, newRow: any) {
    super.saveTableRowChangesTabular(oldRow, newRow, SCHEMA_VER, this.returneeService);
  }

  saveTableRowAddition(newRow: any) {
    super.saveTableRowAdditionTabular(newRow, SCHEMA_VER, this.returneeService);
  }

  saveTableRowDeletion(deletedRow: any) {
    super.saveTableRowDeletionTabular(deletedRow, SCHEMA_VER, this.returneeService);
  }
}
