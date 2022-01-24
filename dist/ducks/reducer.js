"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const index_1 = require("./index");
const rootReducer = (0, redux_1.combineReducers)({
    alerts: index_1.alertsReducer,
    pages: index_1.pagesReducer,
    sortableTables: index_1.sortableTablesReducer,
    tabs: index_1.tabsReducer,
});
exports.default = rootReducer;
//# sourceMappingURL=reducer.js.map