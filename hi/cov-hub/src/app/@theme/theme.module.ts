import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbPopoverModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbToggleModule,
  NbUserModule
} from '@nebular/theme';
import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent
} from './components';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
} from './layouts';
import {
  CapitalizePipe,
  NumberWithCommasPipe,
  PluralPipe,
  RoundPipe,
  TimingPipe
} from './pipes';
import { MeasureConverterPipe } from './pipes/measure-converter.pipe';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { DARK_THEME } from './styles/theme.dark';
import { DEFAULT_THEME } from './styles/theme.default';
import { MATERIAL_LIGHT_THEME } from './styles/material/theme.material-light';
import { MATERIAL_DARK_THEME } from './styles/material/theme.material-dark';
import { MenuItemsComponent } from './components/header/menu-items/menu-items.component';
import { NbCardModule } from '@nebular/theme';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbToggleModule,
  NbPopoverModule,
  NbCardModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  MeasureConverterPipe
];

@NgModule({
  imports: [
    CommonModule,
    MatRippleModule,
    NbContextMenuModule,
    ...NB_MODULES
  ],
  exports: [CommonModule, MatRippleModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES, MenuItemsComponent],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        // tslint:disable-next-line: no-non-null-assertion
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [
            DEFAULT_THEME,
            COSMIC_THEME,
            CORPORATE_THEME,
            DARK_THEME,
            MATERIAL_LIGHT_THEME,
            MATERIAL_DARK_THEME
          ],
          ).providers!,
        ],
      };
    }
  }
