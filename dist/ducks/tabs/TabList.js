"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NavList_1 = require("./NavList");
const classnames_1 = __importDefault(require("classnames"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const TabItem_1 = __importDefault(require("./TabItem"));
const TabList = ({ tabKey, className, itemClassName, onSelectTab, children }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const list = (0, react_redux_1.useSelector)((0, index_1.selectTabList)(tabKey));
    const selected = (0, react_redux_1.useSelector)((0, index_1.selectCurrentTab)(tabKey));
    const tabClickHandler = (id) => {
        dispatch((0, index_1.tabSelectedAction)(id, tabKey));
        if (onSelectTab) {
            onSelectTab(id);
        }
    };
    const tabCloseHandler = (id) => dispatch((0, index_1.tabRemovedAction)(id, tabKey));
    console.log(`TabList ${tabKey}: ${JSON.stringify(list.map(({ id, disabled }) => ({ id, disabled })))}`);
    return (react_1.default.createElement(NavList_1.StyledNavList, { className: (0, classnames_1.default)('nav nav-tabs', className) },
        list.map(tab => (react_1.default.createElement(TabItem_1.default, { key: tab.id, id: tab.id, title: tab.title, className: itemClassName, icon: tab.icon, onSelect: () => tabClickHandler(tab.id), disabled: tab.disabled, active: tab.id === selected, canClose: tab.canClose, onClose: () => tabCloseHandler(tab.id) }))),
        children));
};
exports.default = TabList;
//# sourceMappingURL=TabList.js.map