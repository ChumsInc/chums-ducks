import { combineReducers } from "redux";
export const currentPageChanged = 'page/currentPageChanged';
export const rowsPerPageChanged = 'page/rowsPerPageChanged';
export const setPage = (page, root = 'app') => ({ type: `${root}/${currentPageChanged}`, payload: page, meta: root });
export const setRowsPerPage = (rowsPerPage, root = 'app') => ({ type: `${root}/${rowsPerPageChanged}`, payload: rowsPerPage, meta: root });
export const selectCurrentPage = (state) => state.page.current;
export const selectRowsPerPage = (state) => state.page.rowsPerPage;
const currentReducer = (state = 1, action) => {
    const { type, payload, meta } = action;
    switch (type) {
        case `${meta}/${currentPageChanged}`:
            return payload || 1;
        case `${meta}/${rowsPerPageChanged}`:
            return 1;
        default:
            return state;
    }
};
const rowsPerPageReducer = (state = 25, action) => {
    const { type, payload, meta } = action;
    switch (type) {
        case `${meta}/${rowsPerPageChanged}`:
            return payload;
        default:
            return state;
    }
};
export default combineReducers({
    current: currentReducer,
    rowsPerPage: rowsPerPageReducer,
});
//# sourceMappingURL=index.js.map