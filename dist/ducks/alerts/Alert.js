"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const numeral_1 = __importDefault(require("numeral"));
const Badge_1 = __importDefault(require("../../components/Badge"));
const Alert = ({ message, color = 'primary', title, className = '', context, count = 0, canDismiss = true, onDismiss, children }) => {
    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('alert my-3', elClassName, className) },
        !!context && (react_1.default.createElement("strong", { className: "me-1" },
            "[",
            context,
            "]")),
        !!title && (react_1.default.createElement("strong", { className: "me-1" },
            title,
            ":")),
        message || children || null,
        !!count && count > 1 && (react_1.default.createElement(Badge_1.default, { color: color, className: "mx-3" }, (0, numeral_1.default)(count).format('0,0'))),
        canDismiss && typeof onDismiss === 'function' && (react_1.default.createElement("button", { type: "button", "aria-label": "close", onClick: onDismiss, className: "btn-close" }))));
};
exports.default = Alert;
//# sourceMappingURL=Alert.js.map