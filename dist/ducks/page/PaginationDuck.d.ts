import React from 'react';
export interface PaginationDuckProps {
    pageKey?: string;
    dataLength: number;
    filtered?: boolean;
    className?: string | object;
    maxButtons?: number;
}
declare const PaginationDuck: React.FC<PaginationDuckProps>;
export default PaginationDuck;
