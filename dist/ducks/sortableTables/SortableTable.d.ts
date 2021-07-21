import React from 'react';
import { SortableTableField } from "./index";
export interface SortableTableProps {
    tableKey: string;
    keyField: string | ((any: any) => string);
    rowClassName?: string | object | ((any: any) => string | object);
    onSelectRow?: (any: any) => any | void;
    selected?: string | number | ((any: any) => boolean);
    fields: SortableTableField[];
    data: any[];
    className?: string | object;
    onChangeSort?: (any?: any) => void;
}
declare const SortableTable: React.FC<SortableTableProps>;
export default SortableTable;
