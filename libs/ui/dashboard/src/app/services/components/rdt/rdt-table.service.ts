import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { from, Observable } from 'rxjs';
import { SCHEMA_VER } from '../../../@core/data/pschema:rdts:v8';

import { RdtService } from '../../db/rdt.service';
import { TabularService } from '../tabular/tabular.service';
import { RDTTupleRev } from '../../../models/db/table-headers.model';
import { PSchemaDoc } from '../../../models/db/schema/pschema.model';

@Injectable({
  providedIn: 'root',
})
export class RdtTableService extends TabularService {

  constructor(private rdtService: RdtService) {
    super();
  }

  protected getTableHeaders(): Observable<string[][]> {
    return from(this.rdtService.getTableHeaders());
  }

  protected async getJsonData(): Promise<{}[]> {
    try {
      const tableHeaders = await this.rdtService.getTableHeaders();
      const rowsData = await this.rdtService.getAllDistricts();
      return rowsData.map((item: RDTTupleRev) => {
        const columnObj = {};
        tableHeaders.forEach((header, index) => {
          columnObj[header[0]] = item[index];
        });
        return columnObj;
      });
    } catch (error) {
      throw Error('Unable to fetch RDT tests data');
    }
  }

  protected async getCsvData(): Promise<string> {
    try {
      const tableHeaders = await this.rdtService.getTableHeaders();
      const rowsData = await this.rdtService.getAllDistricts();

      const csvFileContent = [];
      // add header
      csvFileContent.push(
        tableHeaders
          .map(headerAndType => headerAndType[0])
          .slice(1, tableHeaders.length - 1)
          .join(','));

      // add rows
      rowsData.forEach((rowItem: RDTTupleRev) => {
        csvFileContent.push(
          rowItem
            .slice(1, tableHeaders.length - 1)
            .join(','));
      });

      return csvFileContent.join('\n');
    } catch (error) {
      throw Error('Unable to fetch RDT tests data');
    }
  }

  async getCsvDataFile() {
    const data = await this.getCsvData();
    const blob = new Blob([data], { type: 'text/csv' });

    const tempAnchor = document.createElement('a');
    tempAnchor.href = window.URL.createObjectURL(blob);
    tempAnchor.download = 'rdt-test-cov-data-hub.csv';
    document.body.appendChild(tempAnchor);
    tempAnchor.click();
    document.body.removeChild(tempAnchor);
  }


  enableDBToTableSync(source: LocalDataSource) {
    super.enableDBToTableSyncTabular(source, this.rdtService);
  }

  prepareDoc(newRow: any, removeRev = false): PSchemaDoc {
    return super.prepareDocTabular(newRow, SCHEMA_VER, this.rdtService, removeRev);
  }

  saveTableRowChanges(oldRow: any, newRow: any) {
    super.saveTableRowChangesTabular(oldRow, newRow, SCHEMA_VER, this.rdtService);
  }

  saveTableRowAddition(newRow: any) {
    super.saveTableRowAdditionTabular(newRow, SCHEMA_VER, this.rdtService);
  }

  saveTableRowDeletion(deletedRow: any) {
    super.saveTableRowDeletionTabular(deletedRow, SCHEMA_VER, this.rdtService);
  }
}
