"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adminController_1 = require("../controllers/adminController");
var adminRouter = express_1.default.Router();
adminRouter.post('/post', adminController_1.postNews);
exports.default = adminRouter;
