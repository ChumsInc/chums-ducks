"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const utils_1 = require("../../utils");
const SortableTR = ({ className, rowClassName, selected, fields, row, trRef, onClick = utils_1.noop, ...rest }) => {
    const clickHandler = () => {
        return onClick ? onClick() : (0, utils_1.noop)();
    };
    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    return (react_1.default.createElement("tr", { ref: trRef, className: (0, classnames_1.default)({ 'table-active': selected }, className, _className), onClick: clickHandler, ...rest }, fields.map((field, index) => {
        const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
        if (typeof field.render === 'function') {
            return (react_1.default.createElement("td", { key: index, className: (0, classnames_1.default)(fieldClassName), colSpan: field.colSpan }, field.render(row)));
        }
        return (react_1.default.createElement("td", { key: index, className: (0, classnames_1.default)(fieldClassName), colSpan: field.colSpan }, row[field.field]));
    })));
};
exports.default = SortableTR;
//# sourceMappingURL=SortableTR.js.map