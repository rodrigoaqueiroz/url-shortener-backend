"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const MongoConnection_1 = require("./database/MongoConnection");
const cors_1 = __importDefault(require("cors"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLController_1.URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(5000, () => console.log('Express listening'));
//# sourceMappingURL=index.js.map