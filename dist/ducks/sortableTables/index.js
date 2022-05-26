"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableAddedAction = exports.sortChangedAction = exports.sortableTableSelector = exports.selectTableSort = exports.tablesTableAdded = exports.tablesSortChanged = void 0;
exports.tablesSortChanged = 'tables/categorySortChanged';
exports.tablesTableAdded = 'tables/tableAdded';
const selectTableSort = (key) => (state) => state.sortableTables[key] || { key, field: '', ascending: false };
exports.selectTableSort = selectTableSort;
exports.sortableTableSelector = exports.selectTableSort;
const sortChangedAction = ({ key, field, ascending }) => ({
    type: exports.tablesSortChanged,
    payload: { key, field, ascending }
});
exports.sortChangedAction = sortChangedAction;
const tableAddedAction = ({ key, field, ascending }) => ({
    type: exports.tablesTableAdded,
    payload: { key, field, ascending }
});
exports.tableAddedAction = tableAddedAction;
const sortableTablesReducer = (state = {}, action) => {
    const { type, payload } = action;
    const { key, field, ascending } = payload || {};
    switch (type) {
        case exports.tablesSortChanged:
            return {
                ...state,
                [key]: { key, field, ascending }
            };
        case exports.tablesTableAdded:
            if (!state[key]) {
                return {
                    ...state,
                    [key]: { key, field, ascending }
                };
            }
            return state;
        default: return state;
    }
};
exports.default = sortableTablesReducer;
//# sourceMappingURL=index.js.map