"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Badge = ({ color, pill, text, className, description, children }) => {
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
    };
    return (react_1.default.createElement("span", { className: (0, classnames_1.default)(_className, className) },
        text || children || '',
        !!description && (react_1.default.createElement("span", { className: "visually-hidden" }, description))));
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map