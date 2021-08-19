import React from "react";
import RowsPerPageDuck from "./RowsPerPageDuck";
import PaginationDuck from "./PaginationDuck";
var PagerDuck = function (_a) {
    var _b = _a.pageKey, pageKey = _b === void 0 ? 'app' : _b, _c = _a.dataLength, dataLength = _c === void 0 ? 0 : _c, _d = _a.filtered, filtered = _d === void 0 ? false : _d, onChangeRowsPerPage = _a.onChangeRowsPerPage;
    var changeRowsPerPageHandler = function (value) {
        if (typeof onChangeRowsPerPage === 'function') {
            onChangeRowsPerPage(value);
        }
    };
    return (React.createElement("div", { className: "row g-3" },
        React.createElement("div", { className: "col-auto" },
            React.createElement(RowsPerPageDuck, { pageKey: pageKey, onChange: changeRowsPerPageHandler })),
        React.createElement("div", { className: "col-auto" },
            React.createElement(PaginationDuck, { pageKey: pageKey, dataLength: dataLength, filtered: filtered }))));
};
export default PagerDuck;
//# sourceMappingURL=PagerDuck.js.map