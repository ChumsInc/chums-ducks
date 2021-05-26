export const alertAdded = 'app/alerts/alertAdded';
export const alertDismissed = 'app/alerts/alertDismissed';
export const alertDismissedByContext = 'app/alerts/alertDismissedByContext';
export const defaultAlert = {
    canDismiss: true,
    color: "danger"
};
export const addAlertAction = (alert) => ({
    type: alertAdded,
    payload: {
        alert: Object.assign(Object.assign({}, defaultAlert), alert)
    }
});
export const dismissAlertAction = (id) => ({ type: alertDismissed, payload: { id } });
export const dismissContextAlert = (context) => ({ type: alertDismissedByContext, payload: { context } });
export const onErrorAction = (err, context) => addAlertAction({ message: err.message, title: err.name, context, color: 'danger' });
export const selectAlertList = (state) => state.alerts.list;
export const alertContextFilter = (list, context) => {
    return list.filter(al => al.context === context);
};
const initialState = { counter: 0, list: [] };
const alertIDSort = (a, b) => a.id - b.id;
const alertReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { counter, list } = state;
    switch (type) {
        case alertAdded: {
            const { alert } = payload;
            if (!alert) {
                return state;
            }
            const context = alert.context;
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
                        return Object.assign(Object.assign(Object.assign({}, alert), payload.alert), { count: alert.count + 1, timestamp: new Date().valueOf() });
                    }),
                ].sort(alertIDSort),
            };
        }
        case alertDismissed:
            if (payload.id === undefined) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.id !== payload.id)].sort(alertIDSort)
            };
        case alertDismissedByContext:
            if (!payload.context) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.context !== payload.context)].sort(alertIDSort)
            };
        default:
            return state;
    }
};
export default alertReducer;
//# sourceMappingURL=index.js.map