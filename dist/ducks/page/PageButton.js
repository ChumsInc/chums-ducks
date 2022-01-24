"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const CurrentPageButton = ({ page, label = null }) => {
    return (react_1.default.createElement("li", { className: (0, classnames_1.default)('page-item active') },
        react_1.default.createElement("span", { className: "page-link" }, label || page)));
};
const SelectablePageButton = ({ page, label = null, disabled = false, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (react_1.default.createElement("li", { className: (0, classnames_1.default)('page-item', { disabled: disabled }) },
        react_1.default.createElement("a", { href: "#", className: 'page-link', onClick: handleClick }, label || page)));
};
const PageButton = ({ page, label = '', disabled = false, isCurrent = false, onClick }) => {
    return (isCurrent
        ? react_1.default.createElement(CurrentPageButton, { page: page, label: label })
        : react_1.default.createElement(SelectablePageButton, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
exports.default = PageButton;
//# sourceMappingURL=PageButton.js.map