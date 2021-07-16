import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentPageSelector, rowsPerPageSelector, setPageAction, calcPages} from "./index";
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

    const page = useSelector(currentPageSelector(pageKey));
    const rowsPerPage = useSelector(rowsPerPageSelector(pageKey));
    const pages = calcPages(dataLength, rowsPerPage) || 1;

    // if the current page has exceeded the number of pages, then reset to page 1
    if (page > pages) {
        dispatch(setPageAction({key: pageKey, current: 1}));
    }

    const changeHandler = (value: number) => dispatch(setPageAction({key: pageKey, current: value}));

    return (
        <Pagination page={page} pages={pages} onSelectPage={changeHandler} {...props}/>
    )
}
export default PaginationDuck;
