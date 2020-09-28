import { Component } from '@angular/core';

import { AllCommunityModules, GridOptions, Module } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-material.css';

import { MatFormCheckboxComponent } from '../mat-checkbox/mat-checkbox.component';
import { MatFormInputComponent } from '../mat-input/mat-input.component';
import { MatFormRadioComponent } from '../mat-radio/mat-radio.component';
import { MatFormSelectComponent } from '../mat-select/mat-select.component';



@Component({
  selector: 'cov-form-mat-editor',
  templateUrl: './mat-editor.component.html',
  styleUrls: ['./mat-editor.component.scss']
})
export class MatFormEditorComponent {

  public gridOptions: GridOptions;
  modules: Module[] = AllCommunityModules;

  constructor() {
      this.gridOptions = <GridOptions>{
          rowData: this.createRowData(),
          columnDefs: this.createColumnDefs(),
          onGridReady: () => {
              this.gridOptions.api.sizeColumnsToFit();
          },
          rowHeight: 48, // recommended row height for material design data grids,
          frameworkComponents: {
              checkboxRenderer: MatFormCheckboxComponent,
              inputRenderer: MatFormInputComponent,
              radioEditor: MatFormRadioComponent,
              selectEditor: MatFormSelectComponent
          }
      };
  }

  private createColumnDefs() {
      return [
          {
              headerName: 'Checkbox (inline editing)',
              field: 'on_off',
              cellRenderer: 'checkboxRenderer'
          },
          {
              headerName: 'Full Name (popup input editor)',
              field: 'full_name',
              cellEditor: 'inputRenderer',
              editable: true,
              sortable: true,
              filter: true
          },
          {
              headerName: 'Fruit (popup radio editor)',
              field: 'fruit',
              cellEditor: 'radioEditor',
              cellEditorParams: {
                  fruits: ['Apple', 'Orange', 'Banana']
              },
              editable: true,
              sortable: true,
              filter: true,

          },
          {
              headerName: 'Vegetables (popup select editor)',
              field: 'vegetable',
              cellEditor: 'selectEditor',
              cellEditorParams: {
                  vegetables: ['Carrot', 'Broccoli', 'Potato']
              },
              editable: true,
              sortable: true,
              filter: true,
          }
      ];
  }

  private createRowData() {
      return [
          {
              full_name: 'Sean Landsman',
              fruit: 'Apple',
              on_off: 'On',
              vegetable: 'Carrot',
              percentage: 5
          },
          {
              full_name: 'Niall Crosby',
              fruit: 'Apple',
              on_off: 'On',
              vegetable: 'Potato',
              percentage: 35
          },
          {
              full_name: 'Alberto Guiterzzz',
              fruit: 'Orange',
              on_off: 'Off',
              vegetable: 'Broccoli',
              percentage: 78
          },
          {
              full_name: 'John Masterson',
              fruit: 'Banana',
              on_off: 'On',
              vegetable: 'Potato',
              percentage: 98
          }
      ];
  }
}
