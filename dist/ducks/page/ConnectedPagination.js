var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectRowsPerPage, setPage } from "./index";
import { default as Pagination, calcPages } from "../../components/Pagination";
export { default as Pagination, filterPage, calcPages } from '../../components/Pagination';
const ConnectedPagination = (_a) => {
    var { dataLength, selector, pageSelector, setter } = _a, props = __rest(_a, ["dataLength", "selector", "pageSelector", "setter"]);
    const _setter = setter !== null && setter !== void 0 ? setter : setPage;
    const dispatch = useDispatch();
    const page = useSelector(pageSelector !== null && pageSelector !== void 0 ? pageSelector : selectCurrentPage);
    const rowsPerPage = useSelector(selector !== null && selector !== void 0 ? selector : selectRowsPerPage);
    const pages = calcPages(dataLength, rowsPerPage) || 1;
    if (page > pages) {
        dispatch(_setter(1));
    }
    const changeHandler = (value) => dispatch(_setter(value));
    return (React.createElement(Pagination, Object.assign({ page: page, pages: pages, onSelectPage: changeHandler }, props)));
};
export default ConnectedPagination;
//# sourceMappingURL=ConnectedPagination.js.map