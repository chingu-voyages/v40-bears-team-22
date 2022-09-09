"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = (0, express_1.Router)();
router.post('/signup', auth_1.postSignup);
router.post('/login', auth_1.postLogin);
router.post("/logout", auth_1.postLogout);
exports.default = router;
