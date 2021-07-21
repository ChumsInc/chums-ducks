import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { defaultRowsPerPageValues, rowsPerPageSelector, setRowsPerPageAction } from "./index";
import { default as RowsPerPage } from "./RowsPerPage";
var RowsPerPageDuck = function (_a) {
    var _b = _a.pageKey, pageKey = _b === void 0 ? 'app' : _b, _c = _a.pageValues, pageValues = _c === void 0 ? defaultRowsPerPageValues : _c;
    var dispatch = useDispatch();
    var rowPerPage = useSelector(rowsPerPageSelector(pageKey));
    var changeHandler = function (value) { return dispatch(setRowsPerPageAction({ key: pageKey, rowsPerPage: value })); };
    return (React.createElement(RowsPerPage, { value: rowPerPage, onChange: changeHandler, pageValues: pageValues }));
};
export default RowsPerPageDuck;
//# sourceMappingURL=RowsPerPageDuck.js.map