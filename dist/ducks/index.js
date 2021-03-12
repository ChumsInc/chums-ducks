import { combineReducers } from 'redux';
import alertsReducer from './alerts';
// import ordersReducer from './orders';
// import pageReducer from './page';
// import customersReducer from './customers';
var rootReducer = combineReducers({
    alerts: alertsReducer,
    // orders: ordersReducer,
    // page: pageReducer,
    // customers: customersReducer,
});
export default rootReducer;
//# sourceMappingURL=index.js.map