"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message = undefined, statusCode = undefined) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
