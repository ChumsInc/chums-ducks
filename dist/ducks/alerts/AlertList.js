"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const Alert_1 = __importDefault(require("./Alert"));
const AlertList = ({ context }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const list = (0, react_redux_1.useSelector)(index_1.selectAlertList).filter(alert => !context || alert.context === context).sort((a, b) => b.timestamp - a.timestamp);
    const dismissHandler = (id) => dispatch((0, index_1.dismissAlertAction)(id));
    return (react_1.default.createElement("div", null, list.map(alert => (react_1.default.createElement(Alert_1.default, { key: alert.id, color: alert.color, message: alert.message, className: alert.className, context: !!context ? undefined : alert.context, count: alert.count, title: alert.title, onDismiss: () => dismissHandler(alert.id) })))));
};
exports.default = AlertList;
//# sourceMappingURL=AlertList.js.map