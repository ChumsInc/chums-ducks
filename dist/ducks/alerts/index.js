export const alertAdded = 'app/alerts/alertAdded';
export const alertDismissed = 'app/alerts/alertDismissed';
export const addAlertAction = (alert) => ({
    type: alertAdded,
    payload: {
        alert: Object.assign(Object.assign({}, alert), { color: alert.color || 'danger' })
    }
});
export const dismissAlertAction = (id) => ({ type: alertDismissed, payload: { id } });
export const onErrorAction = (err, context) => addAlertAction({ message: err.message, title: err.name, context, color: 'danger' });
export const selectAlertList = (state) => state.alerts.list;
export const alertContextFilter = (list, context) => {
    return list.filter(al => al.context === context);
};
const initialState = { counter: 0, list: [] };
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
            if (contextAlert) {
                return {
                    counter,
                    list: [
                        ...list.filter(al => al.id !== contextAlert.id),
                        ...list.filter(al => al.id === contextAlert.id)
                            .map(al => (Object.assign(Object.assign({}, al), { count: al.count + 1 }))),
                    ],
                };
            }
            return {
                counter: counter + 1,
                list: [...list, Object.assign(Object.assign({}, alert), { id: counter, count: 0 })]
            };
        }
        case alertDismissed:
            if (payload.id === undefined) {
                return state;
            }
            return {
                counter,
                list: [...list.filter(alert => alert.id !== payload.id)]
            };
        default:
            return state;
    }
};
export default alertReducer;
//# sourceMappingURL=index.js.map