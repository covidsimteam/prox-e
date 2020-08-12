import { Component, OnDestroy, Input } from '@angular/core';
import { StatsBarData } from '../../../../@core/data/stats-bar';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-card-back',
  styleUrls: ['./test-stats-card-back.component.scss'],
  templateUrl: './test-stats-card-back.component.html',
})
export class TestStatsCardBackComponent implements OnDestroy {

  private alive = true;
  @Input() testName: string;
  chartData: number[];

  constructor(private statsBarData: StatsBarData) {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
