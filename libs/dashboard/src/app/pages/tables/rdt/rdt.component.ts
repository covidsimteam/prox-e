import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { settings } from '../../../models/tabular/settings.values';
import { RdtTableService } from '../../../services/components/rdt/rdt-table.service';
import { RdtService } from '../../../services/db/rdt.service';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import {
  CSV_UPLOAD_INSTR,
  CSV_UPLOAD_INSTR_ERR,
  CSV_UPLOAD_CONFIRM,
} from '../../../@core/data/messages';

@Component({
  selector: 'ngx-rdt',
  templateUrl: './rdt.component.html',
  styleUrls: ['./rdt.component.scss'],
})
export class RdtComponent implements OnInit {
  columns: {};
  settingsAndColumns = settings;

  isFileLoaded = false;
  uploadInstruction = CSV_UPLOAD_INSTR;

  source: LocalDataSource = new LocalDataSource();

  rowsFromCsvFile: {}[] = [];
  rowsReplacedByCsvFile: {}[] = [];

  @ViewChild('fileImportInput') fileImportInput: ElementRef;

  constructor(
    private rdtTableService: RdtTableService,
    private rdtService: RdtService,
    private ngxCsvParser: NgxCsvParser
  ) {}

  ngOnInit() {
    this.initializeHeadersAndSettings();

    // table contents init
    this.rdtTableService.getRows().subscribe((rows) => {
      this.source.load(rows);
    });

    this.rdtTableService.enableDBToTableSync(this.source);
  }

  private initializeHeadersAndSettings() {
    this.rdtTableService.getColumns().subscribe((cols) => {
      this.columns = cols;
      const colsWithoutIdRev = { ...cols };
      delete colsWithoutIdRev['_id'];
      delete colsWithoutIdRev['_rev'];
      if (cols['province']) {
        cols['province']['editor'] = cols['province'][
          'filter'
        ] = this.rdtTableService.prepareProvinceDropdown();
      }
      this.settingsAndColumns = {
        ...this.settingsAndColumns,
        columns: colsWithoutIdRev,
      };
    });
  }

  csvUploadListener(event: any) {
    const files = event.srcElement.files;
    this.isFileLoaded = files ? true : false;
    this.ngxCsvParser
      .parse(files[0], { header: false, delimiter: ',' })
      .subscribe(
        (result: Array<any>) => {
          this.rowsFromCsvFile = result
            .slice(1)
            .filter((rowData) => {
              // -2 since db headers contain _id and _rev fields as well
              const headerLengthMatches =
                rowData.length === this.rdtService.headers.length - 2;
              if (!headerLengthMatches) {
                this.resetFileUploader();
                this.uploadInstruction = CSV_UPLOAD_INSTR_ERR;
              }
              const isNotEmptyRow =
                rowData
                  .map((column: string) => column.length)
                  .reduce(
                    (total: number, colLength: number) => total + colLength
                  ) !== 0;
              return headerLengthMatches && isNotEmptyRow;
            })
            .map((rowData) => {
              const rowObj = {};
              this.uploadInstruction = CSV_UPLOAD_CONFIRM;
              this.rdtService.headers.forEach((header, index) => {
                rowObj[header[0]] =
                  index !== 0
                    ? this.rdtTableService.xTrim(rowData[index - 1])
                    : this.rdtTableService.prepareDocID(rowData[0], rowData[1]);
              });
              this.csvRowAndExistingRowMerger(rowObj);
              return rowObj;
            });
        },
        (_: NgxCSVParserError | Error) => {
          window.alert(
            'Your CSV file could not be parsed, please upload a valid file'
          );
        }
      );
  }

  csvRowAndExistingRowMerger(rowObj: {}) {
    this.source.getAll().then((elements: []) => {
      const rowsToDelete = elements.filter(
        (row) =>
          row['_id'] === rowObj['_id'] ||
          this.rdtTableService.prepareDocID(
            row['province'],
            row['district']
          ) === rowObj['_id']
      );
      this.rowsReplacedByCsvFile = [
        ...this.rowsReplacedByCsvFile,
        ...rowsToDelete,
      ];
      rowsToDelete.forEach((rowToDelete) => this.source.remove(rowToDelete));
      this.source.prepend(rowObj);
    });
  }

  private resetFileUploader() {
    this.fileImportInput.nativeElement.value = '';
    this.isFileLoaded = false;
  }

  resetHandler($event: any) {
    $event.preventDefault();
    this.resetFileUploader();
    this.uploadInstruction = CSV_UPLOAD_INSTR;
    this.rowsFromCsvFile.forEach((row) => this.source.remove(row));
    this.rowsReplacedByCsvFile.forEach((row) => this.source.prepend(row));
  }

  uploadDownloadHandler($event: any) {
    $event.preventDefault();
    this.uploadInstruction = CSV_UPLOAD_INSTR;
    try {
      if (!this.isFileLoaded) {
        this.rdtTableService.getCsvDataFile();
        return;
      }
      this.rdtService.addAll(
        this.rowsFromCsvFile.map((row) => this.rdtTableService.prepareDoc(row))
      );
      this.isFileLoaded = false;
      this.fileImportInput.nativeElement.value = '';
    } catch (error) {
      // TODO report the docs that failed to insert as a list under the file upload card
    }
  }

  onAddConfirm(event: any) {
    try {
      this.rdtTableService.saveTableRowAddition(event.newData);
      event.confirm.resolve();
    } catch (error) {
      event.confirm.reject();
    }
  }

  onEditConfirm(event: any) {
    try {
      this.rdtTableService.saveTableRowChanges(event.data, event.newData);
      event.confirm.resolve();
    } catch (error) {
      event.confirm.reject();
    }
  }

  // Potential use for floating map component showing district preview
  // (userRowSelect)="onUserRowSelect($event)"
  // onUserRowSelect(event: any) {
  // }

  onDeleteConfirm(event: any): void {
    if (window.confirm('Confirm RDT test record deletion:')) {
      this.rdtTableService.saveTableRowDeletion(event.data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
