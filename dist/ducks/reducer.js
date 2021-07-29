import { combineReducers } from "redux";
import { alertsReducer, pagesReducer, sortableTablesReducer, tabsReducer } from './index';
var rootReducer = combineReducers({
    alerts: alertsReducer,
    pages: pagesReducer,
    sortableTables: sortableTablesReducer,
    tabs: tabsReducer,
});
export default rootReducer;
//# sourceMappingURL=reducer.js.map