import React from 'react';
export { default as RowsPerPage, defaultPageValues } from "../../components/RowsPerPage";
export interface Props {
    selector?: () => number;
    setter?: () => void;
    pageValues?: Number[];
}
declare const ConnectedRowsPerPage: React.FC<Props>;
export default ConnectedRowsPerPage;
