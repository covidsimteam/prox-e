"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logger_1 = __importDefault(require("./logger"));
const logger = logger_1.default.child({ file: 'server' });
const port = process.env.PORT || 8081;
app_1.app.listen(port, () => logger.info({ url: `http://localhost:${port}`, user: `${process.env.DATABASE_USER}` }, 'Proxy server started'));
