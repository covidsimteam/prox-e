"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const tsoa_1 = require("tsoa");
const routes_1 = require("../build/routes");
const logger_1 = __importDefault(require("./logger"));
const cors_1 = __importDefault(require("cors"));
const logger = logger_1.default.child({ file: 'app' });
exports.app = express_1.default();
// Use body parser to read sent json payloads
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(body_parser_1.default.json());
// swagger API endpoint
exports.app.use("/docs", swagger_ui_express_1.default.serve, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send(swagger_ui_express_1.default.generateHTML(yield Promise.resolve().then(() => __importStar(require('../build/swagger.json')))));
}));
exports.app.disable('x-powered-by');
exports.app.use(cors_1.default());
routes_1.RegisterRoutes(exports.app);
// global error handling middleware
function errorHandler(err, req, res, next) {
    if (err instanceof tsoa_1.ValidateError) {
        logger.error(err.fields, `Validation Error for ${req.path}:`);
        return res.status(422).json({
            message: "Validation Failed",
            details: err === null || err === void 0 ? void 0 : err.fields,
        });
    }
    if (err instanceof Error) {
        logger.error(err, 'Instantiation error');
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
    next();
}
exports.app.use(errorHandler);
//for all unregistered routes
function notFoundHandler(_req, res) {
    res.status(404).send({
        message: "Not Found",
    });
}
exports.app.use(notFoundHandler);
//env key values
(() => {
    const config = dotenv_1.default.config();
    if (config.error) {
        logger.error(config.error, "Could not load .env variables");
        throw config.error;
    }
    // Object.entries(Env).forEach(([key, value]) => {
    //   app.set(key, process.env[value]);
    // })
})();
