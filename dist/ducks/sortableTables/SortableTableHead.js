"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SortableTH_1 = __importDefault(require("./SortableTH"));
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const SortableTableHead = ({ tableKey, fields, onChangeSort, }) => {
    const { field, ascending } = (0, react_redux_1.useSelector)((0, index_1.sortableTableSelector)(tableKey));
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null, fields.map((tableField, index) => (react_1.default.createElement(SortableTH_1.default, { key: index, field: tableField, sorted: field === tableField.field, ascending: ascending, className: tableField.className, onClick: onChangeSort }))))));
};
exports.default = SortableTableHead;
//# sourceMappingURL=SortableTableHead.js.map