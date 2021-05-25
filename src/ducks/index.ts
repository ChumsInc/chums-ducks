import {combineReducers} from 'redux';

import {default as alertsReducer, } from './alerts';
import {default as pageReducer} from './page';
import {default as tabsReducer} from './tabs';

const rootReducer = combineReducers({
    alerts: alertsReducer,
    page: pageReducer,
    tabs: tabsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;

