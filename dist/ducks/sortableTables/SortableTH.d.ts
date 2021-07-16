import React, { ReactElement } from "react";
export interface SortableTableField {
    field: string;
    title: string;
    sortable: boolean;
    render?: (row: any) => ReactElement | Element | string;
    className?: string | object | ((any: any) => string | object);
}
export interface SortableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    onClick: (field: string, ascending: boolean) => void;
}
declare const SortableTH: React.FC<SortableTHProps>;
export default SortableTH;
