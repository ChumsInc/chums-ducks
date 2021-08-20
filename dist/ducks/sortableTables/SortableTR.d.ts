import React, { TableHTMLAttributes } from 'react';
import { SortableTableField } from "./index";
export interface SortableTRProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | object | ((any: any) => string | object);
    selected?: boolean;
    fields: SortableTableField[];
    row: any;
    trRef?: React.LegacyRef<HTMLTableRowElement>;
    onClick?: (any?: any) => any;
}
declare const SortableTR: React.FC<SortableTRProps>;
export default SortableTR;
