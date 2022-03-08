"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const Pagination_1 = __importDefault(require("./Pagination"));
const PaginationDuck = ({ pageKey = 'app', dataLength, ...props }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const page = (0, react_redux_1.useSelector)((0, index_1.selectCurrentPage)(pageKey));
    const rowsPerPage = (0, react_redux_1.useSelector)((0, index_1.selectRowsPerPage)(pageKey));
    const pages = (0, index_1.calcPages)(dataLength, rowsPerPage) || 1;
    // if the current page has exceeded the number of pages, then reset to page 1
    (0, react_1.useEffect)(() => {
        if (page > pages) {
            dispatch((0, index_1.setPageAction)({ key: pageKey, current: 1 }));
        }
    }, [pages]);
    const changeHandler = (value) => dispatch((0, index_1.setPageAction)({ key: pageKey, current: value }));
    return (react_1.default.createElement(Pagination_1.default, { page: page, pages: pages, onSelectPage: changeHandler, ...props }));
};
exports.default = PaginationDuck;
//# sourceMappingURL=PaginationDuck.js.map