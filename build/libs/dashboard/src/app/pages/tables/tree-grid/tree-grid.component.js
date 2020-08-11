"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsIconComponent = exports.TreeGridComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let TreeGridComponent = class TreeGridComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.sortDirection = theme_1.NbSortDirection.NONE;
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    { data: { name: 'project-3', kind: 'txt', size: '466 KB' } },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    { data: { name: 'Report 1', kind: 'doc', size: '100 KB' } },
                    { data: { name: 'Report 2', kind: 'doc', size: '300 KB' } },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.dataSource = this.dataSourceBuilder.create(this.data);
    }
    updateSort(sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }
    getSortDirection(column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return theme_1.NbSortDirection.NONE;
    }
    getShowOn(index) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }
};
TreeGridComponent = __decorate([
    core_1.Component({
        selector: 'ngx-tree-grid',
        templateUrl: './tree-grid.component.html',
        styleUrls: ['./tree-grid.component.scss'],
    }),
    __metadata("design:paramtypes", [theme_1.NbTreeGridDataSourceBuilder])
], TreeGridComponent);
exports.TreeGridComponent = TreeGridComponent;
let FsIconComponent = class FsIconComponent {
    isDir() {
        return this.kind === 'dir';
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FsIconComponent.prototype, "kind", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FsIconComponent.prototype, "expanded", void 0);
FsIconComponent = __decorate([
    core_1.Component({
        selector: 'ngx-fs-icon',
        template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
    })
], FsIconComponent);
exports.FsIconComponent = FsIconComponent;
