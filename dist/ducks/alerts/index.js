var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var defaultAlert = {
    canDismiss: true,
    color: "danger"
};
export var alertAdded = 'alerts/alertAdded';
export var alertDismissed = 'alerts/alertDismissed';
export var alertDismissedByContext = 'alerts/alertDismissedByContext';
export var addAlertAction = function (alert) {
    return ({
        type: alertAdded,
        payload: {
            alert: __assign(__assign({}, defaultAlert), alert)
        },
        meta: alert.context,
    });
};
var buildAlert = function (err, context) { return ({ message: err.message, title: err.name, context: context, color: 'danger' }); };
export var dismissAlertAction = function (id) { return ({ type: alertDismissed, payload: { id: id } }); };
export var dismissContextAlert = function (context) { return ({ type: alertDismissedByContext, payload: { context: context } }); };
export var onErrorAction = function (err, context) {
    return addAlertAction(buildAlert(err, context));
};
export var alertListSelector = function (state) { return state.alerts.list; };
export var selectAlertList = alertListSelector;
export var alertListByContextSelector = function (context) { return function (state) { return state.alerts.list.filter(function (alert) { return alert.context === context; }); }; };
export var alertContextFilter = function (list, context) {
    return list.filter(function (al) { return al.context === context; });
};
var initialState = { counter: 0, list: [] };
var alertIDSort = function (a, b) { return a.id - b.id; };
var addAlert = function (state, action) {
    var counter = state.counter, list = state.list;
    var payload = action.payload;
    var _a = payload || {}, alert = _a.alert, error = _a.error, context = _a.context;
    if (error && !alert) {
        alert = buildAlert(error, context);
    }
    if (!alert) {
        return state;
    }
    if (alert.context) {
        context = alert.context;
    }
    var contextAlert = (context ? alertContextFilter(list, context) : [])[0];
    if (!contextAlert) {
        return {
            counter: counter + 1,
            list: __spreadArray(__spreadArray([], list, true), [
                __assign(__assign({}, alert), { id: counter, count: 1, timestamp: new Date().valueOf() })
            ], false).sort(alertIDSort)
        };
    }
    return {
        counter: counter,
        list: __spreadArray(__spreadArray([], list.filter(function (alert) { return alert.id !== contextAlert.id; }), true), list.filter(function (alert) { return alert.id === contextAlert.id; })
            .map(function (alert) {
            return __assign(__assign(__assign({}, alert), payload === null || payload === void 0 ? void 0 : payload.alert), { count: alert.count + 1, timestamp: new Date().valueOf() });
        }), true).sort(alertIDSort),
    };
};
var alertReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var counter = state.counter, list = state.list;
    switch (type) {
        case alertAdded: {
            return addAlert(state, action);
        }
        case alertDismissed:
            if ((payload === null || payload === void 0 ? void 0 : payload.id) === undefined) {
                return state;
            }
            return {
                counter: counter,
                list: __spreadArray([], list.filter(function (alert) { return alert.id !== (payload === null || payload === void 0 ? void 0 : payload.id); }), true).sort(alertIDSort)
            };
        case alertDismissedByContext:
            if (!(payload === null || payload === void 0 ? void 0 : payload.context)) {
                return state;
            }
            return {
                counter: counter,
                list: __spreadArray([], list.filter(function (alert) { return alert.context !== (payload === null || payload === void 0 ? void 0 : payload.context); }), true).sort(alertIDSort)
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