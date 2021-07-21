export const defaultAlert = {
    canDismiss: true,
    color: "danger"
};
export const alertAdded = 'alerts/alertAdded';
export const alertDismissed = 'alerts/alertDismissed';
export const alertDismissedByContext = 'alerts/alertDismissedByContext';
export const addAlertAction = (alert) => ({
    type: alertAdded,
    payload: {
        alert: Object.assign(Object.assign({}, defaultAlert), alert)
    },
    meta: alert.context,
});
const buildAlert = (err, context) => ({ message: err.message, title: err.name, context, color: 'danger' });
export const dismissAlertAction = (id) => ({ type: alertDismissed, payload: { id } });
export const dismissContextAlert = (context) => ({ type: alertDismissedByContext, payload: { context } });
export const onErrorAction = (err, context) => addAlertAction(buildAlert(err, context));
export const alertListSelector = (state) => state.alerts.list;
export const selectAlertList = alertListSelector;
export const alertListByContextSelector = (context) => (state) => state.alerts.list.filter(alert => alert.context === context);
export const alertContextFilter = (list, context) => {
    return list.filter(al => al.context === context);
};
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
    const [contextAlert] = context ? alertContextFilter(list, context) : [];
    if (!contextAlert) {
        return {
            counter: counter + 1,
            list: [
                ...list,
                Object.assign(Object.assign({}, alert), { id: counter, count: 1, timestamp: new Date().valueOf() })
            ].sort(alertIDSort)
        };
    }
    return {
        counter,
        list: [
            ...list.filter(alert => alert.id !== contextAlert.id),
            ...list.filter(alert => alert.id === contextAlert.id)
                .map(alert => {
                return Object.assign(Object.assign(Object.assign({}, alert), payload === null || payload === void 0 ? void 0 : payload.alert), { count: alert.count + 1, timestamp: new Date().valueOf() });
            }),
        ].sort(alertIDSort),
    };
};
const alertReducer = (state = initialState, action) => {
    const { type, payload, error, meta } = action;
    const { counter, list } = state;
    switch (type) {
        case alertAdded: {
            return addAlert(state, action);
        }
        case alertDismissed:
            if ((payload === null || payload === void 0 ? void 0 : payload.id) === undefined) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.id !== (payload === null || payload === void 0 ? void 0 : payload.id))].sort(alertIDSort)
            };
        case alertDismissedByContext:
            if (!(payload === null || payload === void 0 ? void 0 : payload.context)) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.context !== (payload === null || payload === void 0 ? void 0 : payload.context))].sort(alertIDSort)
            };
        default:
            if (payload === null || payload === void 0 ? void 0 : payload.error) {
                return addAlert(state, action);
            }
            return state;
    }
};
export default alertReducer;
//# sourceMappingURL=index.js.map