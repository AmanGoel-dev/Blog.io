"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogtInput = exports.createBlogInput = exports.signinInput = exports.signupinput = void 0;
const zod_1 = require("zod");
exports.signupinput = zod_1.z.object({
    name: zod_1.z.string().optional(),
    password: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updateBlogtInput = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
});
