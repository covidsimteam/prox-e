import { Component } from '@angular/core';

@Component({
    selector: 'cov-case-tracing',
    template: `
    <div class="row">
        <div class="col-md-12">
            <cov-case-banner></cov-case-banner>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <cov-active-tasks></cov-active-tasks>
        </div>
        <div class="col-md-6">
            <cov-task-stats></cov-task-stats>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <cov-contact-tracing></cov-contact-tracing>
        </div>
    </div>
    `
})
export class CaseTracingComponent {
    
}