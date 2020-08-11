"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const rxjs_1 = require("rxjs");
const core_1 = require("@angular/core");
const users_1 = require("../data/users");
let UserService = class UserService extends users_1.UserData {
    constructor() {
        super(...arguments);
        this.time = new Date;
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        this.contacts = [
            { user: this.users.nick, type: this.types.mobile },
            { user: this.users.eva, type: this.types.home },
            { user: this.users.jack, type: this.types.mobile },
            { user: this.users.lee, type: this.types.mobile },
            { user: this.users.alan, type: this.types.home },
            { user: this.users.kate, type: this.types.work },
        ];
        this.recentUsers = [
            { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12) },
            { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45) },
            { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29) },
            { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42) },
            { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31) },
            { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0) },
        ];
    }
    getUsers() {
        return rxjs_1.of(this.users);
    }
    getContacts() {
        return rxjs_1.of(this.contacts);
    }
    getRecentUsers() {
        return rxjs_1.of(this.recentUsers);
    }
};
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
