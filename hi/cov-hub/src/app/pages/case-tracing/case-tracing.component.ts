import { Component } from '@angular/core';

@Component({
    selector: 'cov-case-tracing',
    styleUrls: ['case-tracing.component.scss'],
    template: `
    <div class="row">
        <div class="col-sm-12">
            <cov-active-tasks></cov-active-tasks>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12">
            <cov-contact-tracing></cov-contact-tracing>
        </div>
    </div>
    `
})
export class CaseTracingComponent {

}
