"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.newsSchema = new Schema({
    id: mongoose_1.default.Types.ObjectId,
    title: String,
    timestamp: { type: Date, default: Date.now },
    description: String,
    category: String,
    thumbnail: String,
    video: String,
});
