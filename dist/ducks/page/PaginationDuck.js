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
import { currentPageSelector, rowsPerPageSelector, setPageAction, calcPages } from "./index";
import Pagination from "./Pagination";
const PaginationDuck = (_a) => {
    var { pageKey = 'app', dataLength } = _a, props = __rest(_a, ["pageKey", "dataLength"]);
    const dispatch = useDispatch();
    const page = useSelector(currentPageSelector(pageKey));
    const rowsPerPage = useSelector(rowsPerPageSelector(pageKey));
    const pages = calcPages(dataLength, rowsPerPage) || 1;
    // if the current page has exceeded the number of pages, then reset to page 1
    if (page > pages) {
        dispatch(setPageAction({ key: pageKey, current: 1 }));
    }
    const changeHandler = (value) => dispatch(setPageAction({ key: pageKey, current: value }));
    return (React.createElement(Pagination, Object.assign({ page: page, pages: pages, onSelectPage: changeHandler }, props)));
};
export default PaginationDuck;
//# sourceMappingURL=PaginationDuck.js.map