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
exports.InfiniteListComponent = void 0;
const core_1 = require("@angular/core");
const news_service_1 = require("../news.service");
let InfiniteListComponent = class InfiniteListComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.firstCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.secondCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.pageSize = 10;
    }
    loadNext(cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(nextNews => {
            cardData.placeholders = [];
            cardData.news.push(...nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
        });
    }
};
InfiniteListComponent = __decorate([
    core_1.Component({
        selector: 'ngx-infinite-list',
        templateUrl: 'infinite-list.component.html',
        styleUrls: ['infinite-list.component.scss'],
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], InfiniteListComponent);
exports.InfiniteListComponent = InfiniteListComponent;
