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
var PaginationDuck = function (_a) {
    var _b = _a.pageKey, pageKey = _b === void 0 ? 'app' : _b, dataLength = _a.dataLength, props = __rest(_a, ["pageKey", "dataLength"]);
    var dispatch = useDispatch();
    var page = useSelector(currentPageSelector(pageKey));
    var rowsPerPage = useSelector(rowsPerPageSelector(pageKey));
    var pages = calcPages(dataLength, rowsPerPage) || 1;
    // if the current page has exceeded the number of pages, then reset to page 1
    if (page > pages) {
        dispatch(setPageAction({ key: pageKey, current: 1 }));
    }
    var changeHandler = function (value) { return dispatch(setPageAction({ key: pageKey, current: value })); };
    return (React.createElement(Pagination, __assign({ page: page, pages: pages, onSelectPage: changeHandler }, props)));
};
export default PaginationDuck;
//# sourceMappingURL=PaginationDuck.js.map