"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./models/server");
//basic-routes
const users_1 = __importDefault(require("./routes/users"));
const messages_1 = __importDefault(require("./routes/messages"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
let server = server_1.Server.instance;
//Body-Parser
server.app.use(body_parser_1.default.urlencoded({
    extended: true
}));
server.app.use(body_parser_1.default.json());
//Cors Config
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
//Routes
server.app.use('/api', users_1.default);
server.app.use('/messages', messages_1.default);
server.start(() => {
    console.log(`
        Server On Port Listen ${server.port} 
    `);
});
