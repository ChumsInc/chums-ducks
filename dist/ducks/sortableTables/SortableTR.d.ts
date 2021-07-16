import React from 'react';
import { SortableTableField } from "./SortableTH";
interface SortableTRProps {
    className?: string | object | ((any: any) => string | object);
    selected?: boolean;
    fields: SortableTableField[];
    row: any;
    onClick?: (any?: any) => any;
}
declare const SortableTR: React.FC<SortableTRProps>;
export default SortableTR;
