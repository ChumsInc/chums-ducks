export const addPageSet = 'page/addPageSet';
export const currentPageChanged = 'page/currentPageChanged';
export const rowsPerPageChanged = 'page/rowsPerPageChanged';
export const defaultRowsPerPageValues = [10, 25, 50, 100, 250, 500, 1000];
export const filterPage = (page, rowsPerPage) => (row, index) => Math.ceil((index + 1) / rowsPerPage) === page;
export const calcPages = (rows, rowsPerPage) => Math.ceil(rows / rowsPerPage);
export const setPageAction = ({ current, key = 'app' }) => ({ type: currentPageChanged, payload: { key, current } });
export const setRowsPerPageAction = ({ rowsPerPage, key = 'app' }) => ({ type: rowsPerPageChanged, payload: { key, rowsPerPage } });
export const addPageSetAction = ({ key = 'app', current = 1, rowsPerPage = 25 }) => ({ type: addPageSet, payload: { key, current, rowsPerPage } });
export const currentPageSelector = (key) => (state) => { var _a, _b; return (_b = (_a = state.page[key]) === null || _a === void 0 ? void 0 : _a.current) !== null && _b !== void 0 ? _b : 1; };
export const rowsPerPageSelector = (key) => (state) => { var _a, _b; return (_b = (_a = state.page[key]) === null || _a === void 0 ? void 0 : _a.rowsPerPage) !== null && _b !== void 0 ? _b : 25; };
export const pagedDataSelector = (key, data) => (state) => {
    const { current, rowsPerPage } = state.page[key] || {};
    return data.filter((row, index) => Math.ceil((index + 1) / rowsPerPage) === current);
};
const pageReducer = (state = {}, action) => {
    const { type, payload } = action;
    const { key = 'app', current = 1, rowsPerPage = 25 } = payload || {};
    switch (type) {
        case currentPageChanged:
            if (state[key]) {
                const { rowsPerPage } = state[key];
                return Object.assign(Object.assign({}, state), { [key]: { current, rowsPerPage } });
            }
            return state;
        case rowsPerPageChanged:
            if (state[key]) {
                const { current } = state[key];
                return Object.assign(Object.assign({}, state), { [key]: { current, rowsPerPage } });
            }
            return state;
        case addPageSet:
            return Object.assign(Object.assign({}, state), { [key]: { current, rowsPerPage } });
        default: return state;
    }
};
export default pageReducer;
//# sourceMappingURL=index.js.map