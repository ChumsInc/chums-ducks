import React from "react";
import RowsPerPageDuck from "./RowsPerPageDuck";
import PaginationDuck from "./PaginationDuck";
const PagerDuck = ({ pageKey = 'app', dataLength = 0, filtered = false, }) => {
    return (React.createElement("div", { className: "row g-3" },
        React.createElement("div", { className: "col-auto" },
            React.createElement(RowsPerPageDuck, { pageKey: pageKey })),
        React.createElement("div", { className: "col-auto" },
            React.createElement(PaginationDuck, { pageKey: pageKey, dataLength: dataLength, filtered: filtered }))));
};
export default PagerDuck;
//# sourceMappingURL=PagerDuck.js.map