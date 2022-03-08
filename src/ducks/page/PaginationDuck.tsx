import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calcPages, selectCurrentPage, selectRowsPerPage, setPageAction} from "./index";
import Pagination from "./Pagination";

export interface PaginationDuckProps {
    pageKey?: string,
    dataLength: number,
    filtered?: boolean,
    className?: string | object,
    maxButtons?: number,
}

const PaginationDuck: React.FC<PaginationDuckProps> = ({
                                                           pageKey = 'app',
                                                           dataLength,
                                                           ...props
                                                       }) => {

    const dispatch = useDispatch();

    const page = useSelector(selectCurrentPage(pageKey));
    const rowsPerPage = useSelector(selectRowsPerPage(pageKey));
    const pages = calcPages(dataLength, rowsPerPage) || 1;

    // if the current page has exceeded the number of pages, then reset to page 1
    useEffect(() => {
        if (page > pages) {
            dispatch(setPageAction({key: pageKey, current: 1}));
        }
    }, [pages])

    const changeHandler = (value: number) => dispatch(setPageAction({key: pageKey, current: value}));

    return (
        <Pagination page={page} pages={pages} onSelectPage={changeHandler} {...props}/>
    )
}
export default PaginationDuck;
