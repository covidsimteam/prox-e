import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { CountryOrderData } from '../../../@core/data/country-order';

@Component({
  selector: 'cov-country-orders',
  styleUrls: ['./country-orders.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'giant'">
      <nb-card-header>Country Orders Statistics</nb-card-header>
      <nb-card-body>
        <cov-country-orders-map (select)="selectCountryById($event)"
                                countryId="USA">
        </cov-country-orders-map>
        <cov-country-orders-chart [countryName]="countryName"
                                  [data]="countryData"
                                  [labels]="countriesCategories"
                                  maxValue="20">
        </cov-country-orders-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class CountryOrdersComponent implements OnInit, OnDestroy {

  private alive = true;

  countryName = '';
  countryData: number[] = [];
  countriesCategories: string[];
  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private countryOrderService: CountryOrderData) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([_, newValue]) => {
        this.breakpoint = newValue;
      });
    this.countryOrderService.getCountriesCategories()
      .pipe(takeWhile(() => this.alive))
      .subscribe((countriesCategories) => {
        this.countriesCategories = countriesCategories;
      });
  }

  selectCountryById(countryName: string) {
    this.countryName = countryName;

    this.countryOrderService.getCountriesCategoriesData(countryName)
      .pipe(takeWhile(() => this.alive))
      .subscribe((countryData) => {
        this.countryData = countryData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
