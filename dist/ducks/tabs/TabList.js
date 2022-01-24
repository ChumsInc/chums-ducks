"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavList_1 = __importDefault(require("./NavList"));
const classnames_1 = __importDefault(require("classnames"));
const TabList = ({ tabKey, className, itemClassName, onSelectTab, children }) => {
    return (react_1.default.createElement(NavList_1.default, { tabKey: tabKey, className: (0, classnames_1.default)(className, 'nav-tabs'), itemClassName: itemClassName, onSelectTab: onSelectTab }, children));
};
exports.default = TabList;
//# sourceMappingURL=TabList.js.map