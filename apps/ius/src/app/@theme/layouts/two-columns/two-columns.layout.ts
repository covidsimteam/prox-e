import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'cov-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <cov-header></cov-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column>
        <template [ngTemplateOutlet]="templateVariable"></template>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <cov-footer></cov-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent {

  @Input() templateVarMeta: TemplateRef<unknown>;
  @ContentChild(TemplateRef) templateVariable: TemplateRef<any>;

  constructor() {
    this.templateVariable = this.templateVarMeta;
  }

}
