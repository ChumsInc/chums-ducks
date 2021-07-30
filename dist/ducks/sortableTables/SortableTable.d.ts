import React, { TableHTMLAttributes } from 'react';
import { SortableTableField } from "./index";
import { BootstrapSize } from "../../types";
export interface SortableTableProps extends TableHTMLAttributes<HTMLTableElement> {
    tableKey: string;
    keyField: string | ((any: any) => string);
    size?: BootstrapSize;
    rowClassName?: string | object | ((any: any) => string | object);
    onSelectRow?: (any: any) => any | void;
    selected?: string | number | ((any: any) => boolean);
    fields: SortableTableField[];
    data: any[];
    tfoot?: React.ReactElement<HTMLTableSectionElement>;
    onChangeSort?: (any?: any) => void;
}
declare const SortableTable: React.FC<SortableTableProps>;
export default SortableTable;
