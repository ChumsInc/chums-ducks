import React from "react";
import classNames from "classnames";
const SortableTH = ({ field, sorted, ascending, onClick }) => {
    if (!field.sortable) {
        return (React.createElement("th", null, field.title));
    }
    const iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    };
    const clickHandler = () => {
        onClick(field.field, !sorted ? true : !ascending);
    };
    return (React.createElement("th", { className: "sortable", onClick: clickHandler },
        field.title,
        !!sorted && (React.createElement("span", { className: classNames('ms-1', iconClassName) }))));
};
export default SortableTH;
//# sourceMappingURL=SortableTH.js.map