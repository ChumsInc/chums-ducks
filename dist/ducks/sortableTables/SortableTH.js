"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const SortableTH = ({ field, sorted, ascending, className, onClick }) => {
    if (!field.sortable) {
        return (react_1.default.createElement("th", { className: (0, classnames_1.default)(className) }, field.title));
    }
    const iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    };
    const clickHandler = () => {
        onClick(field.field, !sorted ? true : !ascending);
    };
    return (react_1.default.createElement("th", { className: (0, classnames_1.default)("sortable", className), onClick: clickHandler },
        field.title,
        !!sorted && (react_1.default.createElement("span", { className: (0, classnames_1.default)('ms-1', iconClassName) }))));
};
exports.default = SortableTH;
//# sourceMappingURL=SortableTH.js.map