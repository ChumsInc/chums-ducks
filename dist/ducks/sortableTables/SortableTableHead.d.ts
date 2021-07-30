import React, { TableHTMLAttributes } from "react";
import { SortableTableField } from "./index";
export interface SortableTableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
    tableKey: string;
    fields: SortableTableField[];
    onChangeSort: (field: string, asc: boolean) => void;
}
declare const SortableTableHead: React.FC<SortableTableHeadProps>;
export default SortableTableHead;
