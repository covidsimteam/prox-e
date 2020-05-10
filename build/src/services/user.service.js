"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersService {
    get(_id, name) {
        return {
            username: name || 'tester',
            password: "test",
        };
    }
    create(user) {
        return {
            username: user.username,
            password: user.password
        };
    }
}
exports.UsersService = UsersService;
