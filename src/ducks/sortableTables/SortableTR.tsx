import React from 'react';
import classNames from "classnames";
import {noop} from "../../utils";
import {SortableTableField} from "./index";

export interface SortableTRProps {
    className?: string | object | ((any: any) => string | object),
    selected?: boolean,
    fields: SortableTableField[],
    row: any,
    onClick?: (any?: any) => any,
}

const SortableTR: React.FC<SortableTRProps> = ({
                                                   className,
                                                   selected,
                                                   fields,
                                                   row,
                                                   onClick = noop
                                               }) => {
    const clickHandler = () => {
        return onClick ? onClick() : noop();
    }
    const _className = typeof className === 'function' ? className(row) : className;
    return (
        <tr className={classNames({'table-active': selected}, _className)} onClick={clickHandler}>
            {fields.map((field, index) => {
                const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
                if (typeof field.render === 'function') {
                    return (
                        <td key={index} className={classNames(fieldClassName)}
                            colSpan={field.colSpan}>{field.render(row)}</td>
                    );
                }
                return (<td key={index} className={classNames(fieldClassName)}
                            colSpan={field.colSpan}>{row[field.field]}</td>);
            })}
        </tr>
    )
}

export default SortableTR;
