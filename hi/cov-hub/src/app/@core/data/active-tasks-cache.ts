import { Injectable } from '@angular/core';
import { ActiveTasksInfo } from '../data/active-tasks';

@Injectable()
export class ActiveTasksCacheService {
    private activeTasksCache: ActiveTasksInfo;
    private tmpCacheStorage: ActiveTasksInfo;
    private cacheActive: boolean;
    private emptyCache: ActiveTasksInfo = {
        date: null,
        lab: '',
        case: '',
        phone: null,
        province: '',
        district: '',
        municipal: '',
        ward: null,
        assignedTo: '',
        time: ''
    };

    private testMsg: string;

    constructor() {
        this.activeTasksCache = this.emptyCache;
        this.cacheActive = false;
    }

    initCache(): ActiveTasksCacheService {
        this.activeTasksCache = this.emptyCache;
        this.cacheActive = false;
        return this;
    }

    isCacheActive(): boolean { return this.cacheActive; }

    writeToCache(activeTask: ActiveTasksInfo): void {
        this.activeTasksCache = activeTask;
        this.cacheActive = true;
    }

    getFromCache(): ActiveTasksInfo {
        this.tmpCacheStorage = this.activeTasksCache;
        this.resetCache();

        return this.tmpCacheStorage;
    }

    resetCache() {
        this.activeTasksCache = this.emptyCache;
        this.cacheActive = false;
    }
}

