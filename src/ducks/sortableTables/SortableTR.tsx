import React, {TableHTMLAttributes} from 'react';
import classNames from "classnames";
import {noop} from "../../utils";
import {SortableTableField} from "./index";

export interface SortableTRProps extends TableHTMLAttributes<HTMLTableRowElement> {
    rowClassName?: string | object | ((any: any) => string | object),
    selected?: boolean,
    fields: SortableTableField[],
    row: any,
    trRef?: React.LegacyRef<HTMLTableRowElement>,
    onClick?: (any?: any) => any,
}

const SortableTR: React.FC<SortableTRProps> = ({
                                                   className,
                                                   rowClassName,
                                                   selected,
                                                   fields,
                                                   row,
                                                   trRef,
                                                   onClick = noop,
                                                   ...rest
                                               }) => {
    const clickHandler = () => {
        return onClick ? onClick() : noop();
    }
    const _className = typeof rowClassName === 'function' ? rowClassName(row) : rowClassName;
    return (
        <tr ref={trRef} className={classNames({'table-active': selected}, className, _className)}
            onClick={clickHandler} {...rest}>
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
