export const tablesSortChanged = 'tables/categorySortChanged';
export const tablesTableAdded = 'tables/tableAdded';
export const sortableTableSelector = (key) => (state) => state.sortableTables[key] || { key, field: '', ascending: false };
export const sortChangedAction = ({ key, field, ascending }) => ({
    type: tablesSortChanged,
    payload: { key, field, ascending }
});
export const tableAddedAction = ({ key, field, ascending }) => ({
    type: tablesTableAdded,
    payload: { key, field, ascending }
});
const sortableTablesReducer = (state = {}, action) => {
    const { type, payload } = action;
    const { key, field, ascending } = payload || {};
    switch (type) {
        case tablesSortChanged:
            return Object.assign(Object.assign({}, state), { [key]: { key, field, ascending } });
        case tablesTableAdded:
            if (!state[key]) {
                return Object.assign(Object.assign({}, state), { [key]: { key, field, ascending } });
            }
            return state;
        default: return state;
    }
};
export default sortableTablesReducer;
//# sourceMappingURL=index.js.map