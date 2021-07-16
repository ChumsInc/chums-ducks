import React from 'react';
import { SortableTableField } from "./SortableTH";
export interface SortableTableProps {
    tableKey: string;
    keyField: string | ((any: any) => string);
    rowClassName?: string | object | ((any: any) => string | object);
    onSelectRow?: (any: any) => any | void;
    selected?: string;
    fields: SortableTableField[];
    data: any[];
    className?: string | object;
    onChangeSort?: (any?: any) => void;
}
declare const SortableTable: React.FC<SortableTableProps>;
export default SortableTable;
