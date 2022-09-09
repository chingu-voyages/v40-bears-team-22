"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema({
    username: { type: String },
    email: { type: String, required: true },
    firstname: String,
    lastname: String,
    password: { type: String, required: true },
    avatar: String,
    points: { type: Number, default: 0 },
    profile_description: [
        {
            description: { type: String }
        }
    ],
    skills_to_learn: [
        {
            skill: String
        }
    ],
    skills_to_teach: [
        {
            skill: String
        }
    ]
});
// 3. Create a Model.
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
