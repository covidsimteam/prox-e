import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'cov-horizontal-numbers',
  templateUrl: './horizontal-numbers.component.html',
  styleUrls: ['./horizontal-numbers.component.scss']
})
export class HorizontalNumbersComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config: any) => {

      const colors: any = config?.variables;
      const chartjs: any = config?.variables?.chartjs;

      this.data = {
        labels: ['Contacts', 'B1 Forms', 'B2 Forms', 'Swabs', '+ve Contacts'],
        datasets: [
          {
            label: 'Current',
            backgroundColor: colors.infoLight,
            borderWidth: 1,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          },
          {
            label: 'Queued',
            backgroundColor: colors.warning,
            borderWidth: 1,
            data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          }
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        scales: {
          xAxes: [
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
          yAxes: [
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
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
