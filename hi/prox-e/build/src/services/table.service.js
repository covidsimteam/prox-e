"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyTableService = void 0;
const azure_storage_1 = __importDefault(require("azure-storage"));
const node_uuid_1 = __importDefault(require("node-uuid"));
const logger_1 = __importDefault(require("../logger"));
const q_service_1 = require("./q.service");
class ProxyTableService extends q_service_1.ProxyQService {
    constructor() {
        super();
        this.tablelogger = logger_1.default.child({ file: 'TableService' });
        this.defaultTable = node_uuid_1.default.v1().replace(/-/g, '');
        // private entityGenerator = storage.TableUtilities.entityGenerator;
        this.storageClient = azure_storage_1.default.createTableService(this.STORAGE_CONNECTION_STRING);
        if (!ProxyTableService.proxyTableServiceInstance) {
            ProxyTableService.proxyTableServiceInstance = this;
        }
        return ProxyTableService.proxyTableServiceInstance;
    }
    createTableIfNotExists(table = '', callback) {
        if (!table || !table.length)
            table = table + ':' + this.defaultTable;
        const loggr = this.tablelogger;
        return this.storageClient.createTableIfNotExists(table, (error, createResult) => {
            if (error)
                return callback(error);
            if (createResult.isSuccessful) {
                loggr.trace("Create Table operation executed successfully for: ", table);
            }
        });
    }
    insertToTable(entity, table, callback) {
        return this.storageClient
            .insertOrMergeEntity(table, entity, (error, result, response) => {
            if (error)
                return callback(error);
            return [result, response];
        });
    }
    getFromTable(entity, table, callback) {
        return this.storageClient
            .retrieveEntity(table, entity._id, entity.type, (error, result, response) => {
            if (error)
                return callback(error);
            return [result, response];
        });
    }
}
exports.ProxyTableService = ProxyTableService;
