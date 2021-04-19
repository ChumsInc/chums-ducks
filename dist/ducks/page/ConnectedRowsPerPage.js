import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectRowsPerPage, setRowsPerPage } from "./index";
import { default as RowsPerPage } from "../../components/RowsPerPage";
export { default as RowsPerPage, defaultPageValues } from "../../components/RowsPerPage";
const ConnectedRowsPerPage = ({ selector, setter, pageValues = [10, 25, 50, 100, 250, 500, 1000] }) => {
    const _selector = selector !== null && selector !== void 0 ? selector : selectRowsPerPage;
    const _setter = setter !== null && setter !== void 0 ? setter : setRowsPerPage;
    const dispatch = useDispatch();
    const rowPerPage = useSelector(_selector);
    const changeHandler = (value) => dispatch(_setter(value));
    return (React.createElement(RowsPerPage, { value: rowPerPage, onChange: changeHandler }));
};
export default ConnectedRowsPerPage;
//# sourceMappingURL=ConnectedRowsPerPage.js.map