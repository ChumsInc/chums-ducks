import React from "react";
import classNames from "classnames";
var SortableTH = function (_a) {
    var field = _a.field, sorted = _a.sorted, ascending = _a.ascending, onClick = _a.onClick;
    if (!field.sortable) {
        return (React.createElement("th", null, field.title));
    }
    var iconClassName = {
        'bi-sort-down': !!sorted && !!ascending,
        'bi-sort-up': !!sorted && !ascending,
    };
    var clickHandler = function () {
        onClick(field.field, !sorted ? true : !ascending);
    };
    return (React.createElement("th", { className: "sortable", onClick: clickHandler },
        field.title,
        !!sorted && (React.createElement("span", { className: classNames('ms-1', iconClassName) }))));
};
export default SortableTH;
//# sourceMappingURL=SortableTH.js.map