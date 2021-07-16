import React from 'react';
import classNames from "classnames";
import { noop } from "../../utils";
const SortableTR = ({ className, selected, fields, row, onClick = noop }) => {
    const clickHandler = (event) => {
        return onClick ? onClick() : noop();
    };
    const _className = typeof className === 'function' ? className(row) : className;
    return (React.createElement("tr", { className: classNames({ 'table-active': selected }, _className), onClick: clickHandler }, fields.map((field, index) => {
        const fieldClassName = typeof field.className === 'function' ? field.className(row) : field.className;
        if (typeof field.render === 'function') {
            return (React.createElement("td", { key: index, className: classNames(fieldClassName) }, field.render(row)));
        }
        return (React.createElement("td", { key: index, className: classNames(fieldClassName) }, row[field.field]));
    })));
};
export default SortableTR;
//# sourceMappingURL=SortableTR.js.map