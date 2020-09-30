import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { LedgerService } from '../../@hgraph/store/ledger/ledger.service';
import { FilesService } from './files.service';

@Component({
  selector: 'cov-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss'],
  providers: [FilesService]
})
export class FilesComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    protected ledger: LedgerService
  ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
