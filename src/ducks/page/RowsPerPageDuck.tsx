import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {defaultRowsPerPageValues, rowsPerPageSelector, setRowsPerPageAction} from "./index";
import {default as RowsPerPage} from "./RowsPerPage";

export interface ConnectedRowsPerPageProps {
    pageKey?: string,
    pageValues?: number[],
    onChange?: (value: number) => void,
}

const RowsPerPageDuck: React.FC<ConnectedRowsPerPageProps> = ({
                                                                  pageKey = 'app',
                                                                  pageValues = defaultRowsPerPageValues,
    onChange,
                                                              }) => {
    const dispatch = useDispatch();
    const rowPerPage = useSelector(rowsPerPageSelector(pageKey));
    const changeHandler = (value: number) => {
        dispatch(setRowsPerPageAction({key: pageKey, rowsPerPage: value}));
        if (typeof onChange === 'function') {
            onChange(value);
        }
    }

    return (
        <RowsPerPage value={rowPerPage} onChange={changeHandler} pageValues={pageValues}/>
    )
}
export default RowsPerPageDuck;
