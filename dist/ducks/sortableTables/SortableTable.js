"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const SortableTableHead_1 = __importDefault(require("./SortableTableHead"));
const SortableTR_1 = __importDefault(require("./SortableTR"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const utils_1 = require("../../utils");
const SortableTable = ({ tableKey, keyField, size = '', rowClassName, onSelectRow = utils_1.noop, selected = '', fields, data, className = '', tfoot, onChangeSort = utils_1.noop, children, }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const sortChangeHandler = (field, ascending) => {
        dispatch((0, index_1.sortChangedAction)({ key: tableKey, field, ascending }));
        onChangeSort();
    };
    const tableClassName = (0, classnames_1.default)('table', className, {
        [`table-${size}`]: !!size,
    });
    return (react_1.default.createElement("table", { className: tableClassName },
        react_1.default.createElement(SortableTableHead_1.default, { tableKey: tableKey, fields: fields, onChangeSort: sortChangeHandler }),
        !!data.length && (react_1.default.createElement("tbody", null, data.map(row => {
            const key = typeof keyField === "function" ? keyField(row) : row[keyField];
            const isSelected = typeof selected === 'function' ? selected(row) : key === selected;
            return (react_1.default.createElement(SortableTR_1.default, { key: key, onClick: () => onSelectRow(row), rowClassName: rowClassName, fields: fields, row: row, selected: isSelected }));
        }))),
        children,
        tfoot));
};
exports.default = SortableTable;
//# sourceMappingURL=SortableTable.js.map