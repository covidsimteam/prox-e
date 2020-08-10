import { Component, Input } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-card-front',
  styleUrls: ['./test-stats-card-front.component.scss'],
  templateUrl: './test-stats-card-front.component.html',
})
export class TestStatsCardFrontComponent {

  private alive = true;
  @Input() testName: string;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}
