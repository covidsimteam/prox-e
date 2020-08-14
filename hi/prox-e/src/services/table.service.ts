import motherLogger from '../logger';
import { QService } from './q.service';
import storage from 'azure-storage';
import guid from 'node-uuid';
import { Entity } from 'src/models/entity.model';

export class TableService extends QService { 
    protected readonly logger = motherLogger.child({ file: 'TableService' });

    private defaultTable: string = guid.v1().replace(/-/g, '');
    
    // private entityGenerator = storage.TableUtilities.entityGenerator;
    private storageClient = storage.createTableService(this.STORAGE_CONNECTION_STRING);
    
    constructor() { super(); }
    
    createTableIfNotExists(table: string = '', callback: (error: any) => any): any {     
        if (!table || !table.length) table = table + ':' + this.defaultTable; 
        const loggr = this.logger;
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
