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
exports.NewsService = exports.NewsPost = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const operators_1 = require("rxjs/operators");
const TOTAL_PAGES = 7;
class NewsPost {
}
exports.NewsPost = NewsPost;
let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
    }
    load(page, pageSize) {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        return this.http
            .get('assets/data/news.json')
            .pipe(operators_1.map(news => news.splice(startIndex, pageSize)), operators_1.delay(1500));
    }
};
NewsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], NewsService);
exports.NewsService = NewsService;
