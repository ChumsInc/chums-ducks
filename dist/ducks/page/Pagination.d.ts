import React from 'react';
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
