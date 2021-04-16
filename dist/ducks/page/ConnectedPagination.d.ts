import React from 'react';
import { RootStateOrAny } from "react-redux";
export { default as Pagination, filterPage, calcPages } from '../../components/Pagination';
export interface Props {
    dataLength: number;
    selector?: (state: RootStateOrAny) => number;
    pageSelector?: (state: RootStateOrAny) => number;
    setter?: (page: number) => any;
    filtered?: boolean;
    className?: string | object;
    maxButtons?: number;
}
declare const ConnectedPagination: React.FC<Props>;
export default ConnectedPagination;
