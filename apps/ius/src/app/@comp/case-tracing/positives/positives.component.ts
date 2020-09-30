import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewCaseComponent } from '../new-case/new-case.component';
import { TranslationServiceEn } from '../../../services/i18n/translation-gen.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cov-positives',
  templateUrl: './positives.component.html',
  styleUrls: ['./positives.component.scss']
})
export class PositivesComponent implements AfterViewInit {

  displayedColumns: string[] = ['expando', 'case', 'institution', 'phone', 'address', 'investigator'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private t: TranslationServiceEn,
    private translationService: TranslateService
  ) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showNewCaseWindow() {
    const dialogRef = this.dialog.open(NewCaseComponent,
      {
        width: '60vw',
        data: {
          title: this.translationService.get(this.t.fb.addNewCase),
          newId: '12321'
        }
      }
    );
    dialogRef.afterClosed().subscribe((result: any) => {
      // console.log(`Dialog result: ${result}`);
    });
  }



  showSettingsWindow() {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  expanded: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', expanded: false},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', expanded: false},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', expanded: false},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', expanded: false},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', expanded: false},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', expanded: false},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', expanded: false},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', expanded: false},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', expanded: false},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', expanded: false},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', expanded: false},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', expanded: false},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', expanded: false},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', expanded: false},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', expanded: false},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', expanded: false},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', expanded: false},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', expanded: false},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', expanded: false},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', expanded: false},
];
