"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const NavRouterList_1 = __importDefault(require("./NavRouterList"));
const PillRouterList = ({ tabKey, className, itemClassName, children }) => {
    return (react_1.default.createElement(NavRouterList_1.default, { tabKey: tabKey, className: (0, classnames_1.default)(className, 'nav-pills'), itemClassName: itemClassName }, children));
};
exports.default = PillRouterList;
//# sourceMappingURL=PillRouterList.js.map