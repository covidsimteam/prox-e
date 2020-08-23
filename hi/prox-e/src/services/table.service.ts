import storage from 'azure-storage';
import guid from 'node-uuid';
import { Entity } from 'src/models/entity.model';
import motherLogger from '../logger';
import { ProxyQService } from './q.service';

export class ProxyTableService extends ProxyQService {
    protected readonly tablelogger = motherLogger.child({ file: 'TableService' });

    private defaultTable: string = guid.v1().replace(/-/g, '');

    // private entityGenerator = storage.TableUtilities.entityGenerator;
    private storageClient = storage.createTableService(this.STORAGE_CONNECTION_STRING);

    private static proxyTableServiceInstance: ProxyTableService;

    constructor() {
        super();
        if (!ProxyTableService.proxyTableServiceInstance) {
            ProxyTableService.proxyTableServiceInstance = this;
        }
        return ProxyTableService.proxyTableServiceInstance;
    }

    createTableIfNotExists(table: string = '', callback: (error: any) => any): any {
        if (!table || !table.length) table = table + ':' + this.defaultTable;
        const loggr = this.tablelogger;
        return this.storageClient.createTableIfNotExists(table,
            (error: any, createResult: any) => {
                if (error) return callback(error);
                if (createResult.isSuccessful) {
                    loggr.trace("Create Table operation executed successfully for: ", table);
                }
            });
    }

    insertToTable(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.storageClient
            .insertOrMergeEntity(table, entity,
                (error: any, result: any, response: any) => {
                    if (error) return callback(error);
                    return [result, response];
                })
    }

    getFromTable(entity: Entity, table: string, callback: (error: any) => any): any {
        return this.storageClient
            .retrieveEntity(table, entity._id, entity.type,
                (error: any, result: any, response: any) => {
                    if (error) return callback(error);
                    return [result, response];
                })
    }
}
