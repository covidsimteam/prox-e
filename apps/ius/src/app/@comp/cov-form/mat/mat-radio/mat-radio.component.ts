import { ICellEditorAngularComp } from '@ag-grid-community/angular';
import { AfterViewInit, Component, ViewChildren } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'cov-form-mat-radio',
  templateUrl: './mat-radio.component.html',
  styleUrls: ['./mat-radio.component.scss']
})
export class MatFormRadioComponent implements ICellEditorAngularComp, AfterViewInit {

  private params: any;
  private selectedIndex: number;

  fruits: string[];

  @ViewChildren(MatRadioButton) public fruitRadios: any;

  agInit(params: any): void {
    this.params = params;

    this.fruits = this.params.fruits;

    this.selectedIndex = this.fruits.findIndex(item => {
      return item === this.params.value;
    });
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {

  }

  isPopup(): boolean {
    return true;
  }

  /*
   * A little over complicated for what it is, but the idea is to illustrate how you might navigate through the radio
   * buttons with up & down keys (instead of finishing editing)
   */
  onKeyDown(event: any): void {
    const key = event.which || event.keyCode;
    if (key === 38 || key === 40) {
      this.preventDefaultAndPropagation(event);

      if (key === 38) {
        // up
        this.selectedIndex = this.selectedIndex === 0 ? this.fruits.length - 1 : this.selectedIndex - 1;
      } else if (key === 40) {
        // down
        this.selectedIndex = this.selectedIndex === this.fruits.length - 1 ? 0 : this.selectedIndex + 1;
      }
    }
  }

  getValue() {
    return 'valoo';
  }
  // getPopupPosition?(): string {
  //   throw new Error('Method not implemented.');
  // }
  // isCancelBeforeStart?(): boolean {
  //   throw new Error('Method not implemented.');
  // }
  // isCancelAfterEnd?(): boolean {
  //   throw new Error('Method not implemented.');
  // }
  // focusIn?(): void {
  //   throw new Error('Method not implemented.');
  // }
  // focusOut?(): void {
  //   throw new Error('Method not implemented.');
  // }
  // getFrameworkComponentInstance?() {
  //   throw new Error('Method not implemented.');
  // }
  // afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  //   throw new Error('Method not implemented.');
  // }

  private preventDefaultAndPropagation(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
