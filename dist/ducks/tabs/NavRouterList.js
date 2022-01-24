"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const react_redux_1 = require("react-redux");
const classnames_1 = __importDefault(require("classnames"));
const NavRouterLink_1 = __importDefault(require("./NavRouterLink"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledNavList = styled_components_1.default.ul `
    &.nav-tabs {
      .nav-item {
        .nav-link {
          .btn-close {
            width: 0.75rem;
            height: 0.75rem;
            margin-left: 0.25rem;
            line-height: 0.75rem;
            font-size: 0.75rem;
          }
        }
      }
    }
`;
const NavRouterList = ({ tabKey, className, itemClassName, children }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const list = (0, react_redux_1.useSelector)((0, index_1.selectTabList)(tabKey));
    const tabCloseHandler = (id) => dispatch((0, index_1.tabRemovedAction)(id, tabKey));
    return (react_1.default.createElement(StyledNavList, { className: (0, classnames_1.default)('nav', className) },
        list.map(tab => (react_1.default.createElement(NavRouterLink_1.default, { to: tab.to || '', key: tab.id, id: tab.id, title: tab.title, className: itemClassName, icon: tab.icon, disabled: tab.disabled, canClose: tab.canClose, onClose: () => tabCloseHandler(tab.id) }))),
        children));
};
exports.default = NavRouterList;
//# sourceMappingURL=NavRouterList.js.map