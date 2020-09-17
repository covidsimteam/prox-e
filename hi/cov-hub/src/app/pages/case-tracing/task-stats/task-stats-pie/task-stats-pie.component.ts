import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'cov-task-stats-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class TaskStatsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config: any) => {

      const colors = config?.variables;
      const echarts: any = config?.variables?.echarts;

      this.options = {
        backgroundColor: echarts?.bg,
        color: [
          colors?.warningLight,
          colors?.infoLight,
          colors?.dangerLight,
          colors?.successLight,
          colors?.primaryLight
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Pending', 'Complete'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Tasks',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: 4, name: 'Pending' },
              { value: 6, name: 'Complete' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
