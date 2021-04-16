import { combineReducers } from 'redux';
import { default as alertsReducer, } from './alerts';
import { default as pageReducer } from './page';
const rootReducer = combineReducers({
    alerts: alertsReducer,
    page: pageReducer,
});
export default rootReducer;
//# sourceMappingURL=index.js.map