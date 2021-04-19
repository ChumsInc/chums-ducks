import React from 'react';
import "./Pagination.scss";
export declare const filterPage: (page: number, rowsPerPage: number) => (row: any, index: number) => boolean;
export declare const calcPages: (rows: number, rowsPerPage: number) => number;
export interface PaginationProps {
    page: number;
    pages: number;
    filtered?: boolean;
    className?: string | object;
    maxButtons?: number;
    onSelectPage: (page: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
