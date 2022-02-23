"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const api = (0, express_1.default)();
api.get('/test', (req, res) => {
    res.json({ message: 'Tudo OK' });
});
api.listen(PORT, () => {
    console.log(`Estou on na porta: ${PORT}`);
});
//# sourceMappingURL=index.js.map