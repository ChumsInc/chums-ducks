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
export var addPageSet = 'page/pageSetAdded';
export var currentPageChanged = 'page/currentPageChanged';
export var rowsPerPageChanged = 'page/rowsPerPageChanged';
export var defaultRowsPerPageValues = [10, 25, 50, 100, 250, 500, 1000];
export var filterPage = function (page, rowsPerPage) { return function (row, index) { return Math.ceil((index + 1) / rowsPerPage) === page; }; };
export var calcPages = function (rows, rowsPerPage) { return Math.ceil(rows / rowsPerPage); };
export var setPageAction = function (_a) {
    var current = _a.current, _b = _a.key, key = _b === void 0 ? 'app' : _b;
    return ({ type: currentPageChanged, payload: { key: key, current: current } });
};
export var setRowsPerPageAction = function (_a) {
    var rowsPerPage = _a.rowsPerPage, _b = _a.key, key = _b === void 0 ? 'app' : _b;
    return ({ type: rowsPerPageChanged, payload: { key: key, rowsPerPage: rowsPerPage } });
};
export var addPageSetAction = function (_a) {
    var _b = _a.key, key = _b === void 0 ? 'app' : _b, _c = _a.current, current = _c === void 0 ? 1 : _c, _d = _a.rowsPerPage, rowsPerPage = _d === void 0 ? 25 : _d;
    return ({ type: addPageSet, payload: { key: key, current: current, rowsPerPage: rowsPerPage } });
};
export var currentPageSelector = function (key) { return function (state) { var _a, _b; return (_b = (_a = state.pages[key]) === null || _a === void 0 ? void 0 : _a.current) !== null && _b !== void 0 ? _b : 1; }; };
export var rowsPerPageSelector = function (key) { return function (state) { var _a, _b; return (_b = (_a = state.pages[key]) === null || _a === void 0 ? void 0 : _a.rowsPerPage) !== null && _b !== void 0 ? _b : 25; }; };
export var pagedDataSelector = function (key, data) { return function (state) {
    var _a = state.pages[key] || {}, current = _a.current, rowsPerPage = _a.rowsPerPage;
    return data.filter(function (row, index) { return Math.ceil((index + 1) / rowsPerPage) === current; });
}; };
export var selectCurrentPage = currentPageSelector;
export var selectRowsPerPage = rowsPerPageSelector;
export var selectPagedData = pagedDataSelector;
var pageReducer = function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = {}; }
    var type = action.type, payload = action.payload;
    var _d = payload || {}, _e = _d.key, key = _e === void 0 ? 'app' : _e, _f = _d.current, current = _f === void 0 ? 1 : _f, _g = _d.rowsPerPage, rowsPerPage = _g === void 0 ? 25 : _g;
    switch (type) {
        case currentPageChanged:
            if (state[key]) {
                var rowsPerPage_1 = state[key].rowsPerPage;
                return __assign(__assign({}, state), (_a = {}, _a[key] = { current: current, rowsPerPage: rowsPerPage_1 }, _a));
            }
            return state;
        case rowsPerPageChanged:
            if (state[key]) {
                var current_1 = state[key].current;
                return __assign(__assign({}, state), (_b = {}, _b[key] = { current: current_1, rowsPerPage: rowsPerPage }, _b));
            }
            return state;
        case addPageSet:
            if (!state[key]) {
                return __assign(__assign({}, state), (_c = {}, _c[key] = { current: current, rowsPerPage: rowsPerPage }, _c));
            }
            return state;
        default: return state;
    }
};
export default pageReducer;
//# sourceMappingURL=index.js.map