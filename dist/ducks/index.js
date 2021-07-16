import { combineReducers } from 'redux';
import { default as alertsReducer } from './alerts';
import { default as pageReducer } from './page';
import { default as sitesReducer } from './sites';
import { default as sortableTablesReducer } from './sortableTables';
import { default as tabsReducer } from './tabs';
const rootReducer = combineReducers({
    alerts: alertsReducer,
    page: pageReducer,
    sites: sitesReducer,
    sortableTables: sortableTablesReducer,
    tabs: tabsReducer,
});
export default rootReducer;
//# sourceMappingURL=index.js.map