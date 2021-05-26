"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var newsController_1 = require("../controllers/newsController");
var newsRouter = express_1.default.Router();
newsRouter.get('/:_id', newsController_1.getNewsById);
newsRouter.get('/:category', newsController_1.getNewsByCategory);
exports.default = newsRouter;
