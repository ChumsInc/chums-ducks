"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RowsPerPageDuck_1 = __importDefault(require("./RowsPerPageDuck"));
const PaginationDuck_1 = __importDefault(require("./PaginationDuck"));
const PagerDuck = ({ pageKey = 'app', dataLength = 0, filtered = false, onChangeRowsPerPage, }) => {
    const changeRowsPerPageHandler = (value) => {
        if (typeof onChangeRowsPerPage === 'function') {
            onChangeRowsPerPage(value);
        }
    };
    return (react_1.default.createElement("div", { className: "row g-3" },
        react_1.default.createElement("div", { className: "col-auto" },
            react_1.default.createElement(RowsPerPageDuck_1.default, { pageKey: pageKey, onChange: changeRowsPerPageHandler })),
        react_1.default.createElement("div", { className: "col-auto" },
            react_1.default.createElement(PaginationDuck_1.default, { pageKey: pageKey, dataLength: dataLength, filtered: filtered }))));
};
exports.default = PagerDuck;
//# sourceMappingURL=PagerDuck.js.map