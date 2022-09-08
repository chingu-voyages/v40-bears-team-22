"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const bodyParser = __importStar(require("body-parser"));
const errorController_1 = require("./controllers/errorController");
const set_headers_1 = __importDefault(require("./middlewares/set-headers"));
const auth_1 = __importDefault(require("./routes/auth"));
const home_1 = __importDefault(require("./controllers/home"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.d96pl5j.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const url = '/api/test/v1';
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(set_headers_1.default);
app.use(url, auth_1.default);
app.use(url, home_1.default);
app.use(errorController_1.handleError);
mongoose_1.default.connect(MONGO_DB_URI, (result) => {
    console.log(`Connected to mongodb atlas ✨`);
    app.listen(PORT, () => {
        console.log(`🛡️  Server listening on port: ${PORT} 🛡️`);
    });
});
