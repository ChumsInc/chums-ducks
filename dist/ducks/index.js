import { combineReducers } from 'redux';
import { default as alertsReducer, } from './alerts';
const rootReducer = combineReducers({
    alerts: alertsReducer,
});
export default rootReducer;
//# sourceMappingURL=index.js.map