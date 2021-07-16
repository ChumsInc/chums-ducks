import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { defaultRowsPerPageValues, rowsPerPageSelector, setRowsPerPageAction } from "./index";
import { default as RowsPerPage } from "./RowsPerPage";
const RowsPerPageDuck = ({ pageKey = 'app', pageValues = defaultRowsPerPageValues }) => {
    const dispatch = useDispatch();
    const rowPerPage = useSelector(rowsPerPageSelector(pageKey));
    const changeHandler = (value) => dispatch(setRowsPerPageAction({ key: pageKey, rowsPerPage: value }));
    return (React.createElement(RowsPerPage, { value: rowPerPage, onChange: changeHandler, pageValues: pageValues }));
};
export default RowsPerPageDuck;
//# sourceMappingURL=RowsPerPageDuck.js.map