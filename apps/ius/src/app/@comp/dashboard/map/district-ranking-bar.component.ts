import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BarChartDataSet } from '../../../@models/domain.model';

@Component({
  selector: 'cov-district-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class DistrictRankingComponent implements OnInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  @Input() dataSets: BarChartDataSet[];
  @Input() labels: string[];

  constructor(private theme: NbThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const chartjs: any = config?.variables?.chartjs || null;

      const labels = this.labels;
      const datasets = this.dataSets;

      this.data = {
        labels,
        datasets,
      };

      this.options = {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
