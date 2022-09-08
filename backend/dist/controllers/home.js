"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getIndex = (req, res, next) => {
    res.status(200).json({
        message: "Welcome to home"
    });
};
exports.default = getIndex;
