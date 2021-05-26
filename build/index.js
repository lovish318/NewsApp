"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
var newsRoutes_1 = __importDefault(require("./routes/newsRoutes"));
var app = express_1.default();
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/api/news', newsRoutes_1.default);
app.use('/api/admin', adminRoutes_1.default);
app.listen(3000, function () {
    console.log("Example app listening at http://localhost:3000");
});
