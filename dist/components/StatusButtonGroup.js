"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const StatusButtonGroup = ({ checked, onChange }) => {
    const btnEnabled = {
        'btn-success': checked,
        'btn-outline-success': !checked,
    };
    const btnDisabled = {
        'btn-danger': !checked,
        'btn-outline-danger': checked,
    };
    return (react_1.default.createElement("div", { className: "btn-group btn-group-sm", role: "group" },
        react_1.default.createElement("button", { type: "button", onClick: () => onChange(true), className: (0, classnames_1.default)('btn btn-sm', btnEnabled) }, "Enabled"),
        react_1.default.createElement("button", { type: "button", onClick: () => onChange(false), className: (0, classnames_1.default)('btn btn-sm', btnDisabled) }, "Disabled")));
};
exports.default = StatusButtonGroup;
//# sourceMappingURL=StatusButtonGroup.js.map