"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const RowsPerPage_1 = __importDefault(require("./RowsPerPage"));
const RowsPerPageDuck = ({ pageKey = 'app', pageValues = index_1.defaultRowsPerPageValues, onChange, }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const rowPerPage = (0, react_redux_1.useSelector)((0, index_1.rowsPerPageSelector)(pageKey));
    const changeHandler = (value) => {
        dispatch((0, index_1.setRowsPerPageAction)({ key: pageKey, rowsPerPage: value }));
        if (typeof onChange === 'function') {
            onChange(value);
        }
    };
    return (react_1.default.createElement(RowsPerPage_1.default, { value: rowPerPage, onChange: changeHandler, pageValues: pageValues }));
};
exports.default = RowsPerPageDuck;
//# sourceMappingURL=RowsPerPageDuck.js.map