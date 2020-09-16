import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import { ActiveTasksInfo, ActiveTasksData } from '../data/active-tasks';

@Injectable()
export class ActiveTasksService extends ActiveTasksData {
    private activeTasksInfoData: ActiveTasksInfo[] = [
        {
            case: 'Ram Thapa',
            assignedTo: 'Dr. Hari Bahadur',
            time: '3 Hr.'
        },
        {
            case: 'Krishna Maharjan',
            assignedTo: 'Dr. Hari Bahadur',
            time: '2 Hr.'
        },
        {
            case: 'Bipin Sitaula',
            assignedTo: 'Dr. Nirmala KC',
            time: '1 Hr.'
        },
        {
            case: 'Jiwan Bista',
            assignedTo: 'Dr. Ram Krishna Dhakal',
            time: '6 Hr.'
        }
    ];

    getActiveTasksData(): BehaviorSubject<ActiveTasksInfo[]> {
        return new BehaviorSubject(this.activeTasksInfoData);
    }
}