import React from "react";
import classNames from "classnames";
var SortableTH = function (_a) {
    var field = _a.field, sorted = _a.sorted, ascending = _a.ascending, className = _a.className, onClick = _a.onClick;
    if (!field.sortable) {
        return (React.createElement("th", { className: classNames(className) }, field.title));
    }
    var iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    };
    var clickHandler = function () {
        onClick(field.field, !sorted ? true : !ascending);
    };
    return (React.createElement("th", { className: classNames("sortable", className), onClick: clickHandler },
        field.title,
        !!sorted && (React.createElement("span", { className: classNames('ms-1', iconClassName) }))));
};
export default SortableTH;
//# sourceMappingURL=SortableTH.js.map