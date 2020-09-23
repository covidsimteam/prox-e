import { Injectable } from '@angular/core';
import { NewCaseFormeta, makeNewCaseFormModel } from '../../pages/case-tracing/new-case/new-case.formeta';


@Injectable({
  providedIn: 'root'
})
export class ActiveTasksCacheService {
    private activeTasksCache: NewCaseFormeta;
    private tmpCacheStorage: NewCaseFormeta;
    private cacheActive: boolean;
    private emptyCache: NewCaseFormeta = makeNewCaseFormModel();

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

    writeToCache(activeTask: NewCaseFormeta): void {
        this.activeTasksCache = activeTask;
        this.cacheActive = true;
    }

    getFromCache(): NewCaseFormeta {
        this.tmpCacheStorage = this.activeTasksCache;
        this.resetCache();

        return this.tmpCacheStorage;
    }

    resetCache() {
        this.activeTasksCache = this.emptyCache;
        this.cacheActive = false;
    }
}
