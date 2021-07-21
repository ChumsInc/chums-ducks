var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var tablesSortChanged = 'tables/categorySortChanged';
export var tablesTableAdded = 'tables/tableAdded';
export var sortableTableSelector = function (key) { return function (state) { return state.sortableTables[key] || { key: key, field: '', ascending: false }; }; };
export var sortChangedAction = function (_a) {
    var key = _a.key, field = _a.field, ascending = _a.ascending;
    return ({
        type: tablesSortChanged,
        payload: { key: key, field: field, ascending: ascending }
    });
};
export var tableAddedAction = function (_a) {
    var key = _a.key, field = _a.field, ascending = _a.ascending;
    return ({
        type: tablesTableAdded,
        payload: { key: key, field: field, ascending: ascending }
    });
};
var sortableTablesReducer = function (state, action) {
    var _a, _b;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    var _c = payload || {}, key = _c.key, field = _c.field, ascending = _c.ascending;
    switch (type) {
        case tablesSortChanged:
            return __assign(__assign({}, state), (_a = {}, _a[key] = { key: key, field: field, ascending: ascending }, _a));
        case tablesTableAdded:
            if (!state[key]) {
                return __assign(__assign({}, state), (_b = {}, _b[key] = { key: key, field: field, ascending: ascending }, _b));
            }
            return state;
        default: return state;
    }
};
export default sortableTablesReducer;
//# sourceMappingURL=index.js.map