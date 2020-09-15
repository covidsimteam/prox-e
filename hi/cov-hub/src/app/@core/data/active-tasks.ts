import { Observable } from 'rxjs';

export interface ActiveTasksInfo {
    case: string;
    assignedTo: string;
    time: string;
}

export abstract class ActiveTasksData {
    abstract getActiveTasksData(): Observable<ActiveTasksInfo[]>;
}