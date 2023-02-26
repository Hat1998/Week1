"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// let data = require('./data')
// app.use(express.json())
// app.get('/', (req:Request, res:Response) =>{
//     res.send(data)
// })
// app.post('/', (req, res) =>{
//     let newUser = req.body
//     data.push(newUser)
//     res.send(data)
// })
// app.delete('/', (req, res) =>{
//        data.pop( );
//     res.send(data)
// })
// app.patch('/:name', (req, res) =>{
//  res.send(data)
// })
app.get('/', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json)
        .then(json => res.send(json));
});
const PORT = 3003;
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}')`);
});
