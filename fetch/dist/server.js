"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = (0, express_1.default)();
app.get('/api', (req, res) => {
    (0, node_fetch_1.default)('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json)
        .then(json => res.send(json));
});
const PORT = 3004;
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}')`);
});
