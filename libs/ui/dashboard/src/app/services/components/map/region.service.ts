import { Injectable } from '@angular/core';
import { from, Observable, ObservableInput } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Area, FeatureCollection, WardProperties } from '../../../models/domain.model';
import { SpatialService } from '../../db/spatial.service';
import { Census2011 } from '../../../models/db/docs/census.model';
import { HealthStats } from '../../../models/db/docs/health-stats.model';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(
    private spatialService: SpatialService,
  ) {}

  getAndCache<T>(key: string): Observable<T> {
    return from<ObservableInput<T>>(this.spatialService.get(key)).pipe(tap(async (res) => {
        try {
          await this.spatialService.instance().get(res['_id']);
        } catch (error) {
          delete res['_rev'];
          await this.spatialService.instance().put(res);
        }
      }),
    );
  }

  getCacheDistrictWiseCensus(): Observable<Census2011.Districts> {
    return this.getAndCache<Census2011.Districts>('district_stats_2011');
  }

  getCacheDistrictHealthStats(): Observable<HealthStats.Districts> {
    return this.getAndCache<HealthStats.Districts>('district_health_stats');
  }

  getCacheAreaWards(area: string): Observable<FeatureCollection<WardProperties>> {
    return this.getAndCache<FeatureCollection<WardProperties>>(`wards_${area}`);
  }

  getCacheAreaStats(area: string): Observable<Area.Stats> {
    return this.getAndCache<Area.Stats>(`${area}_stats`);
  }
}
