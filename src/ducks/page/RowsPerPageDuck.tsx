import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {defaultRowsPerPageValues, rowsPerPageSelector, setRowsPerPageAction} from "./index";
import {default as RowsPerPage} from "./RowsPerPage";

export interface ConnectedRowsPerPageProps {
    pageKey?: string,
    pageValues?: number[]
}

const RowsPerPageDuck: React.FC<ConnectedRowsPerPageProps> = ({
                                                                  pageKey = 'app',
                                                                  pageValues = defaultRowsPerPageValues
                                                              }) => {
    const dispatch = useDispatch();
    const rowPerPage = useSelector(rowsPerPageSelector(pageKey));
    const changeHandler = (value: number) => dispatch(setRowsPerPageAction({key: pageKey, rowsPerPage: value}));

    return (
        <RowsPerPage value={rowPerPage} onChange={changeHandler} pageValues={pageValues}/>
    )
}
export default RowsPerPageDuck;
