import React from 'react';
export interface ConnectedRowsPerPageProps {
    pageKey?: string;
    pageValues?: number[];
    onChange?: (value: number) => void;
}
declare const RowsPerPageDuck: React.FC<ConnectedRowsPerPageProps>;
export default RowsPerPageDuck;
