import {combineReducers} from "redux";
import {alertsReducer, pagesReducer, sortableTablesReducer, tabsReducer} from './index';

const rootReducer = combineReducers({
    alerts: alertsReducer,
    pages: pagesReducer,
    sortableTables: sortableTablesReducer,
    tabs: tabsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
