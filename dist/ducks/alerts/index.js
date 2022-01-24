"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertContextFilter = exports.selectAlertListByContext = exports.alertListByContextSelector = exports.selectAlertList = exports.alertListSelector = exports.onErrorAction = exports.dismissContextAlertAction = exports.dismissContextAlert = exports.dismissAlertAction = exports.addAlertAction = exports.alertDismissedByContext = exports.alertDismissed = exports.alertAdded = exports.defaultAlert = void 0;
exports.defaultAlert = {
    canDismiss: true,
    color: "danger"
};
exports.alertAdded = 'alerts/alertAdded';
exports.alertDismissed = 'alerts/alertDismissed';
exports.alertDismissedByContext = 'alerts/alertDismissedByContext';
const addAlertAction = (alert) => ({
    type: exports.alertAdded,
    payload: {
        alert: {
            ...exports.defaultAlert,
            ...alert,
        }
    },
    meta: alert.context,
});
exports.addAlertAction = addAlertAction;
const buildAlert = (err, context) => ({ message: err.message, title: err.name, context, color: 'danger' });
const dismissAlertAction = (id) => ({ type: exports.alertDismissed, payload: { id } });
exports.dismissAlertAction = dismissAlertAction;
const dismissContextAlert = (context) => ({ type: exports.alertDismissedByContext, payload: { context } });
exports.dismissContextAlert = dismissContextAlert;
const dismissContextAlertAction = (context) => ({ type: exports.alertDismissedByContext, payload: { context } });
exports.dismissContextAlertAction = dismissContextAlertAction;
const onErrorAction = (err, context) => (0, exports.addAlertAction)(buildAlert(err, context));
exports.onErrorAction = onErrorAction;
const alertListSelector = (state) => state.alerts.list;
exports.alertListSelector = alertListSelector;
exports.selectAlertList = exports.alertListSelector;
const alertListByContextSelector = (context) => (state) => state.alerts.list.filter(alert => alert.context === context);
exports.alertListByContextSelector = alertListByContextSelector;
exports.selectAlertListByContext = exports.alertListByContextSelector;
const alertContextFilter = (list, context) => {
    return list.filter(al => al.context === context);
};
exports.alertContextFilter = alertContextFilter;
const initialState = { counter: 0, list: [] };
const alertIDSort = (a, b) => a.id - b.id;
const addAlert = (state, action) => {
    const { counter, list } = state;
    const { payload } = action;
    let { alert, error, context } = payload || {};
    if (error && !alert) {
        alert = buildAlert(error, context);
    }
    if (!alert) {
        return state;
    }
    if (alert.context) {
        context = alert.context;
    }
    const [contextAlert] = context ? (0, exports.alertContextFilter)(list, context) : [];
    if (!contextAlert) {
        return {
            counter: counter + 1,
            list: [
                ...list,
                { ...alert, id: counter, count: 1, timestamp: new Date().valueOf() }
            ].sort(alertIDSort)
        };
    }
    return {
        counter,
        list: [
            ...list.filter(alert => alert.id !== contextAlert.id),
            ...list.filter(alert => alert.id === contextAlert.id)
                .map(alert => {
                return {
                    ...alert,
                    ...payload?.alert,
                    count: alert.count + 1,
                    timestamp: new Date().valueOf()
                };
            }),
        ].sort(alertIDSort),
    };
};
const alertReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { counter, list } = state;
    switch (type) {
        case exports.alertAdded: {
            return addAlert(state, action);
        }
        case exports.alertDismissed:
            if (payload?.id === undefined) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.id !== payload?.id)].sort(alertIDSort)
            };
        case exports.alertDismissedByContext:
            if (!payload?.context) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.context !== payload?.context)].sort(alertIDSort)
            };
        default:
            if (payload?.error) {
                return addAlert(state, action);
            }
            return state;
    }
};
exports.default = alertReducer;
//# sourceMappingURL=index.js.map