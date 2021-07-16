import React from "react";
import { SortableTableField } from "./index";
export interface SortableTHProps {
    field: SortableTableField;
    sorted?: boolean;
    ascending?: boolean;
    onClick: (field: string, ascending: boolean) => void;
}
declare const SortableTH: React.FC<SortableTHProps>;
export default SortableTH;
