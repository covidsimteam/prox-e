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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedController = exports.SchedOption = exports.ProxyScheduleService = void 0;
const tsoa_1 = require("tsoa");
const table_service_1 = require("../services/table.service");
class ProxyScheduleService {
    constructor() {
        if (!ProxyScheduleService.proxyScheduleServiceInstance) {
            ProxyScheduleService.proxyScheduleServiceInstance = this;
        }
        this.proxyTableService = new table_service_1.ProxyTableService();
        return ProxyScheduleService.proxyScheduleServiceInstance;
    }
    createScheduleIfNotExists(table = '', callback) {
        return this.proxyTableService.createTableIfNotExists(table, callback);
    }
    insertToSchedule(entity, table, callback) {
        return this.proxyTableService.insertToTable(entity, table, callback);
    }
    getFromSchedule(entity, table, callback) {
        return this.proxyTableService.getFromTable(entity, table, callback);
    }
}
exports.ProxyScheduleService = ProxyScheduleService;
var SchedOption;
(function (SchedOption) {
    SchedOption[SchedOption["createSched"] = 0] = "createSched";
    SchedOption[SchedOption["addToSched"] = 1] = "addToSched";
    SchedOption[SchedOption["getFromSched"] = 2] = "getFromSched";
    SchedOption[SchedOption["removeFromSched"] = -1] = "removeFromSched";
})(SchedOption = exports.SchedOption || (exports.SchedOption = {}));
let SchedController = class SchedController extends tsoa_1.Controller {
    constructor() {
        super();
        this.sched = new ProxyScheduleService();
    }
    async createDir(payload) {
        return this.action(SchedOption.createSched, payload);
    }
    async upload(payload) {
        return this.action(SchedOption.addToSched, payload);
    }
    async receive(payload) {
        return this.action(SchedOption.getFromSched, payload);
    }
    action(option, payload) {
        switch (+option) {
            case SchedOption.addToSched:
                return this.sched.insertToSchedule(payload.entity, payload.table, () => null);
            case SchedOption.getFromSched:
                return this.sched.getFromSchedule(payload.entity, payload.table, () => null);
            case SchedOption.createSched:
            default:
                return this.sched.createScheduleIfNotExists(payload.table, () => null);
        }
    }
};
__decorate([
    tsoa_1.Tags('schedule'),
    tsoa_1.Post('create'),
    tsoa_1.Response(401, "Schedule creation failed"),
    tsoa_1.Response(201, "Schedule creation succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchedController.prototype, "createDir", null);
__decorate([
    tsoa_1.Tags('schedule'),
    tsoa_1.Post('add'),
    tsoa_1.Response(401, "Schedule add failed"),
    tsoa_1.Response(201, "Schedule add succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchedController.prototype, "upload", null);
__decorate([
    tsoa_1.Tags('schedule'),
    tsoa_1.Post('receive'),
    tsoa_1.Response(401, "Schedule add failed"),
    tsoa_1.Response(201, "Schedule add succeeded"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchedController.prototype, "receive", null);
SchedController = __decorate([
    tsoa_1.Route('schedule'),
    __metadata("design:paramtypes", [])
], SchedController);
exports.SchedController = SchedController;
