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
exports.ConceptsComponent = void 0;
const core_1 = require("@angular/core");
const theme_1 = require("@nebular/theme");
let ConceptsComponent = class ConceptsComponent {
    constructor(
    // private simApi: GraphsService,
    // private visService: GraphService,
    windowService) {
        this.windowService = windowService;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.centerZoom();
    }
    ngOnDestroy() {
    }
    centerZoom() {
        this.centerGraph();
        this.zoomToFit();
    }
    nodeClicked(node) {
    }
    centerGraph() {
    }
    zoomToFit() {
    }
    showNodeEditor(coords, title) {
        const { top, left } = this.networkContainer.nativeElement.getBoundingClientRect();
        // this.editorCoords = {
        //   x: coords.x + left,
        //   y: coords.y + top
        // };
        // this.windowRef = this.windowService.open(EditorComponent, {
        //   title: `Edit ${title}`,
        //   context: { coords: this.editorCoords, title },
        //   viewContainerRef: this.networkContainer.nativeElement
        // });
        // this.windowRef.onClose.subscribe(_ => this.graphService.unselect());
    }
};
__decorate([
    core_1.ViewChild('networkContainer', { static: true }),
    __metadata("design:type", core_1.ElementRef)
], ConceptsComponent.prototype, "networkContainer", void 0);
ConceptsComponent = __decorate([
    core_1.Component({
        selector: 'ngx-concepts',
        templateUrl: './concepts.component.html',
        styleUrls: ['./concepts.component.scss']
    }),
    __metadata("design:paramtypes", [theme_1.NbWindowService])
], ConceptsComponent);
exports.ConceptsComponent = ConceptsComponent;
