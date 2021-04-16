import {combineReducers} from 'redux';

import {default as alertsReducer, } from './alerts';

const rootReducer = combineReducers({
    alerts: alertsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
