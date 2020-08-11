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
exports.StateService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const theme_1 = require("@nebular/theme");
let StateService = class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs_1.BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new rxjs_1.BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(operators_1.takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === theme_1.NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return rxjs_1.of(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return rxjs_1.of(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
};
StateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [theme_1.NbLayoutDirectionService])
], StateService);
exports.StateService = StateService;
