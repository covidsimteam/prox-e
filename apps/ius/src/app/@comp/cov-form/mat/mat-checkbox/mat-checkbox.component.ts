import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'cov-form-mat-checkbox',
  templateUrl: './mat-checkbox.component.html',
  styleUrls: ['./mat-checkbox.component.scss']
})
export class MatFormCheckboxComponent implements ICellRendererAngularComp {

  private params: any;

  checked: boolean = false;

  agInit(params: any): void {
      this.params = params;
      this.checked = this.params.value === 'On';
  }

  // demonstrates how you can do "inline" editing of a cell
  onChange(checked: boolean) {
      this.checked = checked;
      this.params.node.setDataValue(this.params.colDef, this.checked ? 'On' : 'Off');

      if (this.params.eGridCell) {
          this.params.eGridCell.focus();
      }
  }

  refresh(params: any): boolean {
      return false;
  }
}
