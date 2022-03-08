"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagedDataSelector = exports.rowsPerPageSelector = exports.currentPageSelector = exports.selectPageFilter = exports.selectPagedData = exports.selectRowsPerPage = exports.selectCurrentPage = exports.addPageSetAction = exports.setRowsPerPageAction = exports.setPageAction = exports.calcPages = exports.filterPage = exports.defaultRowsPerPageValues = exports.rowsPerPageChanged = exports.currentPageChanged = exports.addPageSet = void 0;
exports.addPageSet = 'page/pageSetAdded';
exports.currentPageChanged = 'page/currentPageChanged';
exports.rowsPerPageChanged = 'page/rowsPerPageChanged';
exports.defaultRowsPerPageValues = [10, 25, 50, 100, 250, 500, 1000];
const filterPage = (page, rowsPerPage) => (row, index) => Math.ceil((index + 1) / rowsPerPage) === page;
exports.filterPage = filterPage;
const calcPages = (rows, rowsPerPage) => Math.ceil(rows / rowsPerPage);
exports.calcPages = calcPages;
const setPageAction = ({ current, key = 'app' }) => ({ type: exports.currentPageChanged, payload: { key, current } });
exports.setPageAction = setPageAction;
const setRowsPerPageAction = ({ rowsPerPage, key = 'app' }) => ({ type: exports.rowsPerPageChanged, payload: { key, rowsPerPage } });
exports.setRowsPerPageAction = setRowsPerPageAction;
const addPageSetAction = ({ key = 'app', current = 1, rowsPerPage = 25 }) => ({ type: exports.addPageSet, payload: { key, current, rowsPerPage } });
exports.addPageSetAction = addPageSetAction;
const selectCurrentPage = (key) => (state) => state.pages[key]?.current ?? 1;
exports.selectCurrentPage = selectCurrentPage;
const selectRowsPerPage = (key) => (state) => state.pages[key]?.rowsPerPage ?? 25;
exports.selectRowsPerPage = selectRowsPerPage;
const selectPagedData = (key, data) => (state) => {
    if (!state.pages[key]) {
        return data;
    }
    const { current, rowsPerPage } = state.pages[key] || {};
    return data.filter((row, index) => Math.ceil((index + 1) / rowsPerPage) === current);
};
exports.selectPagedData = selectPagedData;
const selectPageFilter = (key) => (state) => {
    if (!state.pages[key]) {
        return () => true;
    }
    const { current = 1, rowsPerPage = 25 } = state.pages[key] || {};
    return (0, exports.filterPage)(current, rowsPerPage);
};
exports.selectPageFilter = selectPageFilter;
exports.currentPageSelector = exports.selectCurrentPage;
exports.rowsPerPageSelector = exports.selectRowsPerPage;
exports.pagedDataSelector = exports.selectPagedData;
const pageReducer = (state = {}, action) => {
    const { type, payload } = action;
    const { key = 'app', current = 1, rowsPerPage = 25 } = payload || {};
    switch (type) {
        case exports.currentPageChanged:
            if (state[key]) {
                const { rowsPerPage } = state[key];
                return {
                    ...state,
                    [key]: { current, rowsPerPage }
                };
            }
            return state;
        case exports.rowsPerPageChanged:
            if (state[key]) {
                const { current } = state[key];
                return {
                    ...state,
                    [key]: { current, rowsPerPage }
                };
            }
            return state;
        case exports.addPageSet:
            if (!state[key]) {
                return {
                    ...state,
                    [key]: { current, rowsPerPage },
                };
            }
            return state;
        default: return state;
    }
};
exports.default = pageReducer;
//# sourceMappingURL=index.js.map