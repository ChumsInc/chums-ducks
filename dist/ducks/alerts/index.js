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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var alertsAlertAdded = 'app/alerts/alertAdded';
var alertsAlertDismissed = 'app/alerts/alertDismissed';
var initialState = { counter: 0, list: [] };
export default function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    var counter = state.counter, list = state.list;
    switch (type) {
        case alertsAlertAdded: {
            var alert_1 = payload.alert;
            alert_1.id = counter;
            alert_1.count = 0;
            var _a = list.filter(function (a) { return a.context === alert_1.context; })[0], _b = _a === void 0 ? {} : _a, _c = _b.id, id_1 = _c === void 0 ? alert_1.id : _c, _d = _b.count, count = _d === void 0 ? alert_1.count : _d;
            return __assign(__assign({}, state), { counter: counter + 1, list: __spreadArray(__spreadArray([], list.filter(function (a) { return a.context !== alert_1.context; })), [
                    __assign(__assign({}, alert_1), { id: id_1, count: count + 1 }),
                ]) });
        }
        case alertsAlertDismissed:
            var id_2 = payload.id;
            return __assign(__assign({}, state), { list: list.filter(function (alert) { return alert.id !== id_2; }) });
        default:
            return state;
    }
}
export function addAlertAction(alert) {
    return {
        type: alertsAlertAdded,
        payload: {
            alert: __assign(__assign({}, alert), { color: alert.color || 'danger' })
        },
    };
}
export function dismissAlertAction(id) {
    return {
        type: alertsAlertDismissed,
        payload: {
            id: id
        }
    };
}
export var alertSelector = function (state) {
    return state.alerts.list;
};
export function onErrorAction(err, context) {
    return {
        type: alertsAlertAdded,
        payload: {
            alert: { message: err.message, title: err.name, context: context, color: 'danger' }
        }
    };
}
//# sourceMappingURL=index.js.map