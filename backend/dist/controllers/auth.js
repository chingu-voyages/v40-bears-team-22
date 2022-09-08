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
exports.postLogout = exports.postLogin = exports.postSignup = void 0;
const bcrypt = __importStar(require("bcrypt"));
const custom_error_1 = __importDefault(require("../errors/custom-error"));
const user_1 = __importDefault(require("../models/user"));
const postSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const isRegistered = yield user_1.default.find({
        email
    });
    // console.log(isRegistered , "user");
    if (isRegistered[0]) {
        const error = new custom_error_1.default();
        error.message = 'email already exists';
        error.statusCode = 400;
        return next(error);
    }
    const hashedPassword = yield bcrypt.hash(password, 12);
    // console.log(hashedPassword , "HashedPD");
    const newuser = new user_1.default({
        username,
        email,
        password: hashedPassword
    });
    const savedUser = yield newuser.save();
    const user = {
        username: savedUser.username,
        email: savedUser.email,
        points: savedUser.points,
        id: savedUser._id,
        profile_description: savedUser.profile_description,
        skills_to_learn: savedUser.skills_to_learn,
        skills_to_teach: savedUser.skills_to_teach,
    };
    return res.status(201).json({
        message: "user created",
        status: 201,
        user,
    });
});
exports.postSignup = postSignup;
const postLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const foundUser = yield user_1.default.findOne({
        email
    });
    console.log(foundUser, "foundUser");
    if (!foundUser) {
        const error = new custom_error_1.default();
        error.statusCode = 400;
        error.message = "User does not exist or has not signed up.";
        return next(error);
    }
    const checkPassword = bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
        const error = new custom_error_1.default();
        error.statusCode = 400;
        error.message = "Credentials not valid.";
        return next(error);
    }
    const user = {
        username: foundUser.username,
        email: foundUser.email,
        points: foundUser.points,
        id: foundUser._id,
        profile_description: foundUser.profile_description,
        skills_to_learn: foundUser.skills_to_learn,
        skills_to_teach: foundUser.skills_to_teach,
    };
    res.status(200).json({
        user
    });
});
exports.postLogin = postLogin;
const postLogout = (req, res, next) => {
    res.send('Express + TypeScript Server');
};
exports.postLogout = postLogout;
