import React from "react";
import { SortableTableField } from "./index";
export interface SortableTableHeadProps {
    tableKey: string;
    fields: SortableTableField[];
    onChangeSort: (field: string, asc: boolean) => void;
}
declare const SortableTableHead: React.FC<SortableTableHeadProps>;
export default SortableTableHead;
