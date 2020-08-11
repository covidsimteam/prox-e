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
exports.TinyMCEComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let TinyMCEComponent = class TinyMCEComponent {
    constructor(host, locationStrategy) {
        this.host = host;
        this.locationStrategy = locationStrategy;
        this.editorKeyup = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
            setup: (editor) => {
                this.editor = editor;
                editor.on('keyup', () => {
                    this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TinyMCEComponent.prototype, "editorKeyup", void 0);
TinyMCEComponent = __decorate([
    core_1.Component({
        selector: 'ngx-tiny-mce',
        template: '',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        common_1.LocationStrategy])
], TinyMCEComponent);
exports.TinyMCEComponent = TinyMCEComponent;
